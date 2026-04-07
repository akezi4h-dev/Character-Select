# Records of Resistance
**Project:** AI 201 P1 — Hero Faction Screen
**Student:** Art Director
**Tool:** Claude (claude-sonnet-4-6, Claude Code CLI)
**Due:** 2026-04-08

---

> This document records every moment where AI went against my design intention or produced something wrong. Each entry documents: what I wanted, what AI made instead, why it went wrong (vague prompt, ignored directions, hallucination, coding error, etc.), and exactly how I corrected it through a new prompt.

---

## Record 1 — Full Retro Restyle: Ignored Design Intent

**Date:** 2026-04-01
**Commits:** `ff74c9f` (rejected) → `570547b` (revert)

**What I wanted:**
Larger character cards and more visual polish — still within the kawaii pastel aesthetic defined in my Design Intent. I wanted softness, roundness, and a cute game lobby feel. The Press Start 2P font was already in place and I liked it.

**What AI made:**
Claude returned a complete visual restyle of every component. It added pixel-drop shadows to all elements, changed card corners from rounded to sharp right angles, applied heavy pixel-art borders, and styled buttons with angular 8-bit shapes. The entire screen shifted from kawaii pastel to harsh NES game UI. The font was kept but surrounded by everything I didn't want.

**Why AI went wrong:**
AI did not follow design intent. Claude made an unsupported assumption: because the font was retro (Press Start 2P), the entire UI should match a retro pixel-art aesthetic. It associated one retro element with a full retro treatment and ran with it without checking against the Design Intent document that specified soft, round, kawaii, and pastel throughout.

**How I fixed it:**
> *"I don't like it, please revert everything back except the font — keep the Press Start 2P font."*

Claude used `git checkout [hash] -- [specific files]` to selectively revert only the component files, preserving the font changes in `index.html` and `index.css`. The rejection was total — every visual change except the font was undone.

---

## Record 2 — Kart Size Too Small: AI Defaulted to Conventional UI Sizing

**Date:** 2026-04-03 → 2026-04-04

**What I wanted:**
The kart display on the right half of the screen should feel like a hero moment — a large, dramatic showcase of the selected character's kart. I wanted it to feel cinematic and dominant, the way Mario Kart's character select screen makes your character feel larger than life.

**What AI made (attempt 1):**
Claude placed the kart at roughly 250–300px — a standard UI preview thumbnail size. It looked like a small detail panel, not a hero display. It was correctly centered and positioned but felt completely underwhelming.

**Why AI went wrong (attempt 1):**
My prompt was vague. I asked for the kart to "be displayed on the right panel" without specifying how large or what emotional register it should hit. Claude defaulted to conventional UI proportions for a preview element.

**How I fixed it (round 1):**
> *"Make the kart image much larger — around 250–300px wide... The kart should feel like a hero moment."*

Claude scaled it up but placed it inside a constrained container with `overflow: hidden`, causing the kart to clip at the edges. Bigger but now cut off.

**What AI made (attempt 2):**
Claude fixed the clipping by adding padding, but the kart was still ~400–500px and still felt like a UI element rather than a cinematic display. It remained framed inside a box.

**Why AI went wrong (attempt 2):**
AI did not fully grasp "hero moment." It treated the kart as a preview panel element and scaled it within that convention, instead of rethinking the entire display as a showcase.

**How I fixed it (round 2):**
> *"Can you make it even bigger — 700 pixels?"*

Claude scaled to 700px, updated the container to `maxWidth: 720px`, and set `overflow: visible` so nothing clips. 700px is nearly the full height of a laptop screen — that was intentional. No UI convention would suggest it. It was a design escalation, not a technical request.

---

## Record 3 — Kart Container Box: AI Added a Frame I Didn't Want

**Date:** 2026-04-03

**What I wanted:**
The selected character's kart should float freely in the right half of the screen — no box, no container, no background panel behind it. The character should feel like they exist *in their world*, not displayed inside a UI chrome element.

**What AI made:**
Claude placed the kart inside a visible framed container: a card-like box with rounded corners, padding, and a subtle background tint. This is the standard UI pattern for a "detail panel" or "preview area."

**Why AI went wrong:**
AI followed a convention. A right-side detail panel is the conventional UI response to "show a preview of the selected item." Claude had no reason to deviate from it — the design intention of floating the character freely in the background was never stated explicitly in the prompt.

**How I fixed it:**
> *"No box, no background, no border — the kart should float in the background of the screen. Only the shadow ellipse below it."*

Claude removed the container background, border, and padding entirely. The kart now appears directly against the full-screen background image with only a ground shadow beneath it.

---

## Record 4 — Character Cards Shifting on Click: AI Applied a Patch Instead of a Fix

**Date:** 2026-04-04 → 2026-04-05

**What I wanted:**
Clicking a character card should feel smooth and stable. The grid should not visually jump or shift when a selection is made. The UI should feel polished and deliberate.

**What AI made:**
After clicking a card, the entire character grid visibly shifted position — cards jumping slightly left or upward. Claude's initial fix was to adjust padding and margins around the title to try to compensate for the movement visually.

**Why AI went wrong:**
AI treated the symptom, not the cause. The real problem was a browser layout reflow: the title text was switching between "SELECT YOUR RACER" (wide) and "STEVE" (narrow), and because the title was in the normal document flow with no fixed size, the width change caused the surrounding layout to reflow and push the card grid. Claude saw the cards moving and tried to stabilize them with padding, which does not prevent reflow.

**How I fixed it:**
> *"Character cards must not move or shift when clicked. Figure out why this is happening and stop this completely."*

I identified the root cause to Claude — variable-length title text causing reflow — and specified the structural fix:
1. Fixed-height title container (`height: 60px`) + `white-space: nowrap` — bounding box stays constant regardless of text content
2. Right panel decoupled from flex flow entirely via `position: absolute; top: 0; right: 0; width: 50%; height: 100%` — nothing on the right can affect the left

---

## Record 5 — Right Panel Coupled to Flex Layout: AI Used Standard Layout That Caused Instability

**Date:** 2026-04-03

**What I wanted:**
The right panel (kart display) should be completely stable and independent. Changes to the left side — title text length, card selection states, grid dimensions — should never affect the right panel's position or size.

**What AI made:**
The right panel was placed as a flex sibling to the left panel inside the main layout. This is standard two-column layout behavior. It meant any change on the left (like title text changing width) could shift or resize the right panel through normal flex distribution.

**Why AI went wrong:**
AI used a conventional layout approach. Two-column flex layout is the standard solution for a two-panel screen. Claude had no reason to deviate — the coupling problem wasn't stated as a requirement because I hadn't identified it yet at the time of the initial prompt.

**How I fixed it:**
> *"Make the right panel position: absolute; top: 0; right: 0; width: 50%; height: 100% — completely removed from the flex flow. Use display: flex; align-items: center; justify-content: center inside it so the kart stays perfectly centered no matter what changes on the left."*

This completely decoupled the two halves. The right panel is now independent of the flex layout — nothing on the left can push, shrink, or shift it.

---

## Record 6 — Text Stroke System: Multiple Wrong Iterations Before Removal

**Date:** 2026-04-07

**What I wanted:**
Text elements (title, stats, card names) that were readable and visually clean against complex pixel art backgrounds. I started by asking for a text stroke to help legibility.

**What AI made (attempt 1):**
Claude implemented a `::before` pseudo-element stroke system at 4px white. It looked heavy and fussy against the pixel art — the white stroke competed with the background instead of helping.

**What AI made (attempt 2 — card name stroke):**
When I asked for the same stroke on the card names, the stroke disappeared entirely on cards. The `::before` pseudo-element was using `z-index: -1` to sit behind the text fill, but the `<button>` parent element created its own stacking context that buried the pseudo-element completely.

**Why AI went wrong:**
Coding issue on attempt 2 — Claude didn't account for the button's stacking context when implementing the same technique that worked elsewhere. `z-index: -1` inside a stacking context clips to that context, making the pseudo-element invisible. Claude applied a pattern without checking if the container conditions were compatible.

**How I fixed it (card name stroke):**
> *"The character name text inside the cards is not showing the stroke — fix it."*

Claude switched to `paint-order: stroke fill` with `-webkit-text-stroke` applied directly on the element — no z-index, no pseudo-element needed. `paint-order` is a render order instruction, not a positioning one, so stacking context is irrelevant.

**What I decided after all iterations:**
After testing: white stroke → black stroke → 2px → 0.5px → I removed the stroke system entirely.

**How I fixed it (final):**
> *"Remove all text outlines and strokes from every text element on the entire page."*

Plain white text on pixel art backgrounds needed no stroke. The iterations taught me that the stroke was adding noise, not solving a problem. Removing it entirely was the right call.

---

## Record 7 — Character Text Colors: AI Used Saturated Colors That Clashed with Backgrounds

**Date:** 2026-04-07

**What I wanted:**
Text colors that feel intentional and grounded against the detailed pixel art background images. Colors that belong in each character's world.

**What AI made:**
The character color system used vibrant, saturated values: Steve `#6286FE`, Gurchen `#6BF26B`, Gerald `#FFDA69`, Barry `#FF8651`. These had been designed against the original CSS gradient backgrounds and looked fine there. Once detailed pixel art backgrounds were introduced, the bright saturated colors created visual conflict — they looked like they were floating on top of the image rather than being part of it.

**Why AI went wrong:**
AI did not follow design intent in context. The colors were technically correct based on my earlier hex specifications, but Claude applied them without considering that the background system had fundamentally changed. It didn't flag the visual conflict or suggest re-evaluating the palette.

**How I fixed it:**
> *"Update the text colors and START button color for each character: Steve #10517B, Gurchen #436348, Gerald #142341, Barry #295A57."*

I replaced all four with darker, more muted tones that ground the text against the lighter, more complex pixel art imagery. Each new color is still character-coded but sits in the scene rather than fighting it.

---

## Record 8 — Character Colors Not Applied to All Text: AI Left the System Half-Built

**Date:** 2026-04-07

**What I wanted:**
When a character is selected, every text element on screen — title, subheader, detail stats, stat bar labels, card name, transition screen text — should shift to that character's color. The whole screen should feel fully themed to the selection.

**What AI made:**
After the text stroke system was removed, all text defaulted to white. The `--text-gradient` CSS variable that previously drove text color was left inert in the code. The stat bars and START button were already using character color, but all text remained white regardless of selection.

**Why AI went wrong:**
AI did not follow directions completely. The `--text-gradient` variable had been set up in a previous session and the system for applying it was never updated when the stroke system changed. Claude left orphaned code in place without flagging that the text color system had been broken by the stroke removal.

**How I fixed it:**
> *"Apply character colors to ALL of the following when a character is selected: title and subheader text, selected character card name text, all stats text (Age, Favorite Food, Favorite Place, Catchphrase, Strength, Ability labels and values), START button background color, stat bar fill color. Also apply the same character color to the transition screen: character name text, GET READY text."*

Implemented by replacing `--text-gradient` with a unified `--char-color` CSS custom property passed through inline styles on each element, with `white` as the CSS fallback when no character is selected.

---

## Record 9 — GET READY Text Ignored Character Color: CSS Class Override

**Date:** 2026-04-07

**What I wanted:**
The GET READY! text on the transition screen should use the selected character's color — consistent with every other text element on the screen when a character is selected.

**What AI made:**
The transition screen's `<h1>` (character name) correctly used `WebkitTextFillColor: textColor` directly in the inline style, so it showed character color. But the GET READY! `<p>` element used the `.get-ready` CSS class, which had `-webkit-text-fill-color: white` hardcoded. The inline `--char-color` variable was never passed to that element, so the CSS class's white override won.

**Why AI went wrong:**
Coding issue — CSS specificity and cascade order. The `.get-ready` class was setting `-webkit-text-fill-color: white` directly, which takes precedence over a CSS variable fallback when the variable is not set on that element. Claude wired the `h1` correctly but missed that the `<p>` used a class with a hardcoded override rather than the variable system.

**How I fixed it:**
> *"Fix the GET READY text on the transition screen — it should use the character color, not white."*

Added `'--char-color': textColor` to the GET READY `<p>` element's inline style, and updated the `.get-ready` CSS class to use `var(--char-color, white)` instead of a hardcoded white. The variable now propagates correctly from inline style into the class.

---

## Record 10 — Card Name Color Wrong After Initial Implementation

**Date:** 2026-04-07

**What I wanted:**
Card name text should be white on unselected cards, and switch to the character's border color (lighter pastel: `#7dd3fc`, `#86efac`, `#fde047`, `#fdba74`) when that card is selected.

**What AI made (attempt 1):**
Claude first set the card name to always show `color.border` regardless of selection state. Every card name was colored at all times — not just the selected one.

**Why AI went wrong (attempt 1):**
Prompt was partially vague. I said the card name should "match the border color" without specifying that this should only apply when selected. Claude applied the color universally.

**How I fixed it (attempt 1):**
> *"When a card is NOT selected: card name text should be white. When a card IS selected: card name text should change to that character's color."*

**What AI made (attempt 2):**
Claude then applied `isSelected ? color.border : undefined` — correct in principle, but the CSS class `.card-name` was still using `var(--char-color, white)` rather than its own isolated variable. This caused the card name to potentially inherit `--char-color` from a parent if the variable happened to be set in scope.

**How I fixed it (final):**
Scoped the card name to its own dedicated CSS variable `--card-border-color`, completely isolated from the `--char-color` system. `.card-name` only responds to `--card-border-color` — no bleed from any other color system on the page.

---

## Record 11 — CSS Gradient Borders: AI Used Invalid CSS Syntax

**Date:** 2026-04-07

**What I wanted:**
A gradient border on the character cards — `linear-gradient(to bottom, #51A0C8, #6CC2EE, #B3E5FF)` — with rounded corners preserved.

**What AI made:**
Claude set `borderColor` to a gradient string in the inline style. CSS does not support gradient values for `border-color` — it only accepts solid color values. The gradient was silently ignored and the border showed as transparent.

**Why AI went wrong:**
Coding issue / hallucination. Claude wrote syntactically plausible-looking code that CSS does not actually support. `border-color: linear-gradient(...)` is not valid CSS and has no effect, but Claude produced it as if it were a valid solution.

**How I fixed it:**
> *"The border color isn't showing — fix it so the gradient border works with the rounded corners."*

The correct approach is the `background-clip` technique:
- `border: 4px solid transparent`
- `backgroundImage: 'linear-gradient(transparent, transparent), linear-gradient(to bottom, #51A0C8, #6CC2EE, #B3E5FF)'`
- `backgroundOrigin: 'padding-box, border-box'`
- `backgroundClip: 'padding-box, border-box'`

This renders the gradient in the border zone only, while preserving both the rounded corners and the transparent card background. `border-image` (the alternative) would have destroyed `border-radius`.

---

## Record 12 — Pseudo-Element Stroke Invisible on Card Names: Stacking Context Bug

**Date:** 2026-04-07

**What I wanted:**
Text stroke visible on the character name inside each card, matching the stroke on the title and stats.

**What AI made:**
The `::before` pseudo-element stroke technique that worked on the title (`z-index: -1` to sit behind the fill) was applied to the card name. On the card, the stroke was completely invisible — the pseudo-element disappeared entirely.

**Why AI went wrong:**
Coding issue — stacking context. The card name sits inside a `<button>` element with `position: relative` and `overflow: hidden`. Buttons create their own stacking context. A `z-index: -1` pseudo-element inside a stacking context is clipped to that context — it renders behind the button's own background, not behind the text fill. Claude reused a working technique without checking whether the container environment was compatible.

**How I fixed it:**
> *"The card name stroke is not visible — fix it."*

Switched to `paint-order: stroke fill` with `-webkit-text-stroke` applied directly on the element — no pseudo-element, no z-index involved. `paint-order` tells the browser to render the stroke first in the normal paint order, then fill on top. Since it's not using z-index positioning at all, stacking context is irrelevant.

---

## Record 13 — CSS `transition: background-image` Doesn't Work: Browser Limitation

**Date:** 2026-04-07

**What I wanted:**
Smooth, animated transitions between the character background images when hovering or selecting a different character. No harsh snapping.

**What AI made:**
The initial background image swap used direct `background-image` property changes, which cannot be transitioned in CSS. Backgrounds snapped instantly with no fade.

**Why AI went wrong:**
Coding issue / browser limitation. `transition: background-image` is not supported by any browser — background images cannot be interpolated. Claude attempted a transition that the browser fundamentally cannot perform.

**How I fixed it:**
The existing `BackgroundLayer.jsx` architecture already had the correct solution from a previous session — stacked `position: absolute; inset: 0` divs, one per theme, each controlled by `opacity: 0 → 1` with `transition: opacity 0.7s ease-in-out`. The fix required no architectural change. Each theme div already existed and was already fading. Swapping from CSS gradients to background images just meant changing what each div rendered — the transition system was untouched.

---

## Record 14 — Git Worktree Branch Conflict: Environment Constraint

**Date:** 2026-04-07

**What I wanted:**
Push completed changes from the worktree to `origin/main` so they'd deploy to GitHub Pages.

**What AI made:**
Claude attempted to merge the worktree branch into the local `main` branch first. Git rejected it: `fatal: 'main' is already checked out at 'C:/Users/.../Character-Select'`. The main branch was already in use by the primary worktree — you cannot check it out in a second worktree simultaneously.

**Why AI went wrong:**
Coding issue — environment constraint. The standard push workflow (checkout main → merge → push) assumed only one working directory. In a git worktree setup, multiple branches are checked out simultaneously in different directories. The standard workflow broke because it didn't account for the worktree isolation.

**How I fixed it:**
> *"Push directly to origin/main without checking out the branch."*

Used the git ref syntax to push directly: `git push origin claude/competent-haibt:main`. This pushes the worktree branch directly to the `origin/main` remote ref without ever needing to checkout `main` locally. Since the worktree branch was a direct fast-forward of `origin/main`, no merge was needed. This became the standard push method for every deploy throughout the project.

---

## Record 15 — Pixel Art Images Rendered Blurry: Browser Scaling Behavior

**Date:** 2026-04-07

**What I wanted:**
Sharp, crisp pixel art — both the character card portraits and the full-screen background images. Pixel art is defined by its hard edges and visible pixel grid. Blurry pixel art defeats the entire aesthetic.

**What AI made:**
Images appeared blurry at display scale. The images were correctly loaded and positioned — the blurriness was a browser rendering behavior, not a file problem.

**Why AI went wrong:**
Coding issue — browser default behavior. Browsers apply bilinear filtering to all scaled images by default. For photographs this creates smooth scaling. For pixel art it blurs the hard pixel edges, destroying the visual language entirely. Claude placed the images without specifying a rendering mode that would preserve pixel-art crispness.

**How I fixed it:**
> *"The character cards are blurry — can you fix it using image-rendering: pixelated?"*
> *"The background is also blurry — apply the same fix."*

Applied `imageRendering: 'pixelated'` to:
1. The `<img>` tags in `CharacterCard.jsx`
2. The background `<div>` elements in `BackgroundLayer.jsx` — `image-rendering` works on CSS `background-image` on divs as well as `<img>` elements

Nearest-neighbor scaling preserves the pixel grid at any display size. Every pixel maps to a clean, sharp block. No smoothing. No blurring.

---

*Last updated: 2026-04-07*
*Update this document whenever a new session ends.*
