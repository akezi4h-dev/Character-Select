# Records of Resistance
**Project:** AI 201 P1 — Hero Faction Screen
**Student:** Art Director
**Tool:** Claude (claude-sonnet-4-6, Claude Code CLI)
**Due:** 2026-04-08

---

> This document records every moment where AI went against my design intention or produced something wrong. Each entry documents: what I wanted, what AI made, why it went wrong (vague prompt, ignored directions, hallucination, coding error, etc.), how I corrected it through a new prompt, and why the fix made the project better.

---

## Record 1 — Full Retro Restyle: Ignored Design Intent

**Date:** 2026-04-01
**Commits:** `ff74c9f` (rejected) → `570547b` (revert)

**What I wanted:**
Larger character cards and more visual polish still within the kawaii pastel aesthetic defined in my Design Intent. I wanted softness, roundness, and a cute game lobby feel. The Press Start 2P font was already in place and I liked it.

**What AI made:**
Claude returned a complete visual restyle of every component. It added pixel-drop shadows to all elements, changed card corners from rounded to sharp right angles, applied heavy pixel-art borders, and styled buttons with angular 8-bit shapes. The entire screen shifted from kawaii pastel to harsh NES game UI. The font was kept but surrounded by everything I didn't want.

**Why AI went wrong:**
AI did not follow design intent. Claude made an unsupported assumption: because the font was retro (Press Start 2P), the entire UI should match a retro pixel-art aesthetic. It associated one retro element with a full retro treatment and ran with it without checking against the Design Intent document that specified soft, round, kawaii, and pastel throughout.

**How I fixed it:**
I needed to reject the entire visual direction and roll back to only the change I actually wanted — the font — while undoing everything else. I gave Claude a clear total rejection with a single exception to keep.

> *"I don't like it, please revert everything back except the font — keep the Press Start 2P font."*

Claude used `git checkout [hash] -- [specific files]` to selectively revert only the component files, preserving the font changes in `index.html` and `index.css`. The rejection was total — every visual change except the font was undone.

**Why fixing it made it better:**
Reverting the restyle protected the emotional register the entire project is built on. If the harsh NES aesthetic had stayed, every subsequent design decision would have been built on the wrong foundation. The kawaii pastel identity — soft, round, collectible — was restored and held for the rest of the project. The font survived as the one retro touch it was always meant to be.

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
I wanted Claude to understand this was about feeling, not just size — the kart needed to feel like the star of the screen, not a supporting element.

> *"Make the kart image much larger — around 250–300px wide... The kart should feel like a hero moment."*

Claude scaled it up but placed it inside a constrained container with `overflow: hidden`, causing the kart to clip at the edges. Bigger but now cut off.

**What AI made (attempt 2):**
Claude fixed the clipping by adding padding, but the kart was still ~400–500px and still felt like a UI element rather than a cinematic display. It remained framed inside a box.

**Why AI went wrong (attempt 2):**
AI did not fully grasp "hero moment." It treated the kart as a preview panel element and scaled it within that convention, instead of rethinking the entire display as a showcase.

**How I fixed it (round 2):**
I abandoned subtlety and gave Claude an exact number that no UI convention would ever produce — forcing it to abandon the "preview panel" mental model entirely.

> *"Can you make it even bigger — 700 pixels?"*

Claude scaled to 700px, updated the container to `maxWidth: 720px`, and set `overflow: visible` so nothing clips. 700px is nearly the full height of a laptop screen — that was intentional. It was a design escalation, not a technical request.

**Why fixing it made it better:**
700px transformed the kart from a UI detail into the centerpiece of the screen. When you select a character, their kart fills the right half of your view — it commands attention the way the character select screen in Mario Kart does. It made the "payoff moment" of selecting a character feel real.

---

## Record 3 — Kart Container Box: AI Added a Frame I Didn't Want

**Date:** 2026-04-03

**What I wanted:**
The selected character's kart should float freely in the right half of the screen — no box, no container, no background panel behind it. The character should feel like they exist *in their world*, not displayed inside a UI chrome element.

**What AI made:**
Claude placed the kart inside a visible framed container: a card-like box with rounded corners, padding, and a subtle background tint. This is the standard UI pattern for a "detail panel" or "preview area."

**Why AI went wrong:**
AI followed a convention. A right-side detail panel is the conventional UI response to "show a preview of the selected item." Claude had no reason to deviate from it the design intention of floating the character freely in the background was never stated explicitly in the prompt.

**How I fixed it:**
I needed to explicitly reject every element of the container not just shrink it or restyle it, but eliminate it entirely. The prompt had to communicate that absence was the design.

> *"No box, no background, no border the kart should float in the background of the screen. Only the shadow ellipse below it."*

Claude removed the container background, border, and padding entirely. The kart now appears directly against the full-screen background image with only a ground shadow beneath it.

**Why fixing it made it better:**
Removing the box completely changed the feeling of character selection. Instead of looking at a character *through* a UI panel, the screen feels like you're looking at the character *in their world*. The background shifts to their theme, and they float in it immersive rather than interfaced. The only thing grounding them is the ellipse shadow, which feels like a game engine ground contact shadow, not a UI border.

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
I rejected the cosmetic fix and demanded Claude find and eliminate the actual cause — making it clear that visual compensation wasn't acceptable and a structural solution was required.

> *"Character cards must not move or shift when clicked. Figure out why this is happening and stop this completely."*

I identified the root cause to Claude — variable-length title text causing reflow — and specified the structural fix:
1. Fixed-height title container (`height: 60px`) + `white-space: nowrap` — bounding box stays constant regardless of text content
2. Right panel decoupled from flex flow entirely via `position: absolute; top: 0; right: 0; width: 50%; height: 100%` — nothing on the right can affect the left

**Why fixing it made it better:**
Card stability is fundamental to the polish of the selection interaction. Before the fix, clicking any card looked like a layout glitch — it broke trust in the UI. After the fix, the grid is completely locked. Clicking a card feels intentional and clean. The title text changes, the background shifts, the stats panel appears — all without the grid moving a single pixel.

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
I gave Claude the exact CSS values I needed, specifying that the panel must be completely removed from the flex flow — not just repositioned within it. I included the internal centering so the kart would remain centered regardless of what happened on the left.

> *"Make the right panel position: absolute; top: 0; right: 0; width: 50%; height: 100% — completely removed from the flex flow. Use display: flex; align-items: center; justify-content: center inside it so the kart stays perfectly centered no matter what changes on the left."*

This completely decoupled the two halves. The right panel is now independent of the flex layout — nothing on the left can push, shrink, or shift it.

**Why fixing it made it better:**
Decoupling the panels created two independent zones that each do their own thing without interfering. The left panel handles character selection — dynamic, interactive, constantly changing. The right panel handles the character showcase — stable, cinematic, always centered. The architectural separation mirrors the design intention: two halves of one screen that belong to different visual registers.

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
I told Claude the stroke wasn't appearing and let it diagnose the stacking context problem and switch techniques.

> *"The character name text inside the cards is not showing the stroke — fix it."*

Claude switched to `paint-order: stroke fill` with `-webkit-text-stroke` applied directly on the element — no z-index, no pseudo-element needed.

**What I decided after all iterations:**
After testing: white stroke → black stroke → 2px → 0.5px → I removed the stroke system entirely.

**How I fixed it (final):**
I gave a clean, sweeping instruction to remove every trace of the stroke system from the entire codebase — not just one element but all of them at once.

> *"Remove all text outlines and strokes from every text element on the entire page."*

Plain white text on pixel art backgrounds needed no stroke.

**Why fixing it made it better:**
Removing the stroke made the text feel lighter and more intentional. The pixel art backgrounds have enough visual richness — adding a stroke on top created visual noise rather than legibility. Clean white text reads clearly against the backgrounds without competing with them. The simplification also made the CSS cleaner and easier to maintain going forward. Sometimes the right design decision is to remove something entirely.

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
I provided four new exact hex values — one per character — that I had chosen to work specifically against the pixel art backgrounds. The prompt gave Claude nothing to interpret; the exact values replaced the old ones directly.

> *"Update the text colors and START button color for each character: Steve #10517B, Gurchen #436348, Gerald #142341, Barry #295A57."*

I replaced all four with darker, more muted tones that ground the text against the lighter, more complex pixel art imagery.

**Why fixing it made it better:**
The darker palette made text feel like it belongs inside each character's world rather than floating over it. Steve's deep ocean blue reads naturally against a beach sky. Gurchen's forest green sits inside the swamp. Gerald's dark navy disappears into the space backdrop. Barry's dark teal matches the river's depth. The text stopped competing with the artwork and started complementing it.

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
I gave Claude a comprehensive list of every text element that needed to update — being explicit and exhaustive so nothing would be missed again. The prompt made the scope of the change undeniable.

> *"Apply character colors to ALL of the following when a character is selected: title and subheader text, selected character card name text, all stats text (Age, Favorite Food, Favorite Place, Catchphrase, Strength, Ability labels and values), START button background color, stat bar fill color. Also apply the same character color to the transition screen: character name text, GET READY text."*

Implemented by replacing `--text-gradient` with a unified `--char-color` CSS custom property, with `white` as the fallback when no character is selected.

**Why fixing it made it better:**
Full character color theming transformed the selection from a background-and-border change into a total screen shift. When Steve is selected, the beach background loads, the border glows sky blue, and every line of text on screen turns his deep ocean blue. The screen belongs to him entirely. The character's color became the visual language of the whole interface in that moment — not just a highlight, but a system.

---

## Record 9 — GET READY Text Ignored Character Color: CSS Class Override

**Date:** 2026-04-07

**What I wanted:**
The GET READY! text on the transition screen should use the selected character's color — consistent with every other text element on the screen when a character is selected.

**What AI made:**
The transition screen's `<h1>` (character name) correctly showed character color. But the GET READY! `<p>` element used the `.get-ready` CSS class, which had `-webkit-text-fill-color: white` hardcoded. The character color variable was never passed to that element, so the CSS class's white override won.

**Why AI went wrong:**
Coding issue — CSS specificity and cascade order. The `.get-ready` class was setting `-webkit-text-fill-color: white` directly, which takes precedence over a CSS variable fallback when the variable is not set on that specific element. Claude wired the `h1` correctly but missed that the `<p>` used a hardcoded class override rather than the variable system.

**How I fixed it:**
I pointed out exactly which element was broken and what it should be doing instead — giving Claude a clear, targeted problem with an implied solution based on how the rest of the system worked.

> *"Fix the GET READY text on the transition screen — it should use the character color, not white."*

Added `'--char-color': textColor` to the GET READY `<p>` element's inline style, and updated the `.get-ready` CSS class to use `var(--char-color, white)` instead of a hardcoded white.

**Why fixing it made it better:**
The transition screen now feels completely unified. Character name and GET READY! both appear in the same character color — the whole overlay belongs to that character's palette. Before the fix, the white GET READY! text felt disconnected from the name above it. After the fix, the transition screen reads as a single, coherent designed moment rather than a mix of hardcoded and dynamic styles.

---

## Record 10 — Card Name Color Wrong After Initial Implementation

**Date:** 2026-04-07

**What I wanted:**
Card name text should be white on unselected cards, and switch to the character's border color (lighter pastel: `#7dd3fc`, `#86efac`, `#fde047`, `#fdba74`) when that card is selected.

**What AI made (attempt 1):**
Claude set the card name to always show `color.border` regardless of selection state. Every card name was colored at all times — not just the selected one.

**Why AI went wrong (attempt 1):**
Prompt was partially vague. I said the card name should "match the border color" without specifying that this should only apply when selected. Claude applied the color universally.

**How I fixed it (attempt 1):**
I rewrote the instruction to explicitly define both states — selected and unselected — leaving no room for interpretation.

> *"When a card is NOT selected: card name text should be white. When a card IS selected: card name text should change to that character's color."*

**What AI made (attempt 2):**
Claude applied `isSelected ? color.border : undefined` — correct in principle, but the CSS class `.card-name` was using the shared `--char-color` variable, which could inherit from a parent element.

**How I fixed it (final):**
Scoped the card name to its own dedicated CSS variable `--card-border-color`, completely isolated from the `--char-color` system. `.card-name` only responds to `--card-border-color` — no bleed from any other color system.

**Why fixing it made it better:**
The two-state card name behavior makes selection feel immediate and readable. Unselected cards show clean white names — neutral, equal, waiting. The selected card's name lights up in its character color — sky blue for Steve, mint for Gurchen, yellow for Gerald, peach for Barry. The color shift is a clear visual signal of which character is active without needing any other indicator. It also reads better against the full-bleed card artwork than the darker `color.text` values would have.

---

## Record 11 — CSS Gradient Borders: AI Used Invalid CSS Syntax

**Date:** 2026-04-07

**What I wanted:**
A gradient border on the character cards — `linear-gradient(to bottom, #51A0C8, #6CC2EE, #B3E5FF)` — with rounded corners preserved.

**What AI made:**
Claude set `borderColor` to a gradient string in the inline style. CSS does not support gradient values for `border-color`. The gradient was silently ignored and the border showed as transparent.

**Why AI went wrong:**
Coding issue / hallucination. Claude wrote syntactically plausible-looking code that CSS does not actually support. `border-color: linear-gradient(...)` is not valid CSS and has no effect, but Claude produced it as if it were a valid solution.

**How I fixed it:**
I reported the visible problem — the border wasn't appearing — and asked Claude to find a working solution. This forced it to look for a valid CSS approach rather than defend broken code.

> *"The border color isn't showing — fix it so the gradient border works with the rounded corners."*

The correct approach is the `background-clip` technique:
- `border: 4px solid transparent`
- Two-layer `backgroundImage`: transparent fill layer + gradient border layer
- `backgroundOrigin: 'padding-box, border-box'`
- `backgroundClip: 'padding-box, border-box'`

This renders the gradient in the border zone only while preserving rounded corners. `border-image` (the other option) kills `border-radius` entirely.

**Why fixing it made it better:**
The gradient border gives each unselected card a soft, unified blue-to-white glow that reads as a consistent default state — all four cards belong to the same game before any is selected. The gradient also subtly references the beach/sky palette of the game's overall aesthetic. Once a character is selected, the border switches to that character's solid `color.border` — the gradient disappears and the card takes on its unique identity. The two border states work together to communicate the idle-vs-selected difference clearly.

---

## Record 12 — Pseudo-Element Stroke Invisible on Card Names: Stacking Context Bug

**Date:** 2026-04-07

**What I wanted:**
Text stroke visible on the character name inside each card — matching the stroke system on the title and stats text.

**What AI made:**
The `::before` pseudo-element stroke technique (`z-index: -1`) that worked on the title was applied to the card name. On the card, the stroke was completely invisible — the pseudo-element disappeared entirely.

**Why AI went wrong:**
Coding issue — stacking context. The card name sits inside a `<button>` with `position: relative` and `overflow: hidden`. Buttons create their own stacking context. A `z-index: -1` pseudo-element inside a stacking context renders behind that context's background — not behind the text fill. Claude reused a working technique without checking whether the container environment was compatible.

**How I fixed it:**
I reported that the stroke wasn't visible and let Claude diagnose the problem. The fix required switching to an entirely different CSS technique that doesn't depend on z-index at all.

> *"The card name stroke is not visible — fix it."*

Switched to `paint-order: stroke fill` with `-webkit-text-stroke` directly on the element. `paint-order` is a render order instruction — it tells the browser to paint the stroke layer before the fill layer. No pseudo-element, no z-index, no stacking context issues.

**Why fixing it made it better:**
Finding the `paint-order` solution was itself valuable — it's a cleaner implementation than the pseudo-element technique because it applies directly to the text element without needing a duplicate layer. The stroke rendered correctly and consistently across all card states. (The stroke system was later removed entirely in Record 6 — but the stacking context bug had to be solved first to discover that the stroke wasn't the right direction at all.)

---

## Record 13 — CSS `transition: background-image` Doesn't Work: Browser Limitation

**Date:** 2026-04-07

**What I wanted:**
Smooth, animated cross-fades between character background images when hovering or selecting — no harsh snapping between themes.

**What AI made:**
The initial background image swap used direct `background-image` property changes, which cannot be transitioned in CSS. Backgrounds snapped instantly with no fade.

**Why AI went wrong:**
Coding issue / browser limitation. `transition: background-image` is not supported by any browser. Claude attempted a transition that the browser fundamentally cannot perform.

**How I fixed it:**
The existing `BackgroundLayer.jsx` architecture already had the correct solution built in from an earlier session. The fix was recognizing that the transition system didn't need to change — only the content of each layer needed updating from gradient to image.

The stacked `position: absolute; inset: 0` divs, one per theme, each fading via `opacity: 0 → 1` with `transition: opacity 0.7s ease-in-out`, already created a perfect cross-fade. No new prompt was needed — just applying the background images to the existing opacity-fading divs.

**Why fixing it made it better:**
The 0.7s opacity cross-fade between background images is one of the most polished interactions on the screen. Hovering from Steve to Gurchen dissolves the beach into the swamp in real time. The transition is GPU-accelerated and smooth at any frame rate. The architecture that made this possible — stacked divs with opacity — was already in place. Understanding that the structure was correct and only the content needed updating was the key insight.

---

## Record 14 — Git Worktree Branch Conflict: Environment Constraint

**Date:** 2026-04-07

**What I wanted:**
Push completed changes to `origin/main` so they'd deploy to GitHub Pages.

**What AI made:**
Claude attempted to merge the worktree branch into the local `main` branch first. Git rejected it: `fatal: 'main' is already checked out at 'C:/Users/.../Character-Select'`. The main branch was already in use by the primary worktree — you cannot check it out in a second worktree simultaneously.

**Why AI went wrong:**
Coding issue — environment constraint. The standard push workflow (checkout main → merge → push) assumed a single working directory. In a git worktree setup, multiple branches are checked out simultaneously in separate directories. The standard workflow broke because it didn't account for the isolation between worktrees.

**How I fixed it:**
I asked Claude to find a way to push without touching the main branch checkout — forcing it to use a different git mechanism that bypassed the worktree conflict entirely.

> *"Push directly to origin/main without checking out the branch."*

Used the git ref syntax: `git push origin claude/competent-haibt:main`. This pushes the worktree branch directly to the `origin/main` remote ref — no local checkout of `main` required. This became the standard deploy command for the rest of the project.

**Why fixing it made it better:**
Finding the direct push syntax `source:destination` unlocked a reliable, repeatable deployment workflow that worked cleanly within the worktree environment every single time. Rather than working around the constraint, the fix turned it into a non-issue. Every subsequent deploy was one command with no git conflicts, no branch switching, no risk of overwriting the wrong state.

---

## Record 15 — Pixel Art Images Rendered Blurry: Browser Scaling Behavior

**Date:** 2026-04-07

**What I wanted:**
Sharp, crisp pixel art for both character card portraits and full-screen background images. Pixel art is defined by its hard edges and visible pixel grid. Blurry pixel art defeats the entire aesthetic.

**What AI made:**
Images appeared blurry at display scale. They were correctly loaded and positioned — the blurriness was a browser rendering behavior, not a file or placement problem.

**Why AI went wrong:**
Coding issue — browser default behavior. Browsers apply bilinear filtering to all scaled images by default. For photographs this creates smooth scaling. For pixel art it destroys the hard pixel edges. Claude placed the images without specifying a rendering mode that would preserve pixel-art crispness.

**How I fixed it:**
I identified the exact CSS property that would solve the problem and named it directly, telling Claude both what was wrong and exactly how to fix it.

> *"The character cards are blurry — can you fix it using image-rendering: pixelated?"*
> *"The background is also blurry — apply the same fix."*

Applied `imageRendering: 'pixelated'` to both the `<img>` tags in `CharacterCard.jsx` and the background `<div>` elements in `BackgroundLayer.jsx`. The property works on CSS `background-image` divs as well as `<img>` elements.

**Why fixing it made it better:**
`image-rendering: pixelated` is the difference between pixel art and a blurry mess. Nearest-neighbor scaling preserves every hard edge — each pixel maps to a clean, sharp block at any screen size. After the fix, the character portraits looked exactly as the artist drew them, and the background environments read as intentional pixel art worlds rather than upscaled photographs. The crispness of the pixel grid is the entire visual language of this project — without it, the Design Intent collapses.

---

## Record 16 — Claude Code Accumulated Conflicting Patches: Required Full Rebuild

**Date:** 2026-04-06

**What I wanted:**
A stable, polished character select screen where fixing one thing didn't break another. A layout where the kart was centered, the stats were in the right place, the card grid didn't shift, and text sizes were consistent.

**What AI made:**
After many sessions of incremental fixes, Claude Code's output had deteriorated to the point where every correction created a new problem. The kart would get repositioned but clip off-screen. The stats would move up but overlap the title. The text sizes would be corrected but the kart container would lose its background or change size unexpectedly. Fixing the card grid shift would reintroduce kart clipping. The layout was a stack of conflicting CSS rules that Claude Code could no longer resolve cleanly.

**Why AI went wrong:**
Claude Code did not follow directions cumulatively. Each session Claude Code was given a new instruction on top of the previous ones, but the underlying CSS from earlier sessions was still in the files. Newer rules conflicted with older rules. Claude Code kept patching without cleaning up the conflicts, so the codebase accumulated contradictions it couldn't resolve. This is a structural limitation of iterative prompting without a full-context architectural view.

**How I fixed it:**
I used Claude chat to diagnose the problem and write a comprehensive rebuild spec. Claude chat explicitly said: *"at this point Claude Code has accumulated too many conflicting instructions and is struggling to fix it cleanly. I'd recommend starting fresh."*

I gave Claude Code the full spec as a single prompt, telling it to delete the old CSS and rebuild from scratch — not patch, but rewrite. The spec specified exact `position: fixed` values for both panels, fixed-height title container with `white-space: nowrap`, kart container with `flex-shrink: 0`, all character colors, stat values, and animation keyframes in one coherent document.

**Why fixing it made it better:**
Starting from a clean spec eliminated all the accumulated conflicts in one pass. The rebuilt screen had stable layout, correct positions, and consistent behavior from the first deploy. The full-rebuild approach is always better than patches when the codebase has been contradicted too many times — knowing when to restart rather than keep fixing is itself a skill.

---

## Record 17 — Kart Overflow and Clipping: Multiple Failed Fix Attempts

**Date:** 2026-04-03 → 2026-04-06

**What I wanted:**
The kart image to be fully visible in the right panel — large, centered, no parts cut off.

**What AI made:**
Claude Code repeatedly clipped the kart at the edges of the screen. When I asked Claude Code to make the kart bigger, it would increase the size but forget to set `overflow: visible` on the parent containers. When I asked it to fix the overflow, it would add `overflow: hidden` to the wrong element, making the problem worse. The kart was variously: cut off on the right, cut off at the bottom, hidden behind a solid blue background, floating off-screen entirely, or invisible.

**Why AI went wrong:**
Claude Code did not follow directions precisely across multiple sessions. Each prompt fixed the symptom Claude Code was looking at without checking the surrounding container hierarchy. `overflow: hidden` anywhere in the parent chain clips child elements — Claude Code kept fixing the immediate container but leaving hidden overflow higher up in the tree. It also didn't account for the fact that a `position: absolute` kart inside a `position: fixed` panel with `overflow: hidden` will always clip.

**How I fixed it:**
I used Claude chat to generate progressively more specific fix prompts. The key prompt that resolved the core issue:

> *"Set overflow: visible on the right panel and all its parent containers. Add padding: 20px 40px 20px 20px to the right panel so the kart has breathing room on all sides. Make sure the kart image has object-fit: contain so it scales down proportionally instead of getting cropped."*

The final architectural fix was the fixed-size kart container (`position: relative; width: 420px; height: 240px; flex-shrink: 0; overflow: visible`) — by giving the container a fixed size, the kart image could be `position: absolute` inside it without affecting or being clipped by the flex layout.

**Why fixing it made it better:**
A fully visible kart is non-negotiable — it's the centerpiece of the character selection moment. The fixed-size container approach solved the problem permanently: the kart can be any size inside its container without the container growing, shrinking, or clipping it. `flex-shrink: 0` prevents the flex layout from squeezing it when other elements are present.

---

## Record 18 — Stats Panel Overlapping Title: Absolute Positioning Without Offset

**Date:** 2026-04-06

**What I wanted:**
The character stats section (Age, Favorite Food, Favorite Place, Catchphrase) and the stat bars to appear in the right panel below the title and subheader — not overlapping them.

**What AI made:**
Claude Code placed the stats block using `position: absolute` from the top of the right panel without accounting for the height of the title and subheader. The stats appeared directly over the title text, making both unreadable. Every attempt to push it down created a new conflict — pushing it down too far hid it behind the kart, or pushing the kart down clipped it at the bottom.

**Why AI went wrong:**
Claude Code did not follow the layout intent. When using `position: absolute`, elements are placed relative to their nearest positioned ancestor — in this case the full-screen panel starting at `top: 0`. Claude Code set `top: 0` or a small value without subtracting the height of the title area (approximately 80–150px). It also did not flag that the title and the stats block were in different panels and couldn't directly affect each other's position.

**How I fixed it:**
I used Claude chat to identify the root cause and generate the correct fix prompt:

> *"The character stats panel in the right side is overlapping the title and sitting too high up. Fix the positioning — the right panel content should begin at least 150px from the top of the screen to clear the title and subheader. Use padding-top: 150px or top: 150px on the right panel content container to push everything down enough to clear the title."*

Claude chat diagnosed it clearly: *"The root cause is that absolute positioned elements ignore other elements around them — so the fix is just telling it exactly how far from the top to start."*

**Why fixing it made it better:**
Setting an explicit top offset gave the stats section a stable starting position that always clears the title regardless of how long the character name is or how the subheader wraps. The fix also established a clear spatial zone for the right panel — top area for stats, middle for bars, lower half for kart — which made the layout legible as a hierarchy.

---

## Record 19 — GitHub Pages Deployment Queue Stuck: Workflow Blocked

**Date:** 2026-04-06

**What I wanted:**
Changes pushed to GitHub to deploy to the live site within the normal ~1 minute turnaround.

**What AI made:**
After pushing changes, the GitHub Actions workflow showed "waiting" for over 10 minutes with no deployment. The site was not updating.

**Why AI went wrong:**
This was an environment/infrastructure issue, not a code issue. GitHub Pages has a deployment queue — if multiple workflows are triggered in quick succession (from rapid pushes during a debugging session), earlier deployments block newer ones. The workflow was queued behind older stuck deployments that were not completing.

**How I fixed it:**
Claude chat explained the cause and provided the fix steps:

> Go to your GitHub repo → Actions tab → find all workflows showing "in progress" or "queued" → cancel ALL of them except the most recent one → the latest will start running automatically.

As a backup: go to repo Settings → Pages → change the branch and save → change it back and save to reset the deployment pipeline.

**Why fixing it made it better:**
Understanding that the queue issue was caused by rapid pushes — not broken code — prevented a long spiral of re-pushing changes to "fix" a deployment that was already correct. Cancelling the old queued workflows cleared the pipeline immediately. Going forward, waiting for one deployment to complete before pushing the next change prevents this entirely.

---

## Record 20 — Card Grid Shifting on Character Click: Identified via Claude Chat

**Date:** 2026-04-01 → 2026-04-05

**What I wanted:**
The character card grid to stay completely still when a character is selected — no jumping, no shifting, no jitter.

**What AI made:**
Every time a character card was clicked, the entire grid visibly jumped position. Claude Code's first response was to adjust padding and margins around the title to visually compensate for the movement. This did not fix the problem — the grid still shifted.

**Why AI went wrong:**
Claude Code treated it as a visual problem when it was an architectural one. The real cause — identified via Claude chat — was layout reflow: the title text switching from "SELECT YOUR RACER" (long) to "STEVE" (short) caused the browser to recalculate the width of the title container, which then pushed the card grid. Claude chat diagnosed this specifically:

> *"The grid shift is caused by the title text changing length (wrapping on some screens) and pushing the layout. The fix is to give the title a fixed height AND use absolute positioning for the right panel so it's completely independent of the flex layout."*

Claude Code had seen the cards moving and tried to stop the movement with spacing adjustments — a symptomatic fix that never addressed the reflow.

**How I fixed it:**
Claude chat generated the correct structural prompt:

> *"Give the title container a fixed height (e.g. height: 80px) so when the text changes between 'SELECT YOUR RACER' and a character name it never pushes anything below it. Add white-space: nowrap to the title so it never wraps to a second line. Change the right panel to position: absolute; top: 0; right: 0; width: 50%; height: 100% — this way the right panel is completely detached from the left side's flow and can never be pushed or shifted by title changes or card selections."*

**Why fixing it made it better:**
A stable card grid is the foundation of the selection interaction. Every click on a card must feel intentional and grounded — a grid that jumps on click feels broken, not polished. The fixed-height title and decoupled right panel solved the problem structurally. No amount of padding adjustment could have fixed it — only removing the coupling between the title width and the grid position worked.

---

## Record 21 — Background Too Dark: Needed Explicit Overlay Instructions

**Date:** 2026-04-07

**What I wanted:**
The pixel art background images to read as bright, soft, and light — consistent with the kawaii pastel tone of the project.

**What AI made:**
When the background images were first placed, the pixel art felt visually heavy against the UI elements. Claude did not add any overlay or lightening treatment by default.

**Why AI went wrong:**
Prompt omission — I hadn't explicitly specified a lightening overlay when first directing the background images. Claude placed the images correctly but with no modifier, leaving the darker pixel art tones untouched.

**How I fixed it:**
I asked Claude chat how to lighten the backgrounds using transparency. Claude chat provided the technique and the exact prompt:

> *"Add a white overlay on top of the background image to make it appear lighter: use a fixed overlay div with background: rgba(255,255,255,0.5). Start with 0.5 and adjust to taste."*

Implemented as a separate `position: absolute; inset: 0` div on top of the background image layer in each relevant screen component. The `BackgroundLayer.jsx` used 0 (no overlay) — each character's background is vivid. The TitleScreen and TransitionScreen each used `rgba(255,255,255,0.3)`.

**Why fixing it made it better:**
The overlay system gave me fine control over how vivid each background appears in each context. The character select screen backgrounds are full-strength — immersive. The title screen background is gently softened. The precise level of lightening per screen is a deliberate atmospheric choice, not a technical default.

---

## Record 22 — GET READY Text: Duplicate Copy and Broken Outline

**Date:** 2026-04-07

**What I wanted:**
Clean, centered GET READY! text on the transition screen with the same outline style as the rest of the text system.

**What AI made (attempt 1):**
Claude added an outline using the `::before` pseudo-element technique. The result: two copies of GET READY! appeared on screen — one centered (the actual element) and one in the upper-left corner (the pseudo-element rendering incorrectly). The outline was not visible on either copy.

**Why AI went wrong (attempt 1):**
Coding issue — the `::before` pseudo-element with `content: attr(data-text)` rendered as its own block-level element, appearing in the layout flow instead of overlaying the original text. Without `position: absolute` scoped correctly, both the original and pseudo copy were visible as siblings.

**How I fixed it (attempt 1):**
I reported the exact visual problem — two copies, broken outline — and told Claude to fix it.

> *"Fix the GET READY text on the transition screen — there are two GET READY elements showing and the outline is broken."*

Claude attempted to fix the pseudo-element approach but the duplicate persisted.

**What AI made (attempt 2):**
The pseudo-element was still creating a visible duplicate. Position corrections hadn't eliminated the extra copy.

**How I fixed it (final):**
I directed Claude to abandon the pseudo-element approach entirely and rewrite GET READY from scratch using `text-shadow` for the outline effect — a completely different technique with no duplicate risk.

> *"Remove the duplicate GET READY text. Fix the GET READY text styling completely — rewrite it from scratch. Use text-shadow for the outline instead of pseudo elements."*

The text-shadow approach (`-2px` and `+2px` offsets in all 8 directions) produces a clean visual outline with no duplicate content, no stacking context issues, and no z-index dependency.

**Why fixing it made it better:**
`text-shadow` is fundamentally more reliable for text outlines in complex React component trees than pseudo-elements. It applies directly to the text node, can't be buried by stacking contexts, and never creates layout artifacts. The text outline was later removed entirely (along with all outlines across the project) — but the clean rewrite first was necessary to confirm the technique before deciding to remove all outlines.

---

## Record 23 — Transition Screen Background Appeared More Washed Out Than Character Select

**Date:** 2026-04-07

**What I wanted:**
The same character background that's visible during character selection to continue feeling the same when the transition screen plays — a seamless visual hand-off from select screen to START animation.

**What AI made:**
The transition screen used the character's background image but added a `rgba(255,255,255,0.3)` white overlay on top of it. The `BackgroundLayer.jsx` used in the character select screen had no white overlay. The result: clicking START made the background suddenly look 30% more washed out and lighter — a noticeable visual discontinuity.

**Why AI went wrong:**
The overlay was copy-pasted from the TitleScreen component where it made sense (lightening the default background for legibility). Applied to the TransitionScreen it created an unintended inconsistency — the same image looked different across screens without any deliberate reason.

**How I fixed it:**
I noticed the visual difference and asked Claude to investigate the cause.

> *"Can you check why the transparency is different for the transition screen?"*

Claude identified the `rgba(255,255,255,0.3)` overlay in TransitionScreen and the absence of any overlay in BackgroundLayer. Removing the overlay from TransitionScreen matched the two screens exactly.

**Why fixing it made it better:**
The transition from character select to the START animation should feel like the same world, not a cut to a different filter. Matching the background rendering between the two screens makes the transition feel seamless — the background is already there, the kart just drives across it. The visual continuity reinforces the sense that clicking START places you inside the world you've already been looking at.

---

## Record 24 — Kart Label Not Responding to Character Color System

**Date:** 2026-04-08

**What I wanted:**
All text elements — including the kart label ("[Name]'S KART") — to change color when hovering or selecting a character, consistent with the title, subheader, and stats.

**What AI made:**
The kart label used the `.gradient-title` CSS class but had no `--char-color` variable passed to it. It always rendered white regardless of which character was hovered or selected.

**Why AI went wrong:**
Incomplete implementation. When the `--char-color` system was built for the other text elements, `KartDisplay` was never updated to accept or pass the color variable. Claude wired the major text elements but missed the kart label entirely.

**How I fixed it:**
I pointed out the inconsistency and asked Claude to connect the kart label to the same system.

> *"Make the kart label color based on the character's color — same effect as the title, subheader, and stats on hover and select."*

Added a `charColor` prop to `KartDisplay` and passed `displayColor` from `GameMenu` — the same value already driving every other text element.

**Why fixing it made it better:**
Every text element now responds to the character color system at the same time. Hovering Steve turns the title, subheader, stats, kart label, and card name all to his color simultaneously — the whole screen shifts as one unified action, not a patchwork of independent elements.

---

## Record 25 — Confetti Had No Character Identity

**Date:** 2026-04-08

**What I wanted:**
The transition screen confetti to feel like it belonged to the selected character's world — not generic party confetti.

**What AI made:**
80 randomly colored rectangles falling from the top. No connection to any character theme or visual identity.

**Why AI went wrong:**
The initial confetti implementation was a standalone feature with its own hardcoded color palette. Claude built it functionally but in isolation — it had no awareness of the character theme system that already existed in `themes.js`.

**How I fixed it:**
I asked Claude to pull the existing theme emoji floaters into the confetti system.

> *"Add the emojis used per character to the confetti."*

Claude imported `THEMES`, extracted the floater emojis per character theme, and generated 20 emoji confetti pieces alongside the existing rectangles — each emoji sized 18–32px, falling with the same staggered animation.

**Why fixing it made it better:**
The confetti now tells you which character you picked without any text. Gerald's transition rains down 🌙 🚀 ☄️ — you feel the space theme in the moment. Steve's rains 🐦 🌊 ☀️ — pure beach. The transition screen went from generic celebration to a character-specific moment.

---

*Last updated: 2026-04-08*
*Update this document whenever a new session ends.*
