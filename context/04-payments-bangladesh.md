# 04 — Payments (Bangladesh)

The single most business-critical area. Read fully before touching checkout or payments.

## The landscape (2026)
- **SSLCommerz** — Bangladesh's leading payment *aggregator*. One integration gives
  access to bKash, Nagad, Rocket, Dutch-Bangla mobile banking, debit/credit cards, and
  net banking through a single unified API. PCI-DSS Level 1. Card fee ~2.5%, MFS ~1.85–2.1%.
  **This is our primary gateway** — best coverage for least integration effort.
- **aamarPay** — cheaper (MFS ~1.5–2%, cards ~2–2.5%), good for cost-sensitive SMEs.
  A solid alternative/second option once volume matters.
- **ShurjoPay** — developer-friendly, popular with startups.
- **bKash direct / Nagad direct** — integrate the wallet directly to cut aggregator fees.
  More work; defer to Phase 8 once volume makes the fee savings worthwhile.
- **Cash on Delivery (COD)** — not a gateway, but the dominant method (60–70% of orders).

## Decision
- **Phase 4 launch:** COD (default) + **SSLCommerz** (covers bKash/Nagad/cards in one).
- **Phase 8:** add bKash direct for lower fees; consider aamarPay as a cost hedge.

## The COD problem (and how we design around it)
COD boosts conversion but has **20–30% return-to-origin (RTO)** — customers who refuse
or vanish at delivery. Every RTO costs you shipping both ways and tied-up inventory.
Proven mitigations, to build in:

1. **Phone/OTP verification before confirming a COD order.** Verifying the number via
   SMS (or WhatsApp) before shipping reduces RTO by ~15–25%. Treat this as required, not
   optional, for COD.
2. **Optional partial deposit via bKash on COD orders** (e.g. ৳100–200). Filters out fake
   orders; stores using deposit collection report ~40–50% lower RTO than pure COD.
3. **(Phase 8) Courier fraud/RTO phone check** — query courier history for a number's
   past delivery success before shipping high-value COD orders.

## Integration approach (SSLCommerz)
- Use the **hosted payment page** (redirect) to start — customer is redirected to
  SSLCommerz to pay, which keeps our PCI scope minimal. Move to embedded later only if
  needed.
- Flow: create order (server) → request session from SSLCommerz → redirect customer →
  handle return URLs (success / fail / cancel) → **validate server-side via IPN/validation
  API** before marking paid. Never trust the client-side redirect alone.
- **Sandbox first.** The most common, costly mistake in BD is skipping sandbox testing and
  going live too fast. Fully test success, failure, cancel, and refund paths in sandbox.
- Merchant account verification with the provider takes ~3–10 business days — start that
  paperwork early (owner task, outside the code).

## Security rules for the agent
- Payment credentials and store keys live in env vars only. Never commit them.
- All payment state transitions happen **server-side**; the client only initiates.
- Verify every payment against the provider's validation/IPN endpoint before fulfilling.
- Log payment events for reconciliation; never log full card/credential data.

## What the agent must NOT do
Do not guess SSLCommerz/bKash endpoint URLs, parameter names, or signature schemes from
memory. Use the official provider documentation the owner supplies, and if a detail is
unknown, ask rather than inventing it.

## Owner to-do (non-code)
- Register a merchant account (SSLCommerz) and obtain sandbox + production credentials.
- Prepare business documents required for verification.
- Decide whether to enable the optional bKash deposit-on-COD at launch.
