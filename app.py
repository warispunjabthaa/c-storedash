"""
POS Live Cloud — receives real-time POS transaction data from store watchers
and serves a dashboard showing sales across all stores.
"""
import os
import json
import secrets
from datetime import datetime, date, timedelta
from contextlib import asynccontextmanager

from fastapi import FastAPI, Request, Depends, HTTPException, Form
from fastapi.responses import HTMLResponse, FileResponse, RedirectResponse
from fastapi.staticfiles import StaticFiles
from starlette.middleware.sessions import SessionMiddleware
import asyncpg

# Auth config
AUTH_USERNAME = os.environ.get('AUTH_USERNAME', 'admin')
AUTH_PASSWORD = os.environ.get('AUTH_PASSWORD', 'store2026')
SESSION_SECRET = os.environ.get('SESSION_SECRET', secrets.token_hex(32))

DATABASE_URL = os.environ.get('DATABASE_URL', '') or os.environ.get('DATABASE_PUBLIC_URL', '')

pool = None


async def get_pool():
    global pool
    if pool is None:
        pool = await asyncpg.create_pool(DATABASE_URL, min_size=2, max_size=10)
    return pool


@asynccontextmanager
async def lifespan(app: FastAPI):
    p = await get_pool()
    async with p.acquire() as conn:
        await conn.execute("""
            CREATE TABLE IF NOT EXISTS stores (
                id SERIAL PRIMARY KEY,
                store_id TEXT UNIQUE NOT NULL,
                name TEXT NOT NULL
            );

            CREATE TABLE IF NOT EXISTS transactions (
                id SERIAL PRIMARY KEY,
                store_id TEXT NOT NULL,
                business_date DATE NOT NULL,
                event_date DATE,
                event_time TEXT,
                transaction_id TEXT,
                register_id TEXT,
                cashier_id TEXT,
                total NUMERIC(10,2) DEFAULT 0,
                tender TEXT,
                event_type TEXT DEFAULT 'sale',
                created_at TIMESTAMP DEFAULT NOW()
            );

            CREATE TABLE IF NOT EXISTS transaction_items (
                id SERIAL PRIMARY KEY,
                transaction_id INTEGER REFERENCES transactions(id),
                scan_code TEXT NOT NULL,
                description TEXT,
                qty NUMERIC(10,3) DEFAULT 0,
                amount NUMERIC(10,2) DEFAULT 0,
                price NUMERIC(10,2) DEFAULT 0
            );

            CREATE TABLE IF NOT EXISTS transaction_fuel (
                id SERIAL PRIMARY KEY,
                transaction_id INTEGER REFERENCES transactions(id),
                grade TEXT,
                gallons NUMERIC(10,3) DEFAULT 0,
                amount NUMERIC(10,2) DEFAULT 0,
                price_per_gallon NUMERIC(10,3) DEFAULT 0
            );

            CREATE TABLE IF NOT EXISTS daily_summary (
                id SERIAL PRIMARY KEY,
                store_id TEXT NOT NULL,
                business_date DATE NOT NULL,
                total_transactions INTEGER DEFAULT 0,
                total_items INTEGER DEFAULT 0,
                total_item_revenue NUMERIC(10,2) DEFAULT 0,
                unique_upcs INTEGER DEFAULT 0,
                total_fuel_gallons NUMERIC(10,3) DEFAULT 0,
                total_fuel_revenue NUMERIC(10,2) DEFAULT 0,
                total_revenue NUMERIC(10,2) DEFAULT 0,
                updated_at TIMESTAMP DEFAULT NOW(),
                UNIQUE(store_id, business_date)
            );

            CREATE INDEX IF NOT EXISTS idx_txn_store_date ON transactions(store_id, business_date);
            -- Add event_type column if missing (migration)
            DO $$ BEGIN
                ALTER TABLE transactions ADD COLUMN event_type TEXT DEFAULT 'sale';
            EXCEPTION WHEN duplicate_column THEN NULL;
            END $$;
            CREATE INDEX IF NOT EXISTS idx_txn_items_txn ON transaction_items(transaction_id);
            CREATE INDEX IF NOT EXISTS idx_daily_store_date ON daily_summary(store_id, business_date);

            CREATE TABLE IF NOT EXISTS critical_tasks (
                id SERIAL PRIMARY KEY,
                store_id TEXT NOT NULL,
                task_key TEXT NOT NULL,
                last_date DATE,
                last_value TEXT,
                notes TEXT,
                updated_at TIMESTAMP DEFAULT NOW(),
                UNIQUE(store_id, task_key)
            );
        """)

        # Seed stores
        for sid, name in [('10064461', '801 S Main St'), ('7413', 'Amiya Express'), ('77573764', 'Amiya Express 2')]:
            await conn.execute(
                "INSERT INTO stores (store_id, name) VALUES ($1, $2) ON CONFLICT (store_id) DO NOTHING",
                sid, name
            )

    yield
    if pool:
        await pool.close()


app = FastAPI(lifespan=lifespan)


# --- Auth ---

LOGIN_PAGE = """
<!DOCTYPE html>
<html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>POS Live - Login</title>
<style>
body { font-family: -apple-system, sans-serif; background: #0f172a; color: #e2e8f0; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
.login-box { background: #1e293b; padding: 40px; border-radius: 16px; width: 320px; box-shadow: 0 8px 32px rgba(0,0,0,0.3); }
h1 { color: #38bdf8; font-size: 24px; margin-bottom: 24px; text-align: center; }
input { width: 100%; padding: 12px; margin-bottom: 12px; background: #0f172a; border: 1px solid #475569; border-radius: 8px; color: #e2e8f0; font-size: 14px; box-sizing: border-box; }
input:focus { border-color: #38bdf8; outline: none; }
button { width: 100%; padding: 12px; background: #38bdf8; color: #0f172a; border: none; border-radius: 8px; font-size: 14px; font-weight: 700; cursor: pointer; }
button:hover { background: #7dd3fc; }
.error { color: #ef4444; font-size: 13px; margin-bottom: 12px; text-align: center; }
</style></head>
<body><div class="login-box">
<h1>POS Live</h1>
{error}
<form method="POST" action="/login">
<input name="username" placeholder="Username" required>
<input name="password" type="password" placeholder="Password" required>
<button type="submit">Sign In</button>
</form></div></body></html>
"""


@app.get("/login")
async def login_page():
    return HTMLResponse(LOGIN_PAGE.replace('{error}', ''))


@app.post("/login")
async def login(request: Request, username: str = Form(...), password: str = Form(...)):
    if username == AUTH_USERNAME and password == AUTH_PASSWORD:
        request.session['authenticated'] = True
        return RedirectResponse('/', status_code=302)
    return HTMLResponse(LOGIN_PAGE.replace('{error}', '<div class="error">Invalid credentials</div>'), status_code=401)


@app.get("/logout")
async def logout(request: Request):
    request.session.clear()
    return RedirectResponse('/login', status_code=302)


app.add_middleware(SessionMiddleware, secret_key=SESSION_SECRET)


API_KEY = os.environ.get('API_KEY', 'pos-live-2026-secret')


def check_auth(request: Request):
    """Dependency to check authentication."""
    if not request.session.get('authenticated'):
        raise HTTPException(status_code=401, detail="Not authenticated")


def check_api_or_session(request: Request):
    """Allow access via session (browser) or API key (watchers)."""
    if request.session.get('authenticated'):
        return
    api_key = request.headers.get('X-API-Key') or request.query_params.get('api_key')
    if api_key == API_KEY:
        return
    raise HTTPException(status_code=401, detail="Not authenticated")


STORE_NAMES = {
    '10064461': '801 S Main St',
    '7413': 'Amiya Express',
    '77573764': 'Amiya Express 2',
}


@app.post("/api/ingest")
async def ingest(request: Request, _=Depends(check_api_or_session)):
    """Receive batch of transactions from a store watcher. Requires API key."""
    body = await request.json()
    store_id = body['store_id']
    transactions = body['transactions']

    p = await get_pool()
    processed = 0
    dates_affected = set()

    async with p.acquire() as conn:
        for txn in transactions:
            bdate_str = txn['business_date']
            bdate = date.fromisoformat(bdate_str)
            edate_str = txn.get('event_date', bdate_str)
            edate = date.fromisoformat(edate_str) if edate_str else bdate
            dates_affected.add((store_id, bdate))

            # Insert transaction
            txn_row = await conn.fetchrow("""
                INSERT INTO transactions (store_id, business_date, event_date, event_time,
                    transaction_id, register_id, cashier_id, total, tender, event_type)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
                RETURNING id
            """, store_id, bdate, edate, txn.get('event_time', ''),
                txn.get('transaction_id', ''), txn.get('register_id', ''),
                txn.get('cashier_id', ''), float(txn.get('total', 0)), txn.get('tender', ''),
                txn.get('event_type', 'sale'))

            db_txn_id = txn_row['id']

            # Insert items
            for item in txn.get('items', []):
                await conn.execute("""
                    INSERT INTO transaction_items (transaction_id, scan_code, description, qty, amount, price)
                    VALUES ($1, $2, $3, $4, $5, $6)
                """, db_txn_id, item['scan_code'], item.get('description', ''),
                    float(item.get('qty', 0)), float(item.get('amount', 0)), float(item.get('price', 0)))

            # Insert fuel
            for fuel in txn.get('fuel', []):
                await conn.execute("""
                    INSERT INTO transaction_fuel (transaction_id, grade, gallons, amount, price_per_gallon)
                    VALUES ($1, $2, $3, $4, $5)
                """, db_txn_id, fuel.get('grade', ''), float(fuel.get('gallons', 0)),
                    float(fuel.get('amount', 0)), float(fuel.get('price_per_gallon', 0)))

            processed += 1

        # Update daily summaries for affected dates
        for sid, bdate in dates_affected:
            await conn.execute("""
                INSERT INTO daily_summary (store_id, business_date,
                    total_transactions, total_items, total_item_revenue, unique_upcs,
                    total_fuel_gallons, total_fuel_revenue, total_revenue, updated_at)
                SELECT
                    t.store_id,
                    t.business_date,
                    COUNT(DISTINCT t.id),
                    COALESCE(SUM(ti.qty), 0),
                    COALESCE(SUM(ti.amount), 0),
                    COUNT(DISTINCT ti.scan_code),
                    COALESCE((SELECT SUM(tf.gallons) FROM transaction_fuel tf
                              JOIN transactions t2 ON tf.transaction_id = t2.id
                              WHERE t2.store_id = $1 AND t2.business_date = $2), 0),
                    COALESCE((SELECT SUM(tf.amount) FROM transaction_fuel tf
                              JOIN transactions t2 ON tf.transaction_id = t2.id
                              WHERE t2.store_id = $1 AND t2.business_date = $2), 0),
                    COALESCE(SUM(ti.amount), 0) +
                    COALESCE((SELECT SUM(tf.amount) FROM transaction_fuel tf
                              JOIN transactions t2 ON tf.transaction_id = t2.id
                              WHERE t2.store_id = $1 AND t2.business_date = $2), 0),
                    NOW()
                FROM transactions t
                LEFT JOIN transaction_items ti ON ti.transaction_id = t.id
                WHERE t.store_id = $1 AND t.business_date = $2
                GROUP BY t.store_id, t.business_date
                ON CONFLICT (store_id, business_date) DO UPDATE SET
                    total_transactions = EXCLUDED.total_transactions,
                    total_items = EXCLUDED.total_items,
                    total_item_revenue = EXCLUDED.total_item_revenue,
                    unique_upcs = EXCLUDED.unique_upcs,
                    total_fuel_gallons = EXCLUDED.total_fuel_gallons,
                    total_fuel_revenue = EXCLUDED.total_fuel_revenue,
                    total_revenue = EXCLUDED.total_revenue,
                    updated_at = NOW()
            """, sid, bdate)

    return {'processed': processed, 'dates': len(dates_affected)}


@app.get("/api/dashboard")
async def dashboard_data(request: Request, days: int = 7, from_date: str = None, to_date: str = None):
    """Get dashboard data for all stores."""
    p = await get_pool()

    if from_date and to_date:
        since = date.fromisoformat(from_date)
        until = date.fromisoformat(to_date)
    else:
        since = date.today() - timedelta(days=days)
        until = date.today()

    async with p.acquire() as conn:
        rows = await conn.fetch("""
            SELECT store_id, business_date, total_transactions, total_items,
                   total_item_revenue, unique_upcs, total_fuel_gallons,
                   total_fuel_revenue, total_revenue, updated_at
            FROM daily_summary
            WHERE business_date >= $1 AND business_date <= $2
            ORDER BY business_date DESC, store_id
        """, since, until)

    stores = {}
    for row in rows:
        sid = row['store_id']
        if sid not in stores:
            stores[sid] = {'name': STORE_NAMES.get(sid, sid), 'days': []}
        stores[sid]['days'].append({
            'date': row['business_date'].isoformat(),
            'transactions': row['total_transactions'],
            'items': row['total_items'],
            'item_revenue': float(row['total_item_revenue']),
            'unique_upcs': row['unique_upcs'],
            'fuel_gallons': float(row['total_fuel_gallons']),
            'fuel_revenue': float(row['total_fuel_revenue']),
            'total_revenue': float(row['total_revenue']),
            'updated': row['updated_at'].isoformat() if row['updated_at'] else '',
        })

    return stores


@app.get("/api/today")
async def today_data():
    """Get today's (or most recent day's) live data for all stores."""
    p = await get_pool()
    today_date = date.today()

    async with p.acquire() as conn:
        # For each store, find the most recent date with data (today or latest)
        store_dates = {}
        for sid in STORE_NAMES:
            row = await conn.fetchrow("""
                SELECT business_date FROM daily_summary
                WHERE store_id = $1 ORDER BY business_date DESC LIMIT 1
            """, sid)
            store_dates[sid] = row['business_date'] if row else today_date

        # Get summary per store for its target date
        summaries = []
        for sid, target_date in store_dates.items():
            row = await conn.fetchrow("""
                SELECT store_id, total_transactions, total_items, total_item_revenue,
                       unique_upcs, total_fuel_gallons, total_fuel_revenue, total_revenue, updated_at,
                       business_date
                FROM daily_summary WHERE store_id = $1 AND business_date = $2
            """, sid, target_date)
            if row:
                summaries.append(row)

        # Get last 10 transactions per store
        recent = {}
        for sid in STORE_NAMES:
            target_date = store_dates[sid]
            txns = await conn.fetch("""
                SELECT t.event_time, t.total, t.tender, t.register_id,
                       (SELECT string_agg(ti.description || ' x' || ti.qty::text, ', ')
                        FROM transaction_items ti WHERE ti.transaction_id = t.id) as items_desc
                FROM transactions t
                WHERE t.store_id = $1 AND t.business_date = $2
                ORDER BY t.id DESC LIMIT 10
            """, sid, target_date)
            recent[sid] = [dict(t) for t in txns]

        # Get top items per store
        top_items = {}
        for sid in STORE_NAMES:
            target_date = store_dates[sid]
            items = await conn.fetch("""
                SELECT ti.scan_code, ti.description, SUM(ti.qty) as total_qty,
                       SUM(ti.amount) as total_amount
                FROM transaction_items ti
                JOIN transactions t ON ti.transaction_id = t.id
                WHERE t.store_id = $1 AND t.business_date = $2
                GROUP BY ti.scan_code, ti.description
                ORDER BY total_qty DESC LIMIT 20
            """, sid, target_date)
            top_items[sid] = [dict(i) for i in items]

    result = {}
    for row in summaries:
        sid = row['store_id']
        bdate = row['business_date'] if 'business_date' in row.keys() else store_dates.get(sid, today_date)
        result[sid] = {
            'name': STORE_NAMES.get(sid, sid),
            'date': bdate.isoformat() if bdate else today_date.isoformat(),
            'transactions': row['total_transactions'],
            'items': row['total_items'],
            'item_revenue': float(row['total_item_revenue']),
            'unique_upcs': row['unique_upcs'],
            'fuel_gallons': float(row['total_fuel_gallons']),
            'fuel_revenue': float(row['total_fuel_revenue']),
            'total_revenue': float(row['total_revenue']),
            'updated': row['updated_at'].isoformat() if row['updated_at'] else '',
            'recent': recent.get(sid, []),
            'top_items': top_items.get(sid, []),
        }

    # Include stores with no data today
    for sid, name in STORE_NAMES.items():
        if sid not in result:
            result[sid] = {
                'name': name, 'transactions': 0, 'items': 0,
                'item_revenue': 0, 'unique_upcs': 0,
                'fuel_gallons': 0, 'fuel_revenue': 0, 'total_revenue': 0,
                'updated': '', 'recent': [], 'top_items': [],
            }

    return result


@app.get("/api/store/{store_id}/items")
async def store_items(store_id: str, date_str: str = None, days: int = 1, from_date: str = None, to_date: str = None):
    """Get item sales for a store on a specific date or date range."""
    p = await get_pool()

    if from_date and to_date:
        since = date.fromisoformat(from_date)
        target = date.fromisoformat(to_date)
        date_filter = "t.business_date >= $2 AND t.business_date <= $3"
        params = [store_id, since, target]
    elif date_str:
        target = date.fromisoformat(date_str)
        if days == 1:
            date_filter = "t.business_date = $2"
            params = [store_id, target]
        else:
            since = target - timedelta(days=days-1)
            date_filter = "t.business_date >= $2 AND t.business_date <= $3"
            params = [store_id, since, target]
    else:
        target = date.today()
        if days == 1:
            date_filter = "t.business_date = $2"
            params = [store_id, target]
        else:
            since = target - timedelta(days=days-1)
            date_filter = "t.business_date >= $2 AND t.business_date <= $3"
            params = [store_id, since, target]

    async with p.acquire() as conn:
        query = f"""
            SELECT ti.scan_code, ti.description,
                   SUM(ti.qty) as total_qty, SUM(ti.amount) as total_amount,
                   CASE WHEN SUM(ti.qty) > 0 THEN SUM(ti.amount) / SUM(ti.qty) ELSE 0 END as avg_price
            FROM transaction_items ti
            JOIN transactions t ON ti.transaction_id = t.id
            WHERE t.store_id = $1 AND {date_filter}
            GROUP BY ti.scan_code, ti.description
            ORDER BY total_qty DESC
        """
        items = await conn.fetch(query, *params)

    return [{
        'scan_code': i['scan_code'],
        'description': i['description'],
        'qty': float(i['total_qty']),
        'amount': float(i['total_amount']),
        'avg_price': float(i['avg_price']),
    } for i in items]


@app.get("/api/store/{store_id}/item/{scan_code}")
async def item_detail(store_id: str, scan_code: str, days: int = 90):
    """Get daily sales history for a specific item at a store."""
    p = await get_pool()
    since = date.today() - timedelta(days=days)

    async with p.acquire() as conn:
        # Daily breakdown
        daily = await conn.fetch("""
            SELECT t.business_date, SUM(ti.qty) as qty_sold, SUM(ti.amount) as revenue,
                   CASE WHEN SUM(ti.qty) > 0 THEN SUM(ti.amount) / SUM(ti.qty) ELSE 0 END as avg_price,
                   COUNT(DISTINCT t.id) as transactions
            FROM transaction_items ti
            JOIN transactions t ON ti.transaction_id = t.id
            WHERE t.store_id = $1 AND ti.scan_code = $2 AND t.business_date >= $3
            GROUP BY t.business_date
            ORDER BY t.business_date DESC
        """, store_id, scan_code, since)

        # Totals
        totals = await conn.fetch("""
            SELECT SUM(ti.qty) as total_qty, SUM(ti.amount) as total_revenue,
                   CASE WHEN SUM(ti.qty) > 0 THEN SUM(ti.amount) / SUM(ti.qty) ELSE 0 END as avg_price,
                   COUNT(DISTINCT t.business_date) as days_sold,
                   MIN(t.business_date) as first_sold, MAX(t.business_date) as last_sold
            FROM transaction_items ti
            JOIN transactions t ON ti.transaction_id = t.id
            WHERE t.store_id = $1 AND ti.scan_code = $2
        """, store_id, scan_code)

        # Description
        desc = await conn.fetchrow("""
            SELECT description FROM transaction_items ti
            JOIN transactions t ON ti.transaction_id = t.id
            WHERE t.store_id = $1 AND ti.scan_code = $2
            ORDER BY t.id DESC LIMIT 1
        """, store_id, scan_code)

    total = totals[0] if totals else {}
    num_days = len(daily) or 1
    total_qty = float(total.get('total_qty', 0) or 0)

    return {
        'scan_code': scan_code,
        'description': desc['description'] if desc else '',
        'store_id': store_id,
        'total_qty': total_qty,
        'total_revenue': float(total.get('total_revenue', 0) or 0),
        'avg_price': float(total.get('avg_price', 0) or 0),
        'avg_daily': round(total_qty / num_days, 1),
        'days_sold': total.get('days_sold', 0),
        'first_sold': total['first_sold'].isoformat() if total.get('first_sold') else None,
        'last_sold': total['last_sold'].isoformat() if total.get('last_sold') else None,
        'daily': [{
            'date': d['business_date'].isoformat(),
            'qty': float(d['qty_sold']),
            'revenue': float(d['revenue']),
            'avg_price': float(d['avg_price']),
            'transactions': d['transactions'],
        } for d in daily],
    }


@app.get("/api/store/{store_id}/item/{scan_code}/transactions")
async def item_transactions(store_id: str, scan_code: str, on_date: str = None):
    """Get individual transactions for a specific item on a specific date."""
    p = await get_pool()
    target = date.fromisoformat(on_date) if on_date else date.today()

    async with p.acquire() as conn:
        txns = await conn.fetch("""
            SELECT t.event_time, t.transaction_id, t.register_id, t.cashier_id,
                   t.total as txn_total, t.tender,
                   ti.qty, ti.amount, ti.price,
                   (SELECT string_agg(ti2.description || ' x' || ti2.qty::text, ', ')
                    FROM transaction_items ti2 WHERE ti2.transaction_id = t.id) as all_items
            FROM transaction_items ti
            JOIN transactions t ON ti.transaction_id = t.id
            WHERE t.store_id = $1 AND ti.scan_code = $2 AND t.business_date = $3
            ORDER BY t.event_time DESC
        """, store_id, scan_code, target)

    return [{
        'time': t['event_time'],
        'transaction_id': t['transaction_id'],
        'register': t['register_id'],
        'cashier': t['cashier_id'],
        'item_qty': float(t['qty']),
        'item_amount': float(t['amount']),
        'item_price': float(t['price']),
        'txn_total': float(t['txn_total'] or 0),
        'tender': t['tender'],
        'all_items': t['all_items'] or '',
    } for t in txns]


@app.get("/api/transactions")
async def transactions_list(request: Request, store_id: str = None, on_date: str = None, event_type: str = None, limit: int = 50):
    """Get transaction list for Live Data page."""
    p = await get_pool()
    target = date.fromisoformat(on_date) if on_date else date.today()

    async with p.acquire() as conn:
        # If no data for target date, find most recent date
        if not on_date:
            row = await conn.fetchrow("""
                SELECT MAX(business_date) as latest FROM daily_summary
                WHERE ($1::text IS NULL OR store_id = $1)
            """, store_id)
            if row and row['latest']:
                target = row['latest']

        conditions = ["t.business_date = $1"]
        params = [target]
        idx = 2

        if store_id:
            conditions.append(f"t.store_id = ${idx}")
            params.append(store_id)
            idx += 1

        if event_type:
            conditions.append(f"t.event_type = ${idx}")
            params.append(event_type)
            idx += 1

        where = " AND ".join(conditions)

        txns = await conn.fetch(f"""
            SELECT t.id, t.store_id, t.business_date, t.event_time, t.transaction_id,
                   t.register_id, t.cashier_id, t.total, t.tender, t.event_type,
                   (SELECT string_agg(ti.description || ' x' || ti.qty::text, ', ')
                    FROM transaction_items ti WHERE ti.transaction_id = t.id) as items_desc
            FROM transactions t
            WHERE {where}
            ORDER BY t.id DESC LIMIT {min(limit, 200)}
        """, *params)

    return {
        'date': target.isoformat(),
        'transactions': [{
            'id': t['id'],
            'store_id': t['store_id'],
            'store_name': STORE_NAMES.get(t['store_id'], t['store_id']),
            'time': t['event_time'],
            'transaction_id': t['transaction_id'],
            'register_id': t['register_id'],
            'cashier_id': t['cashier_id'],
            'total': float(t['total'] or 0),
            'tender': t['tender'],
            'event_type': t['event_type'] or 'sale',
            'items_desc': t['items_desc'] or '',
        } for t in txns],
    }


@app.get("/api/transaction/{txn_id}")
async def transaction_detail(txn_id: int):
    """Get full detail for a single transaction."""
    p = await get_pool()
    async with p.acquire() as conn:
        txn = await conn.fetchrow("""
            SELECT t.id, t.store_id, t.business_date, t.event_time, t.transaction_id,
                   t.register_id, t.cashier_id, t.total, t.tender, t.event_type
            FROM transactions t WHERE t.id = $1
        """, txn_id)
        if not txn:
            raise HTTPException(status_code=404, detail="Transaction not found")

        items = await conn.fetch("""
            SELECT scan_code, description, qty, amount, price
            FROM transaction_items WHERE transaction_id = $1
        """, txn_id)

        fuel = await conn.fetch("""
            SELECT grade, gallons, amount, price_per_gallon
            FROM transaction_fuel WHERE transaction_id = $1
        """, txn_id)

    return {
        'id': txn['id'],
        'store_id': txn['store_id'],
        'store_name': STORE_NAMES.get(txn['store_id'], txn['store_id']),
        'date': txn['business_date'].isoformat(),
        'time': txn['event_time'],
        'transaction_id': txn['transaction_id'],
        'register': txn['register_id'],
        'cashier': txn['cashier_id'],
        'total': float(txn['total'] or 0),
        'tender': txn['tender'],
        'event_type': txn['event_type'] or 'sale',
        'items': [{'scan_code': i['scan_code'], 'description': i['description'],
                    'qty': float(i['qty']), 'amount': float(i['amount']), 'price': float(i['price'])} for i in items],
        'fuel': [{'grade': f['grade'], 'gallons': float(f['gallons']),
                   'amount': float(f['amount']), 'ppg': float(f['price_per_gallon'])} for f in fuel],
    }


@app.get("/api/sales-summary")
async def sales_summary(on_date: str = None):
    """Get sales and inventory summary for all stores on a date."""
    p = await get_pool()
    target = date.fromisoformat(on_date) if on_date else date.today()

    async with p.acquire() as conn:
        # Find most recent date with data if target has none
        row = await conn.fetchrow("SELECT MAX(business_date) as latest FROM daily_summary")
        if row and row['latest'] and not on_date:
            target = row['latest']

        result = []
        for sid, name in STORE_NAMES.items():
            summary = await conn.fetchrow("""
                SELECT total_transactions, total_items, total_item_revenue,
                       total_fuel_gallons, total_fuel_revenue, total_revenue, updated_at
                FROM daily_summary WHERE store_id = $1 AND business_date = $2
            """, sid, target)

            # Count voids, refunds, no-sales
            counts = await conn.fetchrow("""
                SELECT
                    COUNT(*) FILTER (WHERE event_type = 'void') as voids,
                    COUNT(*) FILTER (WHERE event_type = 'refund') as refunds,
                    COUNT(*) FILTER (WHERE event_type = 'other') as no_sales
                FROM transactions WHERE store_id = $1 AND business_date = $2
            """, sid, target)

            result.append({
                'store_id': sid,
                'store_name': name,
                'total_sales': float(summary['total_revenue']) if summary else 0,
                'grocery_sales': float(summary['total_item_revenue']) if summary else 0,
                'gas_vol': float(summary['total_fuel_gallons']) if summary else 0,
                'no_sale': counts['no_sales'] if counts else 0,
                'voids': counts['voids'] if counts else 0,
                'refunds': counts['refunds'] if counts else 0,
                'updated': summary['updated_at'].isoformat() if summary and summary['updated_at'] else '',
            })

    return {'date': target.isoformat(), 'stores': result}


@app.get("/api/status")
async def status():
    """Health check and data status."""
    p = await get_pool()
    async with p.acquire() as conn:
        stores = await conn.fetch("""
            SELECT s.store_id, s.name,
                   COUNT(ds.id) as days,
                   MIN(ds.business_date) as first_date,
                   MAX(ds.business_date) as last_date,
                   (SELECT COUNT(*) FROM transactions t WHERE t.store_id = s.store_id) as total_txns
            FROM stores s
            LEFT JOIN daily_summary ds ON ds.store_id = s.store_id
            GROUP BY s.store_id, s.name
        """)
    return [{
        'store_id': s['store_id'],
        'name': s['name'],
        'days': s['days'],
        'first_date': s['first_date'].isoformat() if s['first_date'] else None,
        'last_date': s['last_date'].isoformat() if s['last_date'] else None,
        'total_transactions': s['total_txns'],
    } for s in stores]


TASK_DEFS = [
    {'key': 'day_report', 'label': 'Day Report', 'action': 'Enter Daily Reports', 'warn_days': 2, 'critical_days': 5},
    {'key': 'scratch_off', 'label': 'Scratch Off', 'action': 'Enter Lottery Data', 'warn_days': 7, 'critical_days': 14},
    {'key': 'gas', 'label': 'Gas', 'action': 'Enter Gas Info', 'warn_days': 7, 'critical_days': 14},
    {'key': 'grocery', 'label': 'Grocery', 'action': 'Enter Purchase Info', 'warn_days': 7, 'critical_days': 14},
    {'key': 'bank', 'label': 'Bank', 'action': 'Enter Bank Entries', 'warn_days': 7, 'critical_days': 14},
    {'key': 'price_book', 'label': 'Price Book Items', 'action': 'Add/Update Items', 'warn_days': 7, 'critical_days': 30},
    {'key': 'price_changes', 'label': 'Price Changes not sent', 'action': 'Send To POS', 'warn_days': 1, 'critical_days': 3},
    {'key': 'promotions', 'label': 'Promotions', 'action': 'View Promotions', 'warn_days': 30, 'critical_days': 90},
    {'key': 'unprocessed_batch', 'label': 'Unprocessed Batch', 'action': 'View Batches', 'warn_days': 1, 'critical_days': 3},
    {'key': 'gas_price', 'label': 'Gas Price', 'action': 'Update Gas Price', 'warn_days': 7, 'critical_days': 14},
    {'key': 'settle_credit', 'label': 'Credit Card Settlement', 'action': 'Settle', 'warn_days': 1, 'critical_days': 3},
    {'key': 'settle_food', 'label': 'Food Stamps Settlement', 'action': 'Settle', 'warn_days': 7, 'critical_days': 14},
    {'key': 'settle_lottery', 'label': 'Lottery Lotto Settlement', 'action': 'Settle', 'warn_days': 7, 'critical_days': 14},
]
TASK_DEFS_MAP = {t['key']: t for t in TASK_DEFS}


@app.get("/api/tasks")
async def get_tasks(request: Request, _=Depends(check_auth)):
    """Get critical tasks status for all stores."""
    p = await get_pool()
    async with p.acquire() as conn:
        rows = await conn.fetch("""
            SELECT store_id, task_key, last_date, last_value, notes, updated_at
            FROM critical_tasks ORDER BY store_id, task_key
        """)

    result = {}
    for sid, name in STORE_NAMES.items():
        result[sid] = {'name': name, 'tasks': {}}
        for td in TASK_DEFS:
            result[sid]['tasks'][td['key']] = {
                'label': td['label'],
                'action': td['action'],
                'last_date': None,
                'last_value': None,
                'notes': None,
                'warn_days': td['warn_days'],
                'critical_days': td['critical_days'],
            }

    for row in rows:
        sid = row['store_id']
        key = row['task_key']
        if sid in result and key in result[sid]['tasks']:
            result[sid]['tasks'][key]['last_date'] = row['last_date'].isoformat() if row['last_date'] else None
            result[sid]['tasks'][key]['last_value'] = row['last_value']
            result[sid]['tasks'][key]['notes'] = row['notes']

    return result


@app.post("/api/tasks/update")
async def update_task(request: Request, _=Depends(check_auth)):
    """Update a critical task status."""
    body = await request.json()
    store_id = body['store_id']
    task_key = body['task_key']
    last_date = body.get('last_date')
    last_value = body.get('last_value', '')
    notes = body.get('notes', '')

    if task_key not in TASK_DEFS_MAP:
        raise HTTPException(status_code=400, detail=f"Unknown task: {task_key}")

    p = await get_pool()
    async with p.acquire() as conn:
        bdate = date.fromisoformat(last_date) if last_date else None
        await conn.execute("""
            INSERT INTO critical_tasks (store_id, task_key, last_date, last_value, notes, updated_at)
            VALUES ($1, $2, $3, $4, $5, NOW())
            ON CONFLICT (store_id, task_key) DO UPDATE SET
                last_date = $3, last_value = $4, notes = $5, updated_at = NOW()
        """, store_id, task_key, bdate, last_value, notes)

    return {'ok': True}


@app.get("/api/tasks/seed")
async def seed_tasks(request: Request, _=Depends(check_auth)):
    """Seed critical tasks with data scraped from C-Store dashboards."""
    p = await get_pool()
    # Data scraped from C-Store on 2026-03-18
    seed_data = [
        # Amiya Express 2 (77573764)
        ('77573764', 'day_report', '2026-03-13', '', ''),
        ('77573764', 'scratch_off', '2025-06-29', '', ''),
        ('77573764', 'gas', '2026-03-26', '', ''),
        ('77573764', 'grocery', '2026-03-09', '', ''),
        ('77573764', 'price_book', '2026-03-17', '6:17PM', ''),
        ('77573764', 'price_changes', None, '1', ''),
        ('77573764', 'promotions', None, '22', ''),
        ('77573764', 'gas_price', '2026-03-10', '', ''),
        # 801 S Main St (10064461)
        ('10064461', 'day_report', '2026-03-13', '', ''),
        ('10064461', 'scratch_off', '2026-03-10', '', ''),
        ('10064461', 'grocery', '2026-03-16', '', ''),
        ('10064461', 'price_book', '2026-03-17', '6:16PM', ''),
        ('10064461', 'price_changes', None, '15', ''),
        ('10064461', 'promotions', None, '27', ''),
        ('10064461', 'gas_price', '2026-03-16', '', ''),
        # Amiya Express (7413) — listed as "Amya Express" in C-Store
        ('7413', 'day_report', '2026-03-01', '', ''),
        ('7413', 'scratch_off', '2025-07-02', '', ''),
        ('7413', 'gas', '2025-06-01', '', ''),
        ('7413', 'grocery', '2026-03-11', '', ''),
        ('7413', 'price_book', '2026-03-17', '6:17PM', ''),
        ('7413', 'price_changes', None, '1', ''),
        ('7413', 'promotions', None, '17', ''),
        ('7413', 'gas_price', '2026-03-10', '', ''),
    ]
    async with p.acquire() as conn:
        for sid, key, dt, val, notes in seed_data:
            bdate = date.fromisoformat(dt) if dt else None
            await conn.execute("""
                INSERT INTO critical_tasks (store_id, task_key, last_date, last_value, notes, updated_at)
                VALUES ($1, $2, $3, $4, $5, NOW())
                ON CONFLICT (store_id, task_key) DO UPDATE SET
                    last_date = COALESCE($3, critical_tasks.last_date),
                    last_value = CASE WHEN $4 = '' THEN critical_tasks.last_value ELSE $4 END,
                    notes = CASE WHEN $5 = '' THEN critical_tasks.notes ELSE $5 END,
                    updated_at = NOW()
            """, sid, key, bdate, val, notes)
    return {'seeded': len(seed_data)}


@app.get("/txvision", response_class=HTMLResponse)
async def txvision(request: Request):
    if not request.session.get('authenticated'):
        return RedirectResponse('/login', status_code=302)
    return FileResponse(os.path.join(os.path.dirname(__file__), 'frontend', 'txvision.html'))


@app.get("/coke", response_class=HTMLResponse)
async def coke_order(request: Request):
    if not request.session.get('authenticated'):
        return RedirectResponse('/login', status_code=302)
    return FileResponse(os.path.join(os.path.dirname(__file__), 'frontend', 'coke.html'))

@app.get("/coke_scan_data.js")
async def coke_data():
    return FileResponse(os.path.join(os.path.dirname(__file__), 'frontend', 'coke_scan_data.js'))

@app.get("/", response_class=HTMLResponse)
async def index(request: Request):
    if not request.session.get('authenticated'):
        return RedirectResponse('/login', status_code=302)
    return FileResponse(os.path.join(os.path.dirname(__file__), 'frontend', 'index.html'))
