# Progress Tracker

> The living status of the project. Claude Code updates this as work completes.
> Owner reviews it to see where things stand and what needs a decision.
>
> Legend: `[ ]` not started · `[~]` in progress · `[x]` done · `[!]` blocked / needs owner

**Current phase:** Phase 0 — Setup & Foundation
**Last updated:** (add date on each edit)

---

## Phase 0 — Setup & Foundation
- [ ] Confirm tooling installed (Node 18+, Git, Claude Code, GitHub auth)
- [ ] Create repo and push empty scaffold as first commit
- [ ] Read all `/context` files, confirm stack decisions with owner
- [ ] Scaffold Next.js + TypeScript + Tailwind project
- [ ] Add shadcn/ui, set up base theme tokens (see design system)
- [ ] Set up `.env.example`, `.gitignore`, project README
- [ ] Connect repo to Vercel, get a live preview URL for `main`

## Phase 1 — Homepage / Storefront Shell (first visible milestone)
- [ ] Global layout: header/navbar (logo, search, cart, account), footer
- [ ] Homepage: hero, featured products grid, category strip, promo banner
- [ ] Responsive + mobile-first pass (85% of BD traffic is mobile)
- [ ] Placeholder product data (JSON) so the page looks real
- [ ] Loading/empty states, basic accessibility pass
- [ ] **Tag release `v0.1` — homepage live on Vercel**

## Phase 2 — Catalog
- [ ] Product data model in Postgres via Prisma (see 06-data-model.md)
- [ ] Product listing page (category + filters + sort)
- [ ] Product detail page (images, price in ৳, variants, add-to-cart)
- [ ] Search
- [ ] Seed script with realistic sample catalog

## Phase 3 — Cart & Checkout
- [ ] Cart (add/update/remove, persists across sessions)
- [ ] Checkout form — mobile-first, minimal fields
- [ ] Address capture (division/district/thana), phone number required
- [ ] Order summary with shipping cost by zone (Dhaka vs outside)
- [ ] Guest checkout supported

## Phase 4 — Payments (see 04-payments-bangladesh.md)
- [ ] Cash on Delivery flow (default)
- [ ] Phone/OTP verification before order confirmation (RTO reduction)
- [ ] SSLCommerz sandbox integration (bKash, Nagad, cards in one)
- [ ] Payment success/fail/cancel handling + webhook/IPN validation
- [ ] Optional: partial bKash deposit on COD orders
- [ ] Go-live: switch SSLCommerz to production credentials

## Phase 5 — Orders & Admin
- [ ] Auth (Auth.js) — customer accounts + admin role
- [ ] Order model + statuses (new → processing → dispatched → delivered → returned)
- [ ] Admin dashboard: view/manage orders, products, inventory
- [ ] Order confirmation email/SMS to customer

## Phase 6 — Shipping / Logistics (see 05-shipping-logistics.md)
- [ ] Shipping zones + rates config (Dhaka inside/outside, nationwide)
- [ ] Steadfast API integration (nationwide) — create parcel, track
- [ ] Pathao API integration (Dhaka same/next-day)
- [ ] Auto-create delivery request when order dispatched
- [ ] Customer-facing order tracking

## Phase 7 — Launch Hardening
- [ ] SEO: metadata, sitemap, structured data, BDT currency signals
- [ ] Performance pass (mobile, mid-range Android budget)
- [ ] Analytics (GA4) + basic conversion funnel
- [ ] Legal pages: privacy, terms, refund/return policy
- [ ] Security review: secrets, input validation, rate limiting on checkout
- [ ] **Tag release `v1.0` — public launch (Dhaka-only)**

## Phase 8 — Post-Launch / Growth (backlog)
- [ ] Courier fraud/RTO phone check before shipping
- [ ] Nationwide expansion (separate pricing + timelines)
- [ ] bKash direct integration (lower fees than aggregator)
- [ ] Reviews & ratings, wishlist, discount codes
- [ ] Reconsider headless (Medusa) only if scale justifies it

---

## Status Log
> Newest entries at the top. Format: `YYYY-MM-DD — what changed — any decision needed`

- (empty — first entry goes here)

## Open Questions for Owner
> Things the agent needs a human decision on. Clear them as they're answered.

- Store name / brand? - ArtHub 
- Product category to launch with (fashion, electronics, groceries…)? - Digital Arts(AI generated aesthetic images in Hi-res)
- Which courier account will you open first (Steadfast is the common SME default)? - i will go with the default
