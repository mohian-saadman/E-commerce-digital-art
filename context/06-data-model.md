# 06 — Data Model

A starting relational schema (PostgreSQL via Prisma). Not final — evolve via migrations.
Full replacement of the previous commerce schema (Product/Order/Cart/etc.) — see
`progress-tracker.md`'s pivot entry. `04-payments-bangladesh.md` and
`05-shipping-logistics.md` are retired along with the schema they described; numbering
intentionally skips from `03` to `06` rather than renumbering every file.

## Why there's still a database
There's no commerce here, but there is real server-side state: who's logged in, who
liked what, and how many times each wallpaper has been downloaded. None of that can live
in a folder of image files — see `00-project-overview.md`.

## Core entities

### User
- id, email (unique), name, avatarUrl, createdAt
- Populated by Auth.js on first Google sign-in — the app never collects a password.

### Account / Session / VerificationToken
- Auth.js's own required tables, created via `@auth/prisma-adapter`. Don't hand-roll
  these — let the adapter manage them.

### Category
- id, slug (unique), name, sortOrder
- Flat list (Anime, Cyberpunk, Gaming, Nature, Abstract, Minimal, Dark/Gothic, Space —
  see `prisma/seed.ts` for the current set). Deliberately flat, not nested — see
  `Wallpaper.tags` below for how sub-groupings like "Demon Slayer" or "Naruto" work
  without needing their own nav entries.

### Wallpaper
- id, slug (unique), title, description
- categoryId → Category
- tags (string array) — series/style/subject tags (e.g. `["demon-slayer", "portrait"]`);
  this is how fine-grained groupings work without a rigid subcategory table
- createdAt

### WallpaperResolution
- id, wallpaperId → Wallpaper
- label (e.g. "Mobile", "HD", "2K", "4K"), width, height
- filePath — e.g. `/wallpapers/<slug>/4k.jpg`, resolved against the `public/` folder
  (see `01-tech-stack.md` and `08-agent-guide.md` for the file-drop convention)

### Like
- id, userId → User, wallpaperId → Wallpaper, createdAt
- Unique on (userId, wallpaperId) — a user can only like a wallpaper once; the like
  button toggles this row's existence.

### Download
- id, userId → User, wallpaperId → Wallpaper, resolutionId → WallpaperResolution,
  createdAt
- One row per successful download. Drives "Most Downloaded" sorting and is useful
  analytics later (which resolutions/categories are actually popular).

## Relationships (quick view)
- Category 1—* Wallpaper
- Wallpaper 1—* WallpaperResolution, 1—* Like, 1—* Download
- User 1—* Like, 1—* Download, 1—* Session/Account (via Auth.js adapter)

## Rules
- **Like/download counts are computed, not denormalized.** Query `_count` on the
  relation (e.g. `wallpaper._count.likes`) rather than maintaining a running counter
  column — simpler, and this catalog size doesn't need the optimization. Revisit only if
  a specific page's query load becomes a measured problem.
- **Downloading and liking both require an authenticated session** — enforce this
  server-side (route handler / server action), never trust a client-side check alone.
- **Real wallpaper files are the owner's responsibility to provide** — the agent must
  never invent, generate, or fabricate image files. Seed data may reference a
  `filePath` before the real file exists (using the same `gradient:` placeholder
  convention from the original catalog for thumbnails), but a missing real file means
  the download action for that resolution should be disabled, not silently broken.
