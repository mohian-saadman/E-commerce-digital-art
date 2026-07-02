# 08 — Agent Guide (How to work with Claude Code on this project)

Conventions for the coding agent *and* a cheat-sheet for the owner on how to drive it.

## Session start ritual (agent)
1. Read `CLAUDE.md`, then `progress-tracker.md`, then the `/context` file(s) relevant to
   the task.
2. State briefly what phase we're in and what you're about to do.
3. Do the work in small steps. Update the tracker when a unit is done.

## Git workflow
- `main` is always deployable (Vercel auto-deploys it).
- Do feature work on a branch: `feat/<short-name>`, `fix/<short-name>`, `chore/<short-name>`.
- Commit messages: conventional style — `feat: add product card`, `fix: cart total
  rounding`, `chore: set up tailwind`. One logical change per commit.
- Open a PR to merge into `main`; keep PRs focused.
- **Tag releases** at milestone completion: `git tag v0.1 && git push --tags`.
- Ask the owner before: force-push, history rewrite, deleting branches with unmerged work.

## Secrets & config
- `.env.local` (local) and Vercel env vars (prod) hold secrets. Both git-ignored.
- Maintain `.env.example` with every required key and a placeholder value, as living docs.
- Never print or commit real keys. If a key is needed and missing, ask the owner to add it.

## Code conventions
- TypeScript strict mode. No `any` unless justified with a comment.
- Server-side for anything touching money, orders, or secrets. Client only initiates.
- Validate all external input (checkout, forms, API payloads).
- Keep components small and named clearly. Co-locate UI with its logic where sensible.
- Use Next.js `<Image>` for all images; Tailwind + shadcn/ui for styling.
- Before building UI, consult the frontend-design guidance for token/style conventions.

## External integrations (payments, couriers)
- **Do not invent endpoints, params, or auth schemes from memory.** Use the official docs
  the owner provides. If a detail is unknown, ask — a wrong guess here costs real money.
- Build behind a thin abstraction (payment provider / shipping provider interface) so a
  second provider can be added without rewrites.
- Sandbox/test mode first; production credentials only at go-live.

## Keeping docs in sync
- When a decision changes (stack, feature scope, a business rule), update the relevant
  `/context` file in the same PR. Stale context is worse than none.
- The tracker is append-friendly: check off items, add dated log entries, surface blockers
  under "Open Questions for Owner."

---
