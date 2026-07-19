# 07 — Roadmap

The build order and *why* it's in this order. The tracker holds live status; this holds
the plan and reasoning.

> **Pivot note (2026-07-04):** Phases 0-1 below are unchanged and still valid (the
> Next.js scaffold and homepage shell carry over, just getting re-themed in Phase 4).
> The original Phase 2 ("Catalog", a commerce Product/Variant/Image model) and
> everything that depended on it (Cart, Payments, Orders, Shipping) are **retired** — see
> `progress-tracker.md`'s status log. Phase 2 onward below is the new plan for the
> wallpaper site.

## Phase 0 — Setup & Foundation (done)
Repo → Vercel → live URL, stack confirmed. Vercel connection itself is still pending
(needs the owner's account) but doesn't block anything below.

## Phase 1 — Homepage / Storefront Shell (done, will be re-themed in Phase 4)
The navbar/hero/category-strip/featured-grid/footer information architecture was built
here and is being kept — only its visual theme and data source change going forward.

## Phase 2 — Wallpaper Data Model & Google Auth
Replace the commerce schema with User/Category/Wallpaper/WallpaperResolution/Like/
Download (see `06-data-model.md`). Add Auth.js with a Google-only provider and the
Prisma adapter. *Why first:* nothing else (likes, downloads, "most downloaded" sorting)
works without login and the new schema underneath it.

## Phase 3 — Inventory Seed
A seed script with the real category list and resolution tiers, using the existing
gradient-placeholder convention for thumbnails until real image files exist. *Why:*
gives the new schema real rows to build UI against, and documents exactly where the
owner drops real wallpaper files (`public/wallpapers/<slug>/<resolution>.jpg`).

## Phase 4 — Dark Cyberpunk Redesign
Replace the warm terracotta/gold theme with the dark, neon-accented system from
`03-design-system.md`. Re-skin navbar, hero, category strip, footer; retire the
commerce-flavored promo banner in favor of a "sign in to download" CTA. *Why now:* the
new schema/data exists to build real components against, and doing the visual pass
before the interactive features (next phase) means those features get built directly in
the final look, not reworked twice.

## Phase 5 — Wallpaper Pages: Listing, Detail, Like & Download
`/wallpapers` (filter/sort/pagination, sort by Newest/Most Liked/Most Downloaded) and
`/wallpapers/[slug]` (resolution picker, like button, gated download flow, related
wallpapers). *Why after the redesign:* build the real, final-looking UI once instead of
building it twice (once in the old theme, once in the new).

## Phase 6 — Motion (GSAP)
Scroll reveals, hover parallax on wallpaper cards, hero entrance animation — layered on
top of finished pages. *Why last among the feature phases:* motion is a delight layer on
top of working, accessible pages, not a prerequisite for them.

## Phase 7 — SEO Foundation
Per-route metadata, JSON-LD structured data on wallpaper pages, sitemap, robots.txt.
*Why here:* there's real, final content (real wallpapers, real titles/descriptions) to
generate metadata and structured data from by this point — doing it earlier means
redoing it against placeholder data.

## Phase 8 — Launch Hardening → tag `v1.0`
Performance pass (image loading is the big one here — large wallpaper files need real
lazy-loading/preview-vs-full-res discipline), analytics, legal pages (privacy/terms —
still needed even with no payments, since there's user login and data), security review
(auth flows, download-route abuse/rate-limiting).

## Phase 9 — Growth (backlog, no fixed order)
Curated/trending collections beyond raw "most downloaded", user favorites lists,
tag-based recommendations, monetization (ads or premium tier) **only if the owner
explicitly decides to pursue it** — never assumed as a default direction.

## Release/versioning convention
- `v0.x` = pre-launch milestones.
- `v1.0` = first public launch.
- Patch (`v1.0.1`) = fixes; minor (`v1.1`) = features; major (`v2.0`) = big changes.
- Tag a release whenever a milestone worth returning to is finalized.

## Guiding cadence
Small, frequent commits during a phase; a tagged release at the end of each phase worth
one. Update `progress-tracker.md` as you go. Don't skip ahead to SEO/hardening before the
core browsing + auth + like/download flow (Phases 2-5) feels solid.
