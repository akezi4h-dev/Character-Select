# Checkpoint 01 — Scaffold Complete, Pipeline Verified
**Date:** 2026-04-01
**Session:** AI 201 P1 — Hero Faction Screen

---

## Context Record

The project is a Vite + React + Tailwind CSS single-page app hosted on GitHub Pages, built automatically via GitHub Actions. It is being built for SCAD AI 201 (Spring 2026, Professor Tim Lindsey) as Project 1: The Hero Faction Screen.

### What exists right now
- **Repo:** `https://github.com/akezi4h-dev/Character-Select`
- **Live URL:** `https://akezi4h-dev.github.io/Character-Select/`
- **Branch:** All work is on `main`
- **Build pipeline:** GitHub Actions (`deploy.yml`) triggers on every push to `main`, runs `npm install` + `vite build`, deploys `dist/` to GitHub Pages

### Files in place
```
.github/workflows/deploy.yml   ← auto-deploy on push to main
docs/
  assignment.md                ← full assignment companion doc
  design-intent.md             ← student's full Design Intent
  checkpoints/
    checkpoint-01.md           ← this file
src/
  components/
    GameMenu.jsx               ← layout shell, holds selected state
    CharacterGrid.jsx          ← 3-col grid
    CharacterCard.jsx          ← card w/ hover/select states
    CharacterPreview.jsx       ← right panel
    KartDisplay.jsx            ← kart display area
    StartButton.jsx            ← bottom right, disabled until selected
    CustomizeButton.jsx        ← near kart, dice icon
    BackButton.jsx             ← bottom left
  App.jsx
  main.jsx
  index.css                   ← Tailwind base/components/utilities
index.html
package.json
vite.config.js                ← base: '/Character-Select/'
tailwind.config.js
postcss.config.js
.gitignore
```

### Current state of the app
- The shell renders: two-panel layout (left grid, right preview), bottom bar with Back + Start buttons
- The character grid is **empty** — `CHARACTERS = []` in `GameMenu.jsx`
- All components are stubs with correct structure, ready for real content
- No images, no real characters, no animations yet
- Tailwind is configured but no custom theme values added yet

### What is NOT done yet
- Characters have not been defined (names, colors, emojis/artwork)
- No per-character color theming (page shift on hover/select)
- No animations (floating stars, bounce, sparkle, idle)
- No custom typography (bubbly rounded font from Google Fonts)
- No background decorations (checkerboard, stars, sparkles, gradient sky)
- No `package-lock.json` (workflow uses `npm install` as workaround)

### Open questions (unanswered as of this checkpoint)
1. What are the 3–5 characters? Names, personalities, individual color schemes?
2. Do you have character artwork/images, or are we using placeholder emoji/CSS art?
3. Should hovering a character shift the entire page atmosphere (background, accents) to that character's color — or just the card?

---

## Human Re-entry Instructions

To resume work from this exact point:

1. Open the repo at `https://github.com/akezi4h-dev/Character-Select`
2. Confirm the latest commit on `main` is the workflow fix (`npm install` instead of `npm ci`)
3. Confirm GitHub Pages is enabled: Settings → Pages → Source → **GitHub Actions**
4. Confirm the live URL loads: `https://akezi4h-dev.github.io/Character-Select/`
5. Read `docs/design-intent.md` to re-establish the creative direction
6. The next step is answering the three open questions above, then filling in `CHARACTERS` in `src/components/GameMenu.jsx`

---

## Resistance Log

| # | Obstacle | What Happened | Resolution |
|---|---|---|---|
| 1 | `npm` not available locally | User could not run `npm install` or `npm run dev` to test locally | Decided to test via GitHub Pages deploy instead |
| 2 | Pipeline failed: lock file missing | `npm ci` requires `package-lock.json`, which wasn't generated since npm wasn't run locally | Changed workflow to `npm install`, removed `cache: npm` |
| 3 | `.gitignore` written to wrong path | Unicode in path caused a typo (`文discord` vs `文档`) during file creation | Detected and re-wrote to correct path immediately |
| 4 | Pushed without review | Workflow failure was caught live in the pipeline rather than before push | User requested memory note: always confirm before pushing |

---

## Success Log

| # | What Worked | Why It's Reusable |
|---|---|---|
| 1 | Saving assignment + Design Intent to `docs/` before building | Gives a stable reference point; good habit for all future sessions |
| 2 | Scaffolding all components as stubs first | Matches Design Intent component list exactly; easy to fill in without restructuring |
| 3 | GitHub Actions deploy workflow using `actions/upload-pages-artifact` + `actions/deploy-pages` | Clean separation of build and deploy jobs; works without a branch like `gh-pages` |
| 4 | `vite.config.js` `base: '/Character-Select/'` | Correct base path for project repo GitHub Pages URL — prevents blank page on deploy |
| 5 | Pushing from worktree branch to main via `git push origin HEAD:main` | Allowed deploying to the correct branch without switching worktrees |
