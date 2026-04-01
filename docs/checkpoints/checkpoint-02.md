# Checkpoint 02 — Characters Live, Font Set, Nav Tabs Added
**Date:** 2026-04-01
**Session:** AI 201 P1 — Hero Faction Screen
**Last commit:** `e53dd16`

---

## Context Record

Vite + React + Tailwind CSS app, hosted on GitHub Pages via GitHub Actions. SCAD AI 201 P1, Professor Tim Lindsey. All work on `main`.

### What exists right now
- **Repo:** `https://github.com/akezi4h-dev/Character-Select`
- **Live URL:** `https://akezi4h-dev.github.io/Character-Select/`
- **Build pipeline:** GitHub Actions on push to main → `npm install` + `vite build` → deploys `dist/`

### Full file inventory
```
.github/workflows/deploy.yml
docs/
  assignment.md
  design-intent.md
  checkpoints/
    checkpoint-01.md
    checkpoint-02.md        ← this file
  sessions/
    session-01.md
src/
  data/
    characters.js           ← Steve, Gurchen, Gerald, Barry with colors + themes
    themes.js               ← Beach, Swamp, Jungle, River, default gradients + floaters
  components/
    GameMenu.jsx            ← layout shell, hovered+selected state, activeTheme logic
    BackgroundLayer.jsx     ← full-screen bg, opacity cross-fade between themes
    NavTabs.jsx             ← ITEMS / POWER UPS / KARTS, retro pixel style
    CharacterGrid.jsx       ← 2×2 grid, G key grid overlay toggle
    CharacterCard.jsx       ← 192×224px cards, soft glow, name below avatar
    CharacterPreview.jsx    ← right panel, idle bounce, name in character color
    KartDisplay.jsx         ← kart emoji + character name label
    StartButton.jsx         ← bottom right, disabled until selected
    CustomizeButton.jsx     ← near kart, dice emoji
    BackButton.jsx          ← bottom left
  App.jsx
  main.jsx
  index.css                 ← Tailwind + checkerboard + float/idle/squish animations + Press Start 2P global
index.html                  ← Google Fonts: Press Start 2P
package.json
vite.config.js              ← base: '/Character-Select/'
tailwind.config.js
postcss.config.js
.gitignore
```

### Current state of the app
- Press Start 2P pixel font applied globally
- Two-panel layout: left (nav tabs + character grid), right (character preview)
- 2×2 grid: Steve 🏄 (blue/beach), Gurchen 🐸 (green/swamp), Gerald 🐒 (yellow/jungle), Barry 🦦 (orange/river)
- Hover card → full page background cross-fades to character's theme
- Select card → locks in, Start button activates, preview shows character + kart
- Nav tabs (ITEMS / POWER UPS / KARTS) sit between title and grid, retro pixel style, toggle active on click
- G key toggles CSS grid overlay on character cards
- Emoji placeholders throughout — real art not yet added

### What is NOT done yet
- No real character artwork (emoji placeholders)
- No custom animations beyond idle bounce + float (no sparkle, no springy hover)
- No `package-lock.json` (workflow uses `npm install`)
- Node.js not installed on user's machine — no local dev server
- ESF documentation not started (AI Direction Log, Records of Resistance, Five Questions)

---

## Human Re-entry Instructions

1. Open repo: `https://github.com/akezi4h-dev/Character-Select`
2. Confirm latest commit on `main` is `e53dd16` (nav tabs)
3. Read `docs/design-intent.md` to re-establish creative direction
4. Read `docs/sessions/session-01.md` for full context on decisions made
5. Live URL: `https://akezi4h-dev.github.io/Character-Select/`
6. Next priority: real character artwork OR ESF documentation (assignment due Wed 4/8)

---

## Resistance Log

| # | Obstacle | What Happened | Resolution |
|---|---|---|---|
| 1 | No local Node.js | Can't run `npm run dev` locally | Test via GitHub Pages deploy |
| 2 | No preview in Claude's environment | `spawn npm ENOENT` on preview_start | Push to GitHub Pages to verify |
| 3 | Full retro restyle rejected | User liked the font but not the sharp/pixel card+button style | Reverted components, kept Press Start 2P |
| 4 | First NavTabs attempt removed | User reverted the full retro commit which included NavTabs | Re-added as a standalone component in the next push |

---

## Success Log

| # | What Worked | Why It's Reusable |
|---|---|---|
| 1 | Per-character theme system (characters.js + themes.js) | Clean separation of data from components — easy to swap emojis for real art |
| 2 | BackgroundLayer with stacked opacity divs | Smooth cross-fade without JS animation libraries |
| 3 | `hovered ?? selected ?? 'default'` theme logic | Simple priority chain, easy to extend |
| 4 | G key grid overlay | Useful dev tool for layout inspection without adding a dependency |
| 5 | Selective revert (git checkout [hash] -- [files]) | Reverted specific files without touching font changes in index.html/index.css |
| 6 | NavTabs as isolated component | Easy to add/remove without touching GameMenu logic |
