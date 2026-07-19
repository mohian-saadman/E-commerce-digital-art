# CLAUDE.md — Agent Entry Point

> This file is read automatically by Claude Code at the start of every session.
> It orients the agent. Do not delete it.

## What this project is

A free, global wallpaper download site (anime/cyberpunk-adjacent, aimed at teenagers).
Browsing is open; Google login is required to like or download. Built and maintained
primarily through Claude Code, versioned on GitHub, deployed on Vercel.

> Pivoted 2026-07-04 from a Bangladesh e-commerce art-print store — see
> `progress-tracker.md`'s status log for the full pivot entry if old references turn up.

The owner is a solo builder learning as they go. Explain non-obvious decisions in plain
language. Prefer clarity and maintainability over cleverness.

## How to work in this repo

1. **Read the context first.** Before starting any non-trivial task, read the relevant
   files in `/context`. They are the source of truth for stack, features, design, and
   business rules. Start with `context/00-project-overview.md`.
2. **Check the tracker.** `progress-tracker.md` (in the repo root) is the living to-do
   list and status log. Look there to see what phase we are in and what is next.
3. **Update the tracker.** After completing a meaningful unit of work, update
   `progress-tracker.md`: check off what is done, add a dated note, and flag anything
   that needs the owner's decision.
4. **Small commits.** Make focused commits with clear messages. Do not bundle unrelated
   changes. Follow the git workflow in `context/08-agent-guide.md`.
5. **Ask before destructive or irreversible actions** (deleting data, force-pushing,
   changing deployment settings, touching secrets).

## Guardrails

- **Never commit secrets.** API keys, OAuth credentials, and `.env*` files must be
  git-ignored. Use `.env.example` with placeholder values as documentation.
- **Never invent Google OAuth credentials or wallpaper image files.** Both come from the
  owner — ask rather than fabricating a placeholder that looks real.
- **No payment integration.** The product is free; don't add a cart, checkout, or paid
  tier unless the owner explicitly decides to monetize and asks for it.
- **Never promise SEO/AI-search-recommendation outcomes.** Build the technical
  foundation faithfully (see `context/00-project-overview.md` and
  `context/07-roadmap.md` Phase 7); never claim a guaranteed ranking or "AI will
  recommend this" result.

## Current stack (summary — full detail in context/01-tech-stack.md)

Next.js (App Router) · TypeScript · Tailwind CSS · shadcn/ui · PostgreSQL · Prisma ·
Auth.js (Google only) · GSAP · Vercel + Neon/Supabase.
