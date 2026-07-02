# 02 — Features

Feature spec, grouped by phase. This is *what* to build; the tracker is *whether it's done*.
Keep features minimal per phase — ship, learn, iterate.

## Core storefront (Phase 1–3)
- **Navbar:** logo, search, cart icon with count, account menu. Sticky on scroll.
- **Homepage:** hero with CTA, featured products grid, category strip, promo banner.
- **Product listing:** grid with category filter, price sort, pagination.
- **Product detail:** image gallery, title, price in ৳, variants (size/color), stock
  status, quantity selector, add-to-cart, description, related products.
- **Search:** by product name/category.
- **Cart:** add/update/remove, line totals, subtotal, persists across sessions.
- **Checkout:** mobile-first, minimal fields. Guest checkout allowed. Address
  (division → district → thana), phone (required, verified), delivery notes.

## Payments (Phase 4) — see 04-payments-bangladesh.md
- Cash on Delivery (default, most-used).
- **Phone/OTP verification before confirming COD orders** — reduces fake orders/RTO.
- SSLCommerz hosted checkout (bKash, Nagad, cards) — one integration.
- Clear success / failure / cancelled states + server-side payment verification.
- (Optional) small bKash deposit on COD to filter fake orders.

## Orders & accounts (Phase 5)
- Customer accounts: order history, saved addresses.
- Admin role + dashboard: manage orders, products, inventory, view basic sales.
- Order lifecycle statuses: `new → processing → dispatched → delivered → returned/cancelled`.
- Order confirmation + status updates via SMS/email.

## Shipping (Phase 6) — see 05-shipping-logistics.md
- Shipping zones + rates (Dhaka inside, Dhaka outside, nationwide).
- Auto-create courier parcel on dispatch (Steadfast, then Pathao for Dhaka).
- Customer order tracking page.

## Trust & conversion (woven throughout)
- Fast mobile load; large tap targets; minimal-friction checkout.
- Reviews/ratings (Phase 8) for social proof.
- Clear return/refund policy page.
- WhatsApp / phone contact button — common and expected in BD.

## Growth backlog (Phase 8+)
- Courier RTO/fraud phone-check before shipping.
- Discount codes / campaigns.
- Wishlist.
- bKash direct integration (cheaper than aggregator).
- Nationwide expansion (separate pricing + delivery-time expectations).

## Non-goals (for now)
- Multi-vendor marketplace.
- Subscriptions / recurring billing.
- Multi-currency / international shipping.
- Native mobile apps (the responsive web is the priority).
