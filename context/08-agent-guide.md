# 08 — Agent Guide (How to work with Claude Code on this project)

Conventions for the coding agent *and* a cheat-sheet for the owner on how to drive it.

## Session start ritual (agent)
1. Read `CLAUDE.md`, then `progress-tracker.md`, then the `/context` file(s) relevant to
   the task.
2. State briefly what phase we're in and what you're about to do.
3. Do the work in small steps. Update the tracker when a unit is done.

## Git workflow
- `main` is always deployable (Vercel auto-deploys it, once connected).
- Do feature work on a branch: `feat/<short-name>`, `fix/<short-name>`, `chore/<short-name>`.
- Commit messages: conventional style — `feat: add wallpaper card`, `fix: like toggle
  double-count`, `chore: set up tailwind`. One logical change per commit.
- Open a PR to merge into `main`; keep PRs focused.
- **Tag releases** at milestone completion: `git tag v0.1 && git push --tags`.
- Ask the owner before: force-push, history rewrite, deleting branches with unmerged
  work, or resetting/dropping database tables (a schema pivot like this one included).

## Secrets & config
- `.env` holds the local Postgres connection string (git-ignored). Vercel env vars hold
  production secrets (DB URL, Google OAuth client ID/secret).
- Maintain `.env.example` with every required key and a placeholder value, as living docs.
- Never print or commit real keys. If a key is needed and missing, ask the owner to add it.

## Code conventions
- TypeScript strict mode. No `any` unless justified with a comment.
- Server-side for anything touching auth/session state or writing Like/Download rows.
  Client only initiates (e.g. an optimistic like toggle still confirms server-side).
- Validate all external input (forms, route handlers).
- Keep components small and named clearly. Co-locate UI with its logic where sensible.
- Use Next.js `<Image>` for wallpaper thumbnails/previews; serve full-resolution download
  files directly (not through the image optimizer).
- Before building UI, consult `03-design-system.md` and the project's frontend-design
  guidance/skill for token and styling conventions.

## External integrations & credentials
- **Google OAuth** (Auth.js provider) needs a client ID/secret from the owner's own
  Google Cloud Console project — the agent cannot create this account or credential.
  Ask the owner for it; never invent or guess client IDs/secrets.
- **Do not fabricate wallpaper image files.** The owner supplies real images manually in
  `public/wallpapers/<slug>/<resolution>.jpg`; seed data may reference a path before the
  file exists (using the gradient-placeholder convention for the thumbnail in the
  meantime), but never generate/invent a substitute "real" image file.
- **Do not promise SEO or AI-search-recommendation outcomes.** Build the technical
  foundation (metadata, structured data, sitemap, performance) described in
  `07-roadmap.md` Phase 7 faithfully, but never claim a specific ranking, traffic
  number, or "will get recommended by AI" guarantee — that depends on factors outside
  the codebase (content quality over time, external links, crawl/index timing).

## Keeping docs in sync
- When a decision changes (stack, feature scope, a business rule, design direction),
  update the relevant `/context` file in the same PR. Stale context is worse than none.
- The tracker is append-friendly: check off items, add dated log entries, surface
  blockers under "Open Questions for Owner."

---
