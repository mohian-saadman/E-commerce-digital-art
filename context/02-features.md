# 02 — Features

Feature spec, grouped by phase (see `07-roadmap.md`). This is *what* to build; the
tracker is *whether it's done*. Keep features minimal per phase — ship, learn, iterate.

## Core browsing (Phase 4-5)
- **Navbar:** logo, search, sign-in (Google) / account menu. Sticky on scroll.
- **Homepage:** hero, category strip, "Most Downloaded" / "Most Liked" grid, CTA banner
  to sign in for downloads.
- **Wallpaper listing** (`/wallpapers`): grid with category filter, tag filter, sort
  (Newest / Most Liked / Most Downloaded), pagination.
- **Wallpaper detail** (`/wallpapers/[slug]`): large preview, title, description, tags,
  resolution picker (Mobile/HD/2K/4K), like button, download button per resolution,
  related wallpapers (same category).
- **Search:** by title/description/tags.

## Accounts & gating (Phase 2 & 5)
- **Google sign-in only** (Auth.js + `@auth/prisma-adapter`) — no email/password.
- **Liking a wallpaper requires login.** Logged-out users get prompted to sign in;
  liking is idempotent per user (toggle on/off), one Like row per (user, wallpaper).
- **Downloading requires login.** The download button/link goes through a small
  server-side check: not logged in → redirect to sign-in; logged in → record a Download
  row, then serve the file.
- No admin role needed yet — the owner manages inventory directly via `prisma/seed.ts`
  until/unless an admin UI is worth building later.

## Motion & interaction (Phase 6)
- GSAP-driven scroll reveals on homepage sections, hover parallax/tilt on wallpaper
  cards, hero entrance animation.
- Always respect `prefers-reduced-motion` — motion is a delight layer, not load-bearing.

## SEO foundation (Phase 7)
- Per-route `generateMetadata` (title/description/OG image using the wallpaper's own
  thumbnail).
- JSON-LD structured data (`ImageObject`/`CreativeWork`) on every wallpaper detail page.
- `sitemap.ts` enumerating every wallpaper + category page; `robots.txt`.
- No separate "AI search" feature — the same structured, indexable content serves both
  Google and AI answer engines. See `00-project-overview.md`'s growth-strategy note on
  why this can't be promised as fast or guaranteed.

## Growth backlog (later, no fixed order)
- Trending/curated collections beyond raw "most downloaded".
- User collections/favorites list (distinct from the like count).
- Tag-based recommendations ("more like this").
- Monetization (ads or a premium tier) — **only if the owner explicitly decides to**; not
  assumed or default.

## Non-goals (for now)
- Any payment integration, cart, or checkout.
- Multi-vendor / user-uploaded content — the owner supplies all wallpapers.
- Native mobile apps (the responsive web is the priority).
- Email/password accounts.
