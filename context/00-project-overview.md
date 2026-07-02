# 00 — Project Overview

## Vision
A custom-built, professionally run e-commerce store for the Bangladesh market — owned
end to end (code, data, brand), not rented on a SaaS platform. Built iteratively with
Claude Code, versioned on GitHub, deployed live, and improved release by release.

## Why custom (and not just Shopify)
Shopify is faster to launch but takes a monthly fee + transaction cut, does not natively
support bKash/Nagad, and limits deep customization. A custom Next.js build means: full
ownership, no platform transaction fees, native local payment/courier integrations, and
freedom to shape the exact experience. The tradeoff is that we build things Shopify gives
for free — so we phase the work carefully (see the roadmap).

## Market context (Bangladesh, 2026)
These facts shape almost every product decision. Sources: industry reporting, early 2026.

- **Market size:** Bangladesh crossed ~$4B in B2C e-commerce in early 2026, growing ~22%/yr.
- **Mobile-first:** ~85% of e-commerce traffic is on mobile. Design for a mid-range
  Android on a 6-inch screen *first*, desktop second.
- **Payments are unusual:** Extremely high mobile-money adoption (bKash, Nagad) — yet
  most online purchases still complete as **Cash on Delivery (60–70% of orders)**. The
  opportunity is nudging customers toward digital payment at checkout.
- **COD is a double-edged sword:** It drives conversion but carries **20–30% return-to-
  origin (RTO)**, which destroys margins. Mitigation is a core feature, not an afterthought
  (phone verification + optional deposit). See `04-payments-bangladesh.md`.
- **Logistics reality:** Dhaka has dense courier coverage and same/next-day delivery.
  Outside Dhaka: 3–7 days and higher failed-delivery rates. **Launch Dhaka-only**, expand
  later as a separate business line. See `05-shipping-logistics.md`.
- **No marketplace monopoly:** Daraz is largest but <30% share, so a direct-to-consumer
  store has real room to acquire customers.
- **Currency:** Everything in BDT (৳). Never show prices in USD — it kills conversion.

## Who the owner is (for the agent)
A solo builder using Claude Code Pro, learning as the project grows. Favor clear
explanations, incremental steps, and maintainable code. Confirm big decisions rather than
assuming.

## Definition of success for v1.0
A live, fast, mobile-first storefront serving Dhaka, accepting COD + at least one digital
payment method (via SSLCommerz), with working order management and courier dispatch, and
a clean path to keep shipping improvements version by version.
