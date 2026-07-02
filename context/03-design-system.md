# 03 — Design System

Design direction and reusable rules so the store looks intentional and consistent, not
templated. Fill in the brand specifics (marked ⟨TBD⟩) once the owner decides.

## Design principles
1. **Mobile-first, always.** Design the 6-inch Android view first, then scale up. ~85%
   of traffic is mobile. Big tap targets (min 44px), thumb-reachable primary actions.
2. **Fast over fancy.** Perceived speed beats animation. Optimize images, lazy-load
   below the fold, avoid heavy libraries. Budget for a mid-range phone on 4G.
3. **Trust signals everywhere.** Clear pricing in ৳, delivery info, return policy,
   contact option. Bangladeshi shoppers weigh trust heavily in a COD market.
4. **Low-friction checkout.** Every extra field costs conversions. Ask only what's
   needed to fulfill the order.
5. **Clarity over cleverness.** Obvious navigation, readable typography, honest layout.

## Brand
- Store name: **ArtHub**
- Personality: **Warm & local premium** — earthy, tactile, confident, not cold-tech.
  Decided 2026-07-02 (owner, via Phase 1 kickoff).
- Logo: ⟨TBD⟩ — interim wordmark is a rounded square "A" mark in `--primary` (see
  `src/components/site/navbar.tsx`). Replace with real logo asset when available.

## Color (implemented in `src/app/globals.css`, shadcn `radix-nova` preset)
Warm terracotta + gold palette, implemented as OKLCH CSS variables (light + `.dark`):

- `--primary`: terracotta (`oklch(0.52 0.14 40)`, light) — CTAs, links, active states
- `--primary-foreground`: warm off-white, text on primary
- `--background`: warm cream (`oklch(0.98 0.012 75)`)
- `--foreground`: warm espresso-brown near-black (`oklch(0.23 0.03 45)`)
- `--secondary` / `--muted`: warm sand, subtle backgrounds / dividers
- `--muted-foreground`: warm gray-brown secondary text
- `--accent`: gold (`oklch(0.72 0.12 80)`) — badges (New/Trending), highlights
- `--destructive`: warm red, errors/remove actions
- `--success`: earthy green, order confirmed / in-stock
- `--border`: warm hairline (`oklch(0.9 0.02 65)`)

The hero and promo banner use a deeper espresso-brown (`#241B14`) with terracotta/gold
gradient accents as a bolder statement treatment layered on top of these tokens.
Keep contrast AA-compliant — verified via preview for body text and buttons.

## Typography
- One clean, highly legible sans-serif for UI (e.g. Inter). Confirm it renders Bangla
  well if any Bangla text appears; otherwise pair with a Bangla-capable font (e.g. Noto
  Sans Bengali) for mixed content.
- Scale (rough): H1 28–32, H2 22–24, H3 18–20, body 15–16, small 13–14 (px, mobile).
- Line length ~60–70 chars on desktop; comfortable line-height (1.5 body).

## Spacing & layout
- 4px spacing scale (4, 8, 12, 16, 24, 32, 48, 64).
- Max content width ~1200–1280px on desktop; generous horizontal padding on mobile (16px).
- Product grid: 2 cols mobile, 3–4 tablet, 4–5 desktop.

## Core components (build with shadcn/ui, themed to tokens)
- Button (primary / secondary / ghost / destructive)
- Product card (image, title, price ৳, quick add, badge slot)
- Navbar + mobile drawer menu
- Cart drawer / cart page
- Form inputs with inline validation (checkout, address, OTP)
- Toast/notification, loading skeletons, empty states
- Badges: Sale, New, COD available, Out of stock

## Imagery
- Consistent product photo aspect ratio (e.g. 1:1 or 4:5). Enforce via image component.
- Always use Next.js `<Image>` for automatic optimization + lazy loading.

## Accessibility baseline
- Semantic HTML, labelled inputs, visible focus states, alt text on images, keyboard-
  navigable menus/cart. Color is never the only signal (pair with icon/text).

> When actually building UI, the agent should also consult the project's frontend-design
> guidance/skill for token and styling conventions before writing components.
