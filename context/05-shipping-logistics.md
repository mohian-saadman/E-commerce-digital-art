# 05 — Shipping & Logistics (Bangladesh)

How orders physically reach customers. Logistics economics make or break a BD store.

## Strategic call: launch Dhaka-only
Dhaka (~22M people, dense courier coverage, same/next-day delivery) has favorable unit
economics: delivery ~৳60–80/order inside Dhaka and fast COD remittance. Outside Dhaka,
delivery stretches to 3–7 days, addresses are less formal, failed attempts rise, and cost
per successful delivery can hit ৳150–200. **Start Dhaka-only.** Treat nationwide as a
separate business line later, with its own pricing and delivery-time expectations.

## Couriers (all offer merchant APIs)
- **Steadfast** — most reliable nationwide, SME favorite. **Good default first integration.**
- **Pathao Courier** — largest last-mile network, best for Dhaka same/next-day. Add for Dhaka.
- **RedX** — Daraz-owned, strong nationwide + divisional cities, COD remittance ~48–72h.
- **Paperfly** — most established e-commerce courier, best rural coverage (64 districts), slower.

**Plan:** integrate **Steadfast** first (nationwide baseline), then **Pathao** for fast
Dhaka delivery. Add RedX/Paperfly later if expansion needs them.

## Shipping zones & rates (configurable)
- **Dhaka inside:** ~৳60–80
- **Dhaka outside / nationwide:** ~৳100–150 (higher, slower)
- COD service charge: couriers typically take ~1–1.5% of COD amount.
Model zones + rates as data so they're easy to tune without code changes.

## Order → delivery flow (to automate)
1. Order placed and (for COD) phone-verified.
2. On dispatch, **auto-create a parcel/consignment** in the courier via API.
3. Store the courier tracking ID on the order; send it to the customer (SMS/email).
4. Update order status as the courier status changes (poll or webhook where supported).
5. Handle returns within the same flow (`returned` status, restock).

Good tracking is high-leverage: a proper tracking system can cut "where is my order?"
support messages by 40–60%.

## COD remittance & cash flow
Couriers collect COD cash and remit to you on a delay (often ~48–72h, varies). This is a
**cash-flow** consideration, not just logistics — factor it into how much inventory you
float. Reconcile courier remittances against orders in the admin.

## Integration notes for the agent
- Each courier has its own auth (API key/secret or username/password/token) and its own
  endpoints and field names. Do not assume they're the same — read each provider's docs.
- Keep courier credentials in env vars; never commit.
- Build a thin internal "shipping provider" abstraction so adding a second/third courier
  doesn't mean rewriting order code. (Conceptually: one interface, multiple provider
  implementations.)
- Don't invent endpoint URLs or payloads from memory — confirm against official docs.

## Owner to-do (non-code)
- Open a merchant account with Steadfast (and later Pathao); get API credentials.
- Decide launch delivery area (recommend Dhaka metro to start).
- Set the actual shipping rates and free-shipping threshold (if any).
