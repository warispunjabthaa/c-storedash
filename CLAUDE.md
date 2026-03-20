# CLAUDE.md — C-StoreDash (POS Live Cloud)

## Project Overview

Real-time POS transaction dashboard for convenience stores. Ingests transaction data from store watchers and provides a web-based monitoring interface for sales, inventory, and operational task tracking across multiple locations.

## Tech Stack

- **Backend:** Python 3.12, FastAPI, Uvicorn, asyncpg
- **Frontend:** Vanilla HTML/CSS/JavaScript (no build step, no framework)
- **Database:** PostgreSQL (async connection pool via asyncpg)
- **Deployment:** Docker + Heroku (Procfile)

## Repository Structure

```
c-storedash/
├── app.py                 # Entire backend — FastAPI routes, DB schema, auth (~900 lines)
├── requirements.txt       # Python dependencies
├── Dockerfile             # python:3.12-slim container
├── Procfile               # Heroku: uvicorn app:app
└── frontend/
    ├── index.html         # Main dashboard (tasks, sales, items, live transactions)
    └── txvision.html      # TransactionVision — POS + camera sync UI
```

This is a **monolithic single-file backend**. All routes, database setup, and business logic live in `app.py`.

## Running Locally

```bash
# Install dependencies
pip install -r requirements.txt

# Required env vars
export DATABASE_URL="postgresql://user:pass@localhost/cstore"
export AUTH_USERNAME="admin"         # default: admin
export AUTH_PASSWORD="store2026"     # default: store2026
export API_KEY="pos-live-2026-secret"  # for /api/ingest
export SESSION_SECRET="some-secret"    # auto-generated if omitted

# Start server
uvicorn app:app --host 0.0.0.0 --port 8000
```

## Build & Deploy

- **No build step** — frontend is static HTML served by FastAPI
- **Docker:** `docker build -t cstore . && docker run -p 8000:8000 -e DATABASE_URL=... cstore`
- **Heroku:** push to Heroku remote; env vars configured in Heroku dashboard

## Testing & Linting

No test framework or linter is configured. There are no automated tests.

## Database Schema

Six tables auto-created on startup via `ensure_schema()`:

| Table | Purpose |
|---|---|
| `stores` | Store master data (store_id, name) |
| `transactions` | Transaction headers (store, date, tender, type, total) |
| `transaction_items` | Line items per transaction (scan_code, qty, amount) |
| `transaction_fuel` | Fuel sales per transaction (grade, gallons, price) |
| `daily_summary` | Pre-aggregated daily metrics per store |
| `critical_tasks` | Operational task tracking (last_date, status) |

Key indexes: `idx_txn_store_date`, `idx_txn_items_txn`, `idx_daily_store_date`.

## Architecture & Key Patterns

### Authentication
- **Web UI:** Session-based auth via Starlette SessionMiddleware. Login at `/login`.
- **API ingestion:** API key via `X-API-Key` header or `api_key` query param.
- Protected routes return 401 → redirect to `/login`.

### API Endpoints

| Endpoint | Auth | Purpose |
|---|---|---|
| `POST /api/ingest` | API key or session | Batch transaction ingestion |
| `GET /api/dashboard` | Session | Multi-store summary with date range |
| `GET /api/today` | Session | Today's snapshot |
| `GET /api/sales-summary` | Session | Daily sales per store |
| `GET /api/transactions` | Session | Filterable transaction list |
| `GET /api/transaction/{id}` | Session | Transaction detail with items/fuel |
| `GET /api/store/{id}/items` | Session | Store items (date range) |
| `GET /api/tasks` | Session | Critical task statuses |
| `POST /api/tasks/update` | Session | Update task status |
| `GET /api/status` | None | Health check |

### Frontend Patterns
- Vanilla JS with `fetch` API (custom `fetchRetry` wrapper)
- DOM manipulation via `getElementById` — no virtual DOM
- Helper functions: `fmtD()`, `fmtFull()`, `daysSince()` for date handling
- Inline event handlers (`onclick`)
- Responsive CSS Grid/Flexbox layout, dark sidebar (#1a2036)
- Mobile hamburger menu navigation

### Hardcoded Data
Three stores seeded on startup: `10064461`, `7413`, `77573764`. Thirteen critical task types with warn/critical day thresholds defined in `TASK_DEFS`.

## Environment Variables

| Variable | Default | Notes |
|---|---|---|
| `DATABASE_URL` | *(required)* | PostgreSQL connection string |
| `DATABASE_PUBLIC_URL` | — | Fallback if DATABASE_URL missing |
| `AUTH_USERNAME` | `admin` | Web login |
| `AUTH_PASSWORD` | `store2026` | Web login |
| `API_KEY` | `pos-live-2026-secret` | Ingest endpoint auth |
| `SESSION_SECRET` | Random | Session encryption |
| `PORT` | `8000` | Server port |

## Development Conventions

- All backend changes go in `app.py` — there is no module structure
- Frontend pages are self-contained HTML files with inline `<style>` and `<script>`
- Database schema changes must be added to `ensure_schema()` (runs on startup)
- New API endpoints should follow existing patterns: async def, require session auth, return JSON
- Keep frontend vanilla JS — no npm, no bundler, no framework dependencies
