# 03 — Design System

Design direction and reusable rules for the wallpaper site. This is a full replacement
of the previous (warm terracotta/gold, e-commerce) design system — see
`progress-tracker.md`'s pivot entry. Exact color values below are a direction, not
final; nail them down visually with the owner during Phase 4 (Dark Cyberpunk Redesign)
rather than picking hex codes blind.

## Design principles
1. **Dark by default.** Near-black/deep-navy background, not a light theme with a dark
   mode bolted on — this *is* the theme.
2. **Neon restraint.** One or two accent colors used deliberately (CTAs, active states,
   glow accents on hover) — not neon everywhere, or it stops reading as premium and
   starts reading as noisy.
3. **Motion with purpose.** GSAP-driven reveals and hover interactions should feel
   responsive and fun (this audience expects it) but never block content or hurt
   perceived speed. Always respect `prefers-reduced-motion`.
4. **Imagery is the hero.** Wallpaper thumbnails and previews are the actual product —
   layout should showcase large, high-quality image tiles rather than compete with them
   visually.
5. **Fast despite the visuals.** Glow/blur/motion effects are cheap in CSS/GSAP: don't
   let them cost real performance. Wallpaper images themselves are large (4K/8K) — lazy
   load aggressively, serve appropriately-sized previews vs. full-res downloads.
6. **Clarity over cleverness still applies.** Dark/futuristic doesn't mean illegible —
   obvious navigation, readable type, honest layout, even with a bolder visual language.

## Brand
- Name: ⟨TBD — "ArtHub" no longer fits a wallpaper site; owner to decide, or ask on
  next execution session⟩
- Personality: **Dark, futuristic, cyberpunk/anime-adjacent, confident** — built for a
  teenage audience that already lives in Discord/gaming/anime visual culture.
- Logo: ⟨TBD⟩ — carry the same "rounded-mark + wordmark" navbar pattern used previously
  until a real logo exists.

## Color (direction — finalize exact values in Phase 4)
- **Background:** near-black or deep charcoal/navy (not pure `#000` — slightly tinted
  reads more designed, e.g. a cool dark slate or a faint purple-black)
- **Foreground/text:** near-white, slightly desaturated for comfortable reading on dark
- **Primary accent:** one confident neon (electric cyan, magenta, or violet — pick one as
  *the* brand color, don't split focus across all three)
- **Secondary accent:** a second neon used sparingly (badges, hover glows) — should
  contrast, not compete, with the primary
- **Card surfaces:** slightly lighter than background (e.g. dark slate), often with a
  subtle border or glow ring rather than a hard drop shadow
- **Success/destructive:** keep these legible and distinct from the neon accents — a
  clean green/red still needs to read as "success"/"error" at a glance, not blend into
  the neon palette
- Maintain AA contrast for body text even on a dark, glowing background — verify in
  preview, don't assume a color "looks fine" because it's neon.

## Typography
- Headings: a bold, geometric/display face that reads as futuristic (e.g. something in
  the Orbitron/Rajdhani/Chakra Petch family) — used for big moments (hero, section
  titles), not body copy.
- Body: a clean, highly legible sans (e.g. Inter, or whatever ships fastest via
  `next/font`) — readability wins over vibe for actual reading text.
- Scale (rough, mobile-first): H1 28-36, H2 22-26, H3 18-20, body 15-16, small 13-14 px.

## Spacing & layout
- 4px spacing scale (4, 8, 12, 16, 24, 32, 48, 64) — unchanged from before.
- Max content width ~1280px desktop; generous mobile padding (16px).
- Wallpaper grid: 2 cols mobile, 3-4 tablet, 4-5 desktop — image-forward, minimal
  chrome per card (title + like/download affordance, nothing busier).

## Core components (build with shadcn/ui, retheme existing tokens)
- Button (primary neon / secondary / ghost / destructive)
- Wallpaper card (large image, title, like count, resolution/download affordance,
  hover glow or subtle parallax)
- Navbar + mobile drawer, now with a Google sign-in / avatar menu instead of cart/account
- Category strip (kept from before, re-themed)
- Resolution picker (detail page) — chips/buttons per available resolution
- Like button — clear filled/outline states, optimistic toggle, login prompt when
  logged out
- Toast/notification, loading skeletons, empty states (kept from before)
- Badges: New, Most Liked, Most Downloaded (replaces Sale/COD-available badges)

## Motion (GSAP)
- Scroll-triggered fade/slide reveals for homepage sections and grid items.
- Hover parallax/tilt or glow intensification on wallpaper cards.
- Hero entrance animation (text/CTA reveal on load).
- Every animation must have a static, still-usable fallback under
  `prefers-reduced-motion: reduce` — no motion-only affordances.

## Imagery
- Consistent thumbnail aspect ratio (portrait works well for phone wallpapers — confirm
  with owner once real images exist) enforced via a shared image component.
- Always use Next.js `<Image>` for thumbnails/previews (auto-optimization, lazy load).
  Full-resolution download files are served directly, not through the image optimizer.
- Every wallpaper needs real, descriptive alt text and title/description — this directly
  feeds the SEO goal in `00-project-overview.md`, it's not just accessibility box-ticking.

## Accessibility baseline
- Semantic HTML, labelled inputs, visible focus states (a glowing focus ring fits the
  aesthetic and satisfies this), alt text on every image, keyboard-navigable menus.
- Color is never the only signal (pair glow/neon states with icon/text, e.g. a filled
  heart icon + label, not just a color change).

> When actually building UI, the agent should also consult the project's frontend-design
> guidance/skill for token and styling conventions before writing components.
