# Session 01 — Project Setup & First Playable
**Date:** 2026-03-31 → 2026-04-01
**Branch:** main
**Status at end of session:** Characters live on GitHub Pages, card sizing update pending push

---

## What We Talked About

### Getting Started
- User shared the AI 201 assignment companion doc (Hero Faction Screen, Prof. Tim Lindsey, SCAD)
- User shared their Design Intent: kawaii pastel racing game lobby, Mario Kart × Sanrio aesthetic
- Both saved to `docs/` for reference
- Established ground rules: no building until docs were in hand, questions first

### Key Decisions Made
| Decision | Reason |
|---|---|
| Vite + React + Tailwind CSS | Specified in Design Intent (Section 9) |
| GitHub Actions deploy workflow | Hosts on GitHub Pages, triggers on push to main |
| `base: '/Character-Select/'` in vite.config.js | Required for GitHub Pages project repo URL |
| 4 characters: Steve 🏄, Gurchen 🐸, Gerald 🐒, Barry 🦦 | User specified |
| Emoji placeholders for First Playable | User has no artwork yet; swap in real art later |
| Full-page background shift on hover/select | User confirmed; assignment rubric rewards this |
| Per-character themes: Beach / Swamp / Jungle / River | User specified |

### What Was Built
1. Full Vite + React + Tailwind scaffold (all component stubs)
2. GitHub Actions deploy workflow
3. Character data + theme data files
4. BackgroundLayer component with smooth opacity cross-fade
5. 2×2 character grid with hover → full page atmosphere shift
6. Per-character pastel colors (blue / green / yellow / orange)
7. Floating emoji animations, checkerboard overlay, idle bounce

### Problems We Hit
| Problem | Fix |
|---|---|
| `npm ci` failed in CI — no lock file | Changed to `npm install` in workflow |
| `.gitignore` written to wrong path (unicode issue) | Re-written to correct path |
| Pushed without review → caught pipeline error live | User asked to always confirm before pushing going forward |
| Node.js not installed on user's machine | Can't test locally; using GitHub Pages to preview |
| Preview server unavailable in Claude's environment | Same root cause — Node not available |

### Process Rules Established
- Always confirm with user before committing and pushing
- Checkpoints generated before major steps (saved in `docs/checkpoints/`)
- Session logs saved in `docs/sessions/`
- Git commits = save points; revert anytime by asking Claude

---

## Commits This Session

| Hash | Message |
|---|---|
| `58387ca` | Scaffold Vite + React + Tailwind app with GitHub Pages deployment |
| `e9ee9e9` | Fix CI: use npm install instead of npm ci (no lock file) |
| `7eb25fe` | Add characters, themes, and full-page background shift on hover |

---

## Pending (Not Yet Pushed)
- Card size increase (~55% larger: 192×224px)
- Gap increased to 32px
- G key / Grid button overlay for layout inspection
- Name pinned below avatar with `mt-auto`

---

## State of the Live App
**URL:** https://akezi4h-dev.github.io/Character-Select/
- 2×2 character grid (Steve, Gurchen, Gerald, Barry)
- Hover any card → full page background shifts to character theme
- Select a card → locks in, Start button activates
- Right panel shows character with idle bounce
- Floating emoji particles in background
- Subtle checkerboard overlay

---

## Next Steps
1. Push pending card sizing + grid overlay changes
2. Get Node.js installed locally (ask professor) for faster iteration
3. Add custom typography (bubbly rounded Google Font)
4. Add background decorations (stars, sparkles)
5. Swap placeholder emojis for real character art when available
6. Polish hover animations (springy bounce, sparkle effect on Start button)
