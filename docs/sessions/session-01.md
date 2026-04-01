# Session 01 — Project Setup, First Playable & UI Iteration
**Date:** 2026-03-31 → 2026-04-01
**Branch:** main
**Status at end of session:** App live on GitHub Pages with nav tabs, pixel font, and full character system

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
| Press Start 2P font (Google Fonts) | User kept this after reverting retro restyle |
| Nav tabs: ITEMS / POWER UPS / KARTS | User requested; retro pixel button style |

### What Was Built
1. Full Vite + React + Tailwind scaffold (all component stubs)
2. GitHub Actions deploy workflow
3. Character data + theme data files
4. BackgroundLayer component with smooth opacity cross-fade
5. 2×2 character grid with hover → full page atmosphere shift
6. Per-character pastel colors (blue / green / yellow / orange)
7. Floating emoji animations, checkerboard overlay, idle bounce
8. Card size increased ~55% (w-48 h-56), gap 32px, name pinned below avatar
9. G key + Grid button overlay for layout inspection
10. Press Start 2P font applied globally
11. NavTabs component (ITEMS / POWER UPS / KARTS) with retro pressed-in active state

### UI Direction Changes This Session
| Change | Outcome |
|---|---|
| Full retro pixel restyle (sharp corners, pixel shadows, retro buttons, NavTabs) | User didn't like it — reverted |
| Kept Press Start 2P font from the retro restyle | User explicitly asked to keep it |
| Re-added NavTabs as standalone addition (retro pixel style, same colors as UI) | Pushed and kept |

### Problems We Hit
| Problem | Fix |
|---|---|
| `npm ci` failed in CI — no lock file | Changed to `npm install` in workflow |
| `.gitignore` written to wrong path (unicode issue) | Re-written to correct path |
| Pushed without review → caught pipeline error live | Always confirm before pushing going forward |
| Node.js not installed on user's machine | Can't test locally; using GitHub Pages to preview |
| Preview server unavailable in Claude's environment | Same root cause — Node not available |
| Full retro restyle rejected by user | Reverted components, kept font only |

### Process Rules Established
- Always confirm with user before committing and pushing
- Checkpoints generated before major steps (`docs/checkpoints/`)
- Session logs saved in `docs/sessions/`
- Git commits = save points; revert anytime by asking Claude
- Preview changes before pushing whenever possible

---

## Commits This Session

| Hash | Message |
|---|---|
| `58387ca` | Scaffold Vite + React + Tailwind app with GitHub Pages deployment |
| `e9ee9e9` | Fix CI: use npm install instead of npm ci (no lock file) |
| `7eb25fe` | Add characters, themes, and full-page background shift on hover |
| `e74863a` | Increase card size, spacing, and add grid overlay toggle |
| `ff74c9f` | Restyle to retro pixel art aesthetic ← **reverted next commit** |
| `570547b` | Revert retro restyle, keep Press Start 2P font |
| `e53dd16` | Add ITEMS / POWER UPS / KARTS nav tabs below title |

---

## State of the Live App
**URL:** https://akezi4h-dev.github.io/Character-Select/
- Press Start 2P pixel font across all text
- 2×2 character grid — Steve 🏄, Gurchen 🐸, Gerald 🐒, Barry 🦦
- Cards: 192×224px, 32px gap, soft rounded corners, pastel glow on hover/select
- Hover any card → full page background shifts to character theme (Beach/Swamp/Jungle/River)
- Select a card → locks in, right panel shows character with idle bounce, Start button activates
- Floating emoji particles per theme in background
- Subtle checkerboard overlay
- Nav tabs: ITEMS / POWER UPS / KARTS — retro pixel style, pressed-in active state
- Press G to toggle CSS grid overlay on character cards

---

## Next Steps
1. Get Node.js installed locally (ask professor) for faster iteration
2. Swap placeholder emojis for real character art when available
3. Polish hover animations (springy bounce, sparkle on Start button)
4. Add background decorations (stars, sparkles per Design Intent)
5. ESF documentation: AI Direction Log entries, Records of Resistance
6. Five Questions Reflection before final submission (due Wed 4/8)
