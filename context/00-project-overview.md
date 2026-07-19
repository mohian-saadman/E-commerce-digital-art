# 00 — Project Overview

## Vision
A free wallpaper download site for a global, mostly-teenage audience — anime, cyberpunk,
and adjacent aesthetics, in high resolution. Browsing is completely open; logging in with
Google is only required to actually download (or like) a wallpaper. Built iteratively
with Claude Code, versioned on GitHub, deployed live, improved release by release.

> **Pivot note (2026-07-04):** this project started as a Bangladesh-market e-commerce
> store selling AI-generated art prints (COD, SSLCommerz, courier shipping). That
> direction is retired — see `progress-tracker.md`'s status log for the pivot entry. This
> file describes the *current* product.

## Why this shape (free + login-gated, not a store)
No payment integration, no cart, no checkout. The funnel is: browse → find a wallpaper →
sign in with Google → download. This keeps the product simple to build and use, and
suits the audience — teenagers are far more likely to complete a one-tap Google sign-in
than a purchase flow. Monetization (if any, e.g. ads) is a later, separate decision and
does not shape the core architecture.

## Why a database is still needed
There's no commerce, but there *is* state that has to persist server-side:
- Who's logged in (sessions), so downloads/likes can be gated
- Likes (which user liked which wallpaper — and to stop double-counting)
- Download counts (to power "Most Downloaded" sorting)

A folder of image files alone can't do any of that — see `06-data-model.md`.

## Growth strategy: organic discovery, not social promotion
The explicit goal is traffic through Google search and AI answer engines (ChatGPT
browsing, Perplexity, Google AI Overviews) rather than manual social-media posting. This
is achievable but not instant or guaranteed — it comes from technical SEO fundamentals
done consistently: fast pages, correct metadata and structured data on every wallpaper
page, a sitemap, genuinely unique per-wallpaper content (title/description/tags), and
time (new domains typically take months to rank). There is no separate trick for "AI
recommends you" beyond the same crawlable, well-structured, high-quality content — AI
answer engines largely surface what's already well-indexed. See `07-roadmap.md` for when
this gets built out, and treat any claim of guaranteed ranking or "AI recommendation" as
false — the agent should never promise outcomes here, only sound execution of the
fundamentals.

## Who the audience is
Teenagers, globally, looking for anime/cyberpunk/gaming-style wallpapers in high
resolution for their phone or desktop. Design and copy should read as current and
visually confident (dark, neon, motion-friendly) rather than corporate.

## Who the owner is (for the agent)
A solo builder using Claude Code Pro, learning as the project grows — including how
databases/auth work, so explain non-obvious decisions in plain language. Favor clear
explanations, incremental steps, and maintainable code. Confirm big decisions rather than
assuming, especially anything destructive (schema resets) or requiring an external
account (Google OAuth credentials, image/CDN hosting, analytics).

## Definition of success for v1.0
A live, fast, dark-themed wallpaper site with a real (owner-supplied) image catalog,
working Google login, a functioning like/download flow, and the SEO foundation (sitemap,
structured data, metadata) in place so organic discovery can start compounding.
