# Progress Tracker

> The living status of the project. Claude Code updates this as work completes.
> Owner reviews it to see where things stand and what needs a decision.
>
> Legend: `[ ]` not started · `[~]` in progress · `[x]` done · `[!]` blocked / needs owner

**Current phase:** Phase 2 — Wallpaper Data Model & Google Auth
**Last updated:** 2026-07-04

---

> **2026-07-04 — Project pivot.** This was a Bangladesh-market e-commerce store selling
> AI-generated art prints; it is now a **free, global wallpaper download site**
> (Google-login-gated downloads, no payments, dark cyberpunk/anime theme, teen
> audience). Phases 0-1 below are unchanged and still valid. Phase 2 ("Catalog") and
> everything that depended on it (Cart, Payments, Orders, Shipping) are **retired** —
> kept below, struck through, for history rather than deleted. See the status log for
> the full pivot entry and `context/07-roadmap.md` for the new phase plan.

## Phase 0 — Setup & Foundation
- [x] Confirm tooling installed (Node 18+, Git, Claude Code, GitHub auth)
- [x] Create repo and push empty scaffold as first commit
- [x] Read all `/context` files, confirm stack decisions with owner
- [x] Scaffold Next.js + TypeScript + Tailwind project
- [x] Add shadcn/ui, set up base theme tokens (see design system)
- [x] Set up `.env.example`, `.gitignore`, project README
- [ ] Connect repo to Vercel, get a live preview URL for `main` — **needs owner** (Vercel account)

## Phase 1 — Homepage / Storefront Shell (first visible milestone)
- [x] Global layout: header/navbar, footer
- [x] Homepage: hero, featured grid, category strip, promo banner (will be re-themed
      in new Phase 4, structure kept)
- [x] Responsive + mobile-first pass
- [x] Placeholder product data (superseded by Phase 2 old, then by the wallpaper seed)
- [x] Loading/empty states, basic accessibility pass
- [ ] **Tag release `v0.1`** — blocked on Vercel connection above

## ~~Phase 2 — Catalog~~ (superseded by pivot, kept for history)
- [x] ~~Product data model in Postgres via Prisma~~ — replaced by the wallpaper schema
- [x] ~~Product listing page (category + filters + sort)~~
- [x] ~~Product detail page (images, price in ৳, variants, add-to-cart)~~
- [x] ~~Search~~
- [x] ~~Seed script with realistic sample catalog~~

## ~~Phase 3 — Cart & Checkout~~ (retired — no cart/checkout in the wallpaper site)
## ~~Phase 4 — Payments~~ (retired — free product, no payment integration)
## ~~Phase 5 — Orders & Admin~~ (retired — no orders)
## ~~Phase 6 — Shipping / Logistics~~ (retired — no physical goods)
## ~~Phase 7 — Launch Hardening (old)~~ (superseded by new Phase 8 below)
## ~~Phase 8 — Post-Launch / Growth (old)~~ (superseded by new Phase 9 below)

---

## New plan (wallpaper site) — see `context/07-roadmap.md` for full reasoning

## Phase 2 — Wallpaper Data Model & Google Auth
- [x] Rewrite `/context` docs for the pivot (this batch of edits)
- [ ] New Prisma schema: User, Category, Wallpaper, WallpaperResolution, Like, Download
      (see `context/06-data-model.md`) — **will reset the local dev DB**, confirm with
      owner before running
- [ ] Auth.js + Google provider + `@auth/prisma-adapter` — **needs owner's Google Cloud
      OAuth client ID/secret**
- [ ] Session-check helper for gating likes/downloads

## Phase 3 — Inventory Seed
- [ ] Real category list (proposed: Anime, Cyberpunk, Gaming, Nature, Abstract, Minimal,
      Dark/Gothic, Space — owner to confirm/edit)
- [ ] Resolution tiers (proposed: Mobile 1080×1920, HD 1920×1080, 2K 2560×1440, 4K
      3840×2160 — owner to confirm/edit)
- [ ] Seed script using gradient-placeholder thumbnails until real files exist
- [ ] Document the `public/wallpapers/<slug>/<resolution>.jpg` file-drop convention

## Phase 4 — Dark Cyberpunk Redesign
- [ ] New color/typography tokens per `context/03-design-system.md`
- [ ] Re-theme Navbar, Hero, Category Strip, Footer
- [ ] Replace promo banner with a "sign in to download" CTA

## Phase 5 — Wallpaper Pages: Listing, Detail, Like & Download
- [ ] `/wallpapers` listing (category/tag filter, Newest/Most Liked/Most Downloaded sort)
- [ ] `/wallpapers/[slug]` detail (resolution picker, like button, gated download,
      related wallpapers)

## Phase 6 — Motion (GSAP)
- [ ] Scroll reveals, hover parallax on wallpaper cards, hero entrance animation
- [ ] `prefers-reduced-motion` fallback throughout

## Phase 7 — SEO Foundation
- [ ] Per-route `generateMetadata`, JSON-LD structured data on wallpaper pages
- [ ] `sitemap.ts`, `robots.txt`

## Phase 8 — Launch Hardening
- [ ] Performance pass (large-image loading discipline)
- [ ] Analytics
- [ ] Legal pages (privacy/terms — still needed with user login even without payments)
- [ ] Security review (auth flows, download-route rate limiting)
- [ ] **Tag release `v1.0`**

## Phase 9 — Growth (backlog)
- [ ] Curated/trending collections beyond raw "most downloaded"
- [ ] User favorites lists
- [ ] Tag-based recommendations
- [ ] Monetization (ads/premium) — only if owner explicitly decides to pursue it

---

## Status Log
> Newest entries at the top. Format: `YYYY-MM-DD — what changed — any decision needed`

- 2026-07-04 — **Project pivot**, planned and approved with the owner: from a
  Bangladesh e-commerce art-print store to a free, global, Google-login-gated wallpaper
  download site (dark cyberpunk/anime theme, teen audience, GSAP motion, SEO/AI-search
  discoverability as the long-term growth goal). Confirmed decisions: no payment
  integration at all; images will live in the Next.js `public/` folder (owner supplies
  files manually); global audience (BD-specific docs dropped); Google-only login; likes
  gated the same as downloads. Rewrote `context/00, 01, 02, 03, 06, 07, 08` for the new
  product; deleted `context/04-payments-bangladesh.md` and
  `context/05-shipping-logistics.md` (no longer applicable — no payments, no physical
  shipping). Retired old Phases 2-8 above (struck through, kept for history) and laid
  out new Phases 2-9. Full plan on file at the time of writing:
  `/Users/saadman/.claude/plans/lucky-conjuring-graham.md`. This entry covers docs only
  — no schema/code changes yet. Next: new Prisma schema + Auth.js (needs owner
  confirmation before resetting the local dev DB, and the owner's Google OAuth
  credentials).
- 2026-07-02 — Completed Phase 2 (Catalog, since superseded — see pivot entry above).
  Added Prisma + Postgres (Category, Product, ProductVariant, ProductImage models), a
  seed script with a realistic 6-category/8-product AI-art print catalog, and built
  `/products` (category filter, price sort, pagination, search) and `/products/[slug]`
  (variant selector, stock, quantity, related products) — all server-rendered from the
  DB. Used a local Homebrew Postgres DB (`arthub_dev`) for development.
- 2026-07-02 — Migrated repo from the initial Vite+React+JS scaffold to Next.js (App
  Router) + TypeScript + Tailwind + shadcn/ui. Built the Phase 1 homepage (navbar, hero,
  category strip, featured products grid, promo banner, footer), fully responsive, warm
  terracotta/gold brand palette (since replaced — see pivot entry above). Merged to
  `main` via PR #1.

## Open Questions for Owner
> Things the agent needs a human decision on. Clear them as they're answered.

- **New brand/site name?** "ArtHub" was the e-commerce name and doesn't fit a wallpaper
  site — needs a new name (and logo, eventually).
- **Google OAuth credentials** — owner needs to create an OAuth client in Google Cloud
  Console and provide the client ID/secret before Phase 2's auth work can be completed.
- **Confirm or edit the proposed category list** (Anime, Cyberpunk, Gaming, Nature,
  Abstract, Minimal, Dark/Gothic, Space) and **resolution tiers** (Mobile/HD/2K/4K) —
  see Phase 3 above. Cheap to change later, just seed data.
- **What is "Higgsfield AI" for in this project?** (content-generation tool for the
  wallpapers themselves, a site motion/video asset, or something else) — doesn't block
  the plan either way, just want to make sure nothing's missed.
- Which managed Postgres for production — Neon or Supabase? Dev has been using a local
  Homebrew Postgres DB in the meantime.
- Connect the GitHub repo to a Vercel account for live preview/deploy — owner action
  needed (unchanged from before the pivot).
- ~~Product category to launch with?~~ — moot after the pivot; superseded by the
  category-list question above.
- ~~Which courier account will you open first?~~ — moot after the pivot, no shipping.
