# 07 — Roadmap

The build order and *why* it's in this order. The tracker holds live status; this holds
the plan and reasoning. Principle: **ship something visible early, add commerce depth in
layers, integrate the risky external systems (payments, couriers) once the core is solid.**

## Phase 0 — Setup & Foundation
Get the pipeline working end to end on something trivial: repo → Vercel → live URL.
Confirm the stack. *Why first:* proves the whole loop (code → GitHub → deploy) before any
real complexity, so later pushes are routine.

## Phase 1 — Homepage / Storefront Shell → tag `v0.1`
A genuinely good-looking, responsive homepage with placeholder data. *Why:* it's the
motivating first milestone, exercises the design system, and gives a real URL to show.

## Phase 2 — Catalog
Real product model + listing + detail + search, backed by Postgres. *Why:* the store
needs products before carts or payments mean anything.

## Phase 3 — Cart & Checkout
Cart persistence + a mobile-first checkout form (address, phone). *Why:* the funnel must
exist before wiring money to it.

## Phase 4 — Payments → prove COD + SSLCommerz sandbox
COD with phone verification, then SSLCommerz hosted checkout in **sandbox**. *Why here:*
only integrate payments once there's a real order to pay for. Sandbox before production.

## Phase 5 — Orders & Admin
Auth, order lifecycle, admin dashboard, customer notifications. *Why:* you can't run the
business without seeing and managing orders.

## Phase 6 — Shipping / Logistics
Zones + rates, Steadfast then Pathao, auto-dispatch, tracking. *Why after orders:* courier
parcels are created from real orders with real addresses.

## Phase 7 — Launch Hardening → tag `v1.0` (Dhaka-only public launch)
SEO, performance, analytics, legal pages, security review. Switch payments to production.
*Why:* the difference between "works on my machine" and "safe to take real money."

## Phase 8 — Growth (backlog, no fixed order)
RTO/fraud phone-check, discount codes, reviews, wishlist, bKash direct (lower fees),
nationwide expansion, and only-if-justified a move toward headless (Medusa).

## Release/versioning convention
- `v0.x` = pre-launch milestones (homepage, catalog…).
- `v1.0` = first public launch.
- Patch (`v1.0.1`) = fixes; minor (`v1.1`) = features; major (`v2.0`) = big changes.
- Tag a release whenever you "finalize" a milestone worth returning to.

## Guiding cadence
Small, frequent commits during a phase; a tagged release at the end of each phase. Update
`progress-tracker.md` as you go. Don't skip ahead to Phase 4+ integrations before the
core (1–3) feels solid — the external systems are where time and money get lost.
