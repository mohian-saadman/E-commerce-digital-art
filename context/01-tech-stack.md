# 01 — Tech Stack

The chosen stack and *why*. When the agent needs to add a library or make an
architectural choice, it should fit this stack or raise the question with the owner.

## Guiding principle
**One codebase, TypeScript end to end, deployable for free to start.** A monolithic
Next.js app is the easiest thing for both a solo builder and an AI agent to reason about.
We deliberately avoid a headless/microservice split until scale justifies it.

## The stack

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js (App Router)** | React-based, server-side rendering for SEO, single codebase for frontend + API routes. Industry default for custom storefronts. |
| Language | **TypeScript** | Type safety end to end; fewer runtime bugs; better agent-assisted refactoring. |
| Styling | **Tailwind CSS** | Fast, consistent, mobile-first utility styling. |
| UI components | **shadcn/ui** | Accessible, unstyled-but-themeable React components you own in-repo (not a dependency black box). |
| Database | **PostgreSQL** | Reliable relational DB; correct choice for orders/inventory/money. |
| ORM | **Prisma** | Type-safe DB access + migrations; schema is self-documenting. |
| Auth | **Auth.js (NextAuth)** | Customer accounts + admin role; supports email + OAuth. |
| Payments | **SSLCommerz** (primary) + **COD** | One integration = bKash, Nagad, Rocket, cards, net banking. See 04. |
| Shipping | **Steadfast + Pathao** APIs | Nationwide + Dhaka same-day. See 05. |
| Media | **Cloudinary** or **Vercel Blob** | Product image hosting + on-the-fly optimization. |
| Data fetching (client) | **TanStack Query** (where needed) | Caching/sync for interactive parts (cart, admin). |
| Hosting (app) | **Vercel** | First-class Next.js support, free tier, auto-deploy on git push. |
| Hosting (DB) | **Neon** or **Supabase** | Managed Postgres with a free tier. |
| Notifications | SMS provider + email | OTP for phone verification (critical for COD), order updates. |

## Hosting / deploy model
- Push to GitHub → Vercel auto-builds and deploys.
- `main` branch = production. Feature work on branches, merged via PR.
- DB lives on Neon/Supabase; connection string kept in Vercel env vars (never committed).

## Local dev
- `npm run dev` for the local server (default http://localhost:3000).
- `.env.local` holds local secrets (git-ignored). `.env.example` documents required keys.

## Explicitly deferred (do NOT add early)
- **Headless commerce engine (Medusa/Saleor/Vendure).** Powerful, but adds a second
  deployment and ops burden. Revisit only past a few hundred SKUs / few thousand orders
  a month. Migration path: our Postgres data model maps cleanly onto Medusa later.
- **Microservices, Kubernetes, custom infra.** Unnecessary at this scale.
- **GraphQL.** REST via Next.js API routes is enough for now.

## When to reconsider (upgrade triggers)
- Sustained high order volume or large catalog → evaluate Medusa for the backend.
- Multi-channel selling (app + web + marketplace) → headless becomes worth the tax.
- Team grows beyond solo → stricter service boundaries help.
