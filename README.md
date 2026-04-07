# Hero Faction Screen
**AI 201 — Spring 2026 | SCAD**
**Student:** Art Director
**Tool:** Claude (claude-sonnet-4-6, Claude Code CLI)
**Due:** 2026-04-08

A single-page interactive character select screen for a kawaii pixel art kart racing game. Built with Vite + React + Tailwind CSS. Hosted on GitHub Pages.

**[Live Site →](https://akezi4h-dev.github.io/Character-Select/)**

---

## Design Intent

The app should feel like a **cute pixelated pastel racing game lobby** inspired by Japanese kawaii UI and casual Nintendo-style game menus.

The experience should feel playful, soft and dreamy, friendly and collectible, lighthearted and whimsical — somewhere between **Mario Kart and Sanrio aesthetics**.

### Visual Style
- Soft pastel color palette per character (baby blue, mint green, golden yellow, coral orange)
- Full-screen pixel art backgrounds that shift per character
- Press Start 2P pixel font throughout
- Rounded corners, pill-shaped buttons, per-character glow effects
- Character artwork fills card frames edge to edge

### Interaction Model
- Hover a card → background fades to character's theme
- Select a card → title updates to character name, stats panel appears, kart slides in
- Click START → full-screen transition animation plays (kart drives across screen) → loops back to select

### Characters
| Character | Theme | Color |
|-----------|-------|-------|
| Steve | Beach | `#10517B` |
| Gurchen | Swamp | `#436348` |
| Gerald | Jungle | `#142341` |
| Barry | River | `#295A57` |

---

## Site Flow

```mermaid
flowchart TD
    A([Page Load]) --> B[Character Select Screen\nDefault background\n'SELECT YOUR RACER' title\nSTART disabled]

    B --> C{User Action}

    C -->|Hover card| D[Background fades to\ncharacter theme\nCard glows + scales up]
    D -->|Mouse leave| B

    C -->|Click card| E[Character Selected\nBackground = character image\nTitle = character name\nSubheader = tagline\nStats panel appears\nKart image slides in\nSTART activates]

    E --> F{User Action}

    F -->|Click different card| E
    F -->|Hover other card| G[Background previews\nhovered character theme]
    G -->|Mouse leave| E

    F -->|Click START| H[Transition Screen\nz-index 9999 overlay\nCharacter background\nWhite overlay 0.3 opacity\nCharacter name + GET READY!]

    H --> I[Kart drives\nright to left\n3 seconds ease-in]

    I --> J[Screen fades out\n0.5s opacity transition]

    J --> B
```

---

## AI Direction Log

> Documents moments where the Art Director gave Claude a direction, constraint, or correction that changed the output. Each entry records what AI produced, what was chosen instead, and why that decision belonged to the Art Director.

### Entry 1 — Retro Pixel Restyle Rejected *(2026-04-01)*
Claude restyled every component with sharp pixel-art corners and harsh 8-bit shadows when asked for polish. The Press Start 2P font was kept; everything else was reverted. The Design Intent is kawaii pastel — the font was a retro touch, not an invitation to go full NES.

### Entry 2 — Character Colors Overridden with Exact Hex Values *(2026-04-02)*
Claude used generic pastels. The Art Director supplied exact hex values for each character reflecting their personality and theme. Steve's blue is surfer-coded. Gurchen's lime is froggy. Gerald's yellow is mischievous. Barry's orange is cozy. These were intentional characterizations.

### Entry 3 — Kart Layout Completely Redesigned by Direction *(2026-04-03–04)*
Claude's kart started at ~250px inside a constrained box. The Art Director escalated to 700px, removed the container box entirely, decoupled the right panel from flex flow via `position: absolute`, added the `slideInKart` CSS keyframe animation triggered by `key={character?.id}`, and separated the shadow into an independent static element.

### Entry 4 — Title Behavior Locked Down to Prevent Layout Shift *(2026-04-04–05)*
Dynamic title text ("SELECT YOUR RACER" ↔ "STEVE") caused grid reflow. The Art Director identified the root cause and specified fixed-height container + `white-space: nowrap` to keep bounding boxes stable regardless of content.

### Entry 5 — Kart Display Has No Box *(2026-04-03)*
Claude framed the kart in a detail panel with background tint and borders. The Art Director specified no box, no background, no border — the character floats in the background of their world. Absence as a design decision.

### Entry 6 — Emoji Karts Replaced with Real PNG Artwork *(2026-04-07)*
Four unique pixel art kart PNG images replaced the generic `🏎️` emoji. Each character got their own `kartImage` field wired to their artwork.

### Entry 7 — Character Cards: Full-Bleed Image Over Separate Avatar *(2026-04-07)*
Doubling card size broke the grid. The Art Director directed full-bleed (`position: absolute; inset: 0; object-fit: cover`) with character name overlaid at bottom — turning each card into a mini portrait.

### Entry 8 — Text Stroke System: Multiple Iterations → Removed Entirely *(2026-04-07)*
Claude built a `::before` pseudo-element stroke system. The Art Director iterated: white → black → 2px → 0.5px → removed entirely. Plain white text on pixel art backgrounds needed no stroke.

### Entry 9 — Character Text Colors: Saturated → Muted Dark Palette *(2026-04-07)*
Vibrant saturated character colors clashed with detailed pixel art backgrounds. All four replaced with darker, more muted tones that ground the text against complex imagery.

### Entry 10 — Background Images: Procedural Gradients Replaced with Pixel Art *(2026-04-07)*
CSS gradient backgrounds replaced with commissioned pixel art PNGs per character theme plus a default. The stacked opacity-fade transition system was kept — only the content of each layer changed.

### Entry 11 — Transition Screen: Animation Direction *(2026-04-07)*
Claude defaulted to left-to-right kart movement and 2.5s duration. The Art Director changed to right-to-left (reads as "driving away"), tuned duration to 3s, positioned kart at `top: 400px` to clear the title.

[Full log with detailed entries →](docs/ai-direction-log.md)

---

## Records of Resistance

> Documents technical obstacles encountered, what was attempted first, and how each was solved.

### Record 1 — No Local Node.js Environment *(2026-03-31, ongoing)*
User's machine has no Node.js. All testing done via GitHub Pages deploys (~1 min turnaround). GitHub Actions as the sole preview mechanism.

### Record 2 — CI/CD Lock File Mismatch *(2026-03-31)*
`npm ci` required a lock file that didn't exist. Switched workflow to `npm install`, which regenerates dependencies without one.

### Record 3 — Kart Overflow & Centering *(2026-04-06)*
700px kart clipped by containers. Fixed by addressing the container first: `overflow: visible`, `alignSelf: stretch`, shadow separated into a static sibling element, `key={character?.id}` for clean animation replay.

### Record 4 — CSS Gradient Borders Don't Support Border-Radius *(2026-04-07)*
`borderColor` doesn't accept gradients. Used the `background-clip: padding-box, border-box` technique with `border: 4px solid transparent` — renders gradient only in the border zone while preserving rounded corners.

### Record 5 — Pseudo-Element Stroke Hidden by Stacking Context *(2026-04-07)*
`::before { z-index: -1 }` stroke disappeared on card names because the `<button>` parent created a stacking context that buried it. Fixed with `paint-order: stroke fill` and `-webkit-text-stroke` directly on the element — no z-index required.

### Record 6 — CSS `transition: background-image` Doesn't Work *(2026-04-07)*
Browser doesn't support transitioning `background-image`. The existing stacked opacity-div architecture in `BackgroundLayer.jsx` already solved this — each theme gets its own `position: absolute; inset: 0` div fading via `opacity` transition. Background images dropped in with no transition system changes needed.

### Record 7 — Git Worktree Cannot Checkout Active Branch *(2026-04-07)*
`git checkout main` in the worktree failed: `fatal: 'main' is already used by worktree`. Pushed directly to `origin/main` using `git push origin claude/competent-haibt:main` — bypasses local checkout requirement entirely.

[Full log with detailed entries →](docs/records-of-resistance.md)

---

## Tech Stack

- **Vite** + **React** + **Tailwind CSS**
- **GitHub Actions** → GitHub Pages (auto-deploy on push to `main`)
- **Press Start 2P** (Google Fonts)

## Components

| Component | Purpose |
|-----------|---------|
| `GameMenu` | Root layout, state management, theme coordination |
| `BackgroundLayer` | Stacked opacity-faded theme layers |
| `CharacterGrid` | 2×2 card grid |
| `CharacterCard` | Full-bleed image card with hover/select states |
| `KartDisplay` | Kart image with slide-in animation |
| `StatBars` | Glass morphism animated stat bars |
| `StartButton` | Fixed bottom center, color-synced to character |
| `TransitionScreen` | Full-screen kart drive animation on START |
| `DevGrid` | Developer grid overlay (toggle with G key) |
