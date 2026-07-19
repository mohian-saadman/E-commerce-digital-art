# Wallpaper Site

A free, global wallpaper download site — anime/cyberpunk-adjacent, high resolution,
aimed at a teenage audience. Browse everything for free; sign in with Google to like or
download.

Built iteratively with [Claude Code](https://claude.com/claude-code). See
[`CLAUDE.md`](CLAUDE.md) for the agent entry point, [`context/`](context) for the full
product spec, and [`progress-tracker.md`](progress-tracker.md) for current status.

## Stack

Next.js (App Router) · TypeScript · Tailwind CSS · shadcn/ui · PostgreSQL · Prisma ·
Auth.js (Google) · GSAP. Full detail in [`context/01-tech-stack.md`](context/01-tech-stack.md).

## Local development

```bash
npm install
npx prisma migrate dev
npx prisma db seed
npm run dev
```

Requires a local Postgres connection string in `.env` (see `.env.example`). The app runs
at http://localhost:3000.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run lint` — lint
- `npx prisma studio` — browse the local database
