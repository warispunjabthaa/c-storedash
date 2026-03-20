# Test Coverage Analysis — C-Store Dashboard

## Current State

**There are zero tests in this codebase.** No test files, no test configuration, no test
dependencies. Coverage is 0%.

---

## Codebase Overview

The application is a FastAPI backend (`app.py`, ~885 lines) serving two HTML frontends
(`frontend/index.html`, `frontend/txvision.html`). It uses `asyncpg` to connect to
PostgreSQL and provides POS transaction ingestion, dashboard APIs, and task tracking.

### Components Requiring Tests

| Component | Lines | Complexity | Priority |
|-----------|-------|------------|----------|
| Authentication & session logic | ~50 | Medium | **Critical** |
| `/api/ingest` endpoint | ~90 | High | **Critical** |
| `/api/dashboard` endpoint | ~40 | Medium | High |
| `/api/today` endpoint | ~85 | High | High |
| `/api/store/{id}/items` endpoint | ~50 | Medium | Medium |
| `/api/store/{id}/item/{code}` endpoint | ~60 | Medium | Medium |
| `/api/store/{id}/item/{code}/transactions` | ~30 | Low | Medium |
| `/api/transactions` endpoint | ~55 | Medium | High |
| `/api/transaction/{id}` endpoint | ~40 | Low | Medium |
| `/api/sales-summary` endpoint | ~40 | Medium | Medium |
| `/api/status` endpoint | ~20 | Low | Low |
| `/api/tasks` GET endpoint | ~30 | Medium | Medium |
| `/api/tasks/update` POST endpoint | ~25 | Medium | High |
| `/api/tasks/seed` endpoint | ~40 | Low | Low |
| Page routes (`/`, `/txvision`, `/login`) | ~15 | Low | Medium |

---

## Recommended Test Plan (Prioritized)

### 1. Authentication & Authorization (Critical)

This is the highest-priority area because security bugs have the greatest impact.

**What to test:**
- `POST /login` — valid credentials set session and redirect to `/`
- `POST /login` — invalid credentials return 401 with error HTML
- `GET /logout` — clears session and redirects to `/login`
- `check_auth` dependency — unauthenticated requests get 401
- `check_api_or_session` dependency — accepts valid `X-API-Key` header
- `check_api_or_session` dependency — accepts valid `api_key` query param
- `check_api_or_session` dependency — rejects invalid/missing credentials
- Protected page routes (`/`, `/txvision`) redirect unauthenticated users to `/login`

**Why:** The auth logic uses simple string comparison and session cookies. Any regression
here exposes the entire application. The `check_api_or_session` function has two code
paths (session vs API key) that both need verification.

### 2. Data Ingestion — `/api/ingest` (Critical)

This is the write path for all transaction data. Bugs here corrupt the database.

**What to test:**
- Successful ingestion of a transaction with items and fuel
- Transaction without items or fuel (just the header)
- Multiple transactions in a single batch
- Daily summary is correctly computed (totals, counts, unique UPCs)
- Daily summary upsert works (second ingestion for same store+date updates, doesn't duplicate)
- Missing/optional fields use correct defaults (`event_type` defaults to `'sale'`)
- Invalid `business_date` format raises an error
- Auth: requires valid API key or session

**Why:** This is the most complex endpoint (~90 lines) with nested inserts across 4 tables
and a summary aggregation query. A subtle bug (e.g., wrong `COALESCE`, float conversion
error) would silently corrupt reporting data.

### 3. Transaction Listing — `/api/transactions` (High)

**What to test:**
- Returns transactions for the requested date
- Falls back to most recent date when no `on_date` provided and today has no data
- Filters by `store_id` when provided
- Filters by `event_type` when provided
- Combined filters (store + event_type)
- `limit` parameter is respected and capped at 200
- Response shape matches expected schema

**Why:** This endpoint builds SQL dynamically with parameterized index tracking
(`$1`, `$2`, etc.), which is error-prone. The fallback-to-latest-date logic is also
a potential source of bugs.

### 4. Task Management — `/api/tasks/update` (High)

**What to test:**
- Creating a new task entry
- Updating an existing task (upsert behavior)
- Rejecting unknown `task_key` with 400
- `last_date` parsing (valid ISO date, null)
- Auth: requires session authentication (not API key)

**Why:** This is a write endpoint that modifies critical operational data. The validation
is minimal (only checks `task_key` membership), and there's no validation on `store_id`.

### 5. Dashboard & Today APIs (High)

**What to test:**
- `/api/dashboard` — returns correct structure grouped by store
- `/api/dashboard` — `days` parameter controls date range
- `/api/dashboard` — `from_date`/`to_date` override `days`
- `/api/today` — returns data for most recent date per store (not necessarily today)
- `/api/today` — includes stores with no data (zero-filled defaults)
- `/api/today` — `recent` transactions list and `top_items` are populated

**Why:** These are the primary read endpoints driving the dashboard UI. The `today_data`
function is the most complex read endpoint (~85 lines) with per-store date lookups and
multiple sub-queries.

### 6. Item & Store Detail APIs (Medium)

**What to test:**
- `/api/store/{id}/items` — date filtering logic (single date vs range)
- `/api/store/{id}/items` — `from_date`/`to_date` range query
- `/api/store/{id}/item/{code}` — daily breakdown and totals
- `/api/store/{id}/item/{code}` — handles item with no sales (division by zero in `avg_daily`)
- `/api/store/{id}/item/{code}/transactions` — returns individual transactions
- `/api/transaction/{id}` — returns full detail with items and fuel
- `/api/transaction/{id}` — returns 404 for nonexistent ID

**Why:** The item endpoints have complex date-filtering logic with multiple branches.
The `avg_daily` calculation (`total_qty / num_days`) could divide by zero if `daily`
is empty (currently guarded by `or 1` but worth testing).

### 7. Sales Summary & Status (Medium)

**What to test:**
- `/api/sales-summary` — aggregates void/refund/other counts correctly
- `/api/sales-summary` — falls back to latest date when no `on_date`
- `/api/status` — returns store metadata with date ranges and counts

### 8. Edge Cases & Error Handling (Medium)

**What to test:**
- Invalid date format strings (should return clear errors, not 500s)
- Empty transaction batch ingestion
- Very large `limit` values on `/api/transactions`
- Concurrent ingestion for the same store+date
- Float precision in monetary calculations (e.g., `float()` conversions)

---

## Recommended Testing Infrastructure

### Dependencies to Add

```
# test dependencies
pytest
pytest-asyncio
httpx           # for FastAPI async test client
pytest-cov      # for coverage reporting
```

### Test Structure

```
tests/
├── conftest.py              # shared fixtures (test client, mock DB pool)
├── test_auth.py             # authentication & authorization tests
├── test_ingest.py           # /api/ingest endpoint tests
├── test_dashboard.py        # /api/dashboard and /api/today tests
├── test_transactions.py     # transaction listing & detail tests
├── test_items.py            # store items & item detail tests
├── test_tasks.py            # task management tests
└── test_sales_summary.py    # sales summary & status tests
```

### Database Strategy

The tests should use one of:
1. **Testcontainers** (`testcontainers[postgres]`) — spin up a real PostgreSQL in Docker
   per test session. Most realistic but requires Docker.
2. **Mock `asyncpg`** — mock `pool.acquire()` and connection methods. Faster but less
   realistic.

Option 1 is recommended for an app this size since the queries are complex and the
schema matters.

---

## Summary

| Priority | Area | Estimated Tests | Risk if Untested |
|----------|------|-----------------|------------------|
| Critical | Auth & session | ~10 | Full app exposed |
| Critical | Data ingestion | ~10 | Silent data corruption |
| High | Transaction listing | ~8 | Broken filtering, wrong data shown |
| High | Task management | ~6 | Operational data loss |
| High | Dashboard & today | ~8 | Dashboard shows wrong numbers |
| Medium | Item/store detail | ~8 | Incorrect reports |
| Medium | Sales summary | ~4 | Wrong aggregations |
| Medium | Edge cases | ~6 | 500 errors in production |
| **Total** | | **~60** | |

Starting with the **Critical** tier (auth + ingestion, ~20 tests) would cover the
highest-risk code paths and establish the testing infrastructure for everything else.
