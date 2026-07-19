# 01 — Tech Stack

The chosen stack and *why*. When the agent needs to add a library or make an
architectural choice, it should fit this stack or raise the question with the owner.

## Guiding principle
**One codebase, TypeScript end to end, deployable for free to start.** A monolithic
Next.js app is the easiest thing for both a solo builder and an AI agent to reason about.

## The stack

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js (App Router)** | Server-rendering for SEO, single codebase for frontend + API routes. |
| Language | **TypeScript** | Type safety end to end; fewer runtime bugs; better agent-assisted refactoring. |
| Styling | **Tailwind CSS** | Fast, consistent utility styling. |
| UI components | **shadcn/ui** | Accessible, unstyled-but-themeable React components you own in-repo. |
| Database | **PostgreSQL** | Needed for users, sessions, likes, and download counts — see 06-data-model.md. |
| ORM | **Prisma** | Type-safe DB access + migrations; schema is self-documenting. |
| Auth | **Auth.js (NextAuth) — Google provider only** | One-tap login for a teen audience; no passwords to manage. `@auth/prisma-adapter` persists users/sessions. |
| Image files | **Next.js `public/` folder** | Owner supplies wallpaper files manually per resolution. Simple to start; revisit a dedicated image CDN (Cloudinary/S3/Cloudflare R2) only if catalog size or performance demands it. |
| Motion | **GSAP** (`gsap` + `@gsap/react`) | Scroll-triggered reveals, hover/parallax on wallpaper cards, hero animation. Respect `prefers-reduced-motion`. |
| Hosting (app) | **Vercel** | First-class Next.js support, free tier, auto-deploy on git push. |
| Hosting (DB) | **Neon** or **Supabase** | Managed Postgres with a free tier — owner to pick (open question in tracker). |

## Hosting / deploy model
- Push to GitHub → Vercel auto-builds and deploys.
- `main` branch = production. Feature work on branches, merged via PR.
- DB lives on Neon/Supabase; connection string kept in Vercel env vars (never committed).

## Local dev
- `npm run dev` for the local server (default http://localhost:3000).
- `.env` holds the local Postgres connection string (git-ignored; Prisma's CLI loads
  `.env` by default). `.env.example` documents required keys.
- Local development currently uses a Homebrew Postgres instance, not a hosted DB — see
  `08-agent-guide.md`.

## Explicitly deferred (do NOT add early)
- **Payment integration of any kind.** The product is free; there is no cart, checkout,
  or paid tier. Do not add Stripe/SSLCommerz/etc. unless the owner explicitly decides to
  monetize and asks for it.
- **Headless commerce engines, microservices, GraphQL.** Never applied here — this was
  never a commerce product architecturally in the first place, but flagging it plainly:
  don't reach for e-commerce patterns (cart, checkout, orders) since none of them apply.
- **Email/password auth.** Google-only per the owner's decision; don't add a credentials
  provider without asking first.

## When to reconsider (upgrade triggers)
- Catalog grows large enough that `public/` folder storage/build size becomes a problem
  → migrate images to a CDN (Cloudinary/S3/R2), same DB schema, just swap `filePath` for
  a full CDN URL.
- Real monetization decision (ads, premium tier) → revisit payment/ads tooling then, not
  before.
