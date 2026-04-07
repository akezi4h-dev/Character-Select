# AI Direction Log
**Project:** AI 201 P1 — Hero Faction Screen
**Student:** Art Director
**Tool:** Claude (claude-sonnet-4-6, Claude Code CLI)
**Due:** 2026-04-08

---

> This log documents moments where I (the Art Director) gave Claude a direction, constraint, or correction that changed the output. Each entry records what AI produced on its own, what I chose instead, and why that decision was mine to make.

---

## Entry 1 — Retro Pixel Restyle Rejected

**Date:** 2026-04-01
**Commit reference:** `ff74c9f` (reverted by `570547b`)

**What AI gave me:**
When I asked for visual polish and larger character cards, Claude interpreted the "retro pixel art" aesthetic too literally. It restyled every component with sharp corners, hard pixel-drop shadows, angular button shapes, and an overall aesthetic that looked like a classic 8-bit game UI. Everything was harsh and blocky — the cards, the navigation buttons, the layout borders.

**What I chose instead:**
I told Claude to revert everything except the Press Start 2P font. I wanted the *feeling* of retro without the visual harshness. The aesthetic I had defined in my Design Intent was kawaii pastel — soft, round, cute, bubbly — inspired by Mario Kart × Sanrio, not Atari. The font was the right retro touch; the pixel shadows and sharp corners broke the softness I was going for.

**Why this was my decision:**
The Design Intent I wrote describes a specific visual register. Claude defaulted to a common association between "pixel font = full retro aesthetic." I had to draw the line between typographic nostalgia (keep) and harsh visual language (cut). That distinction was a creative judgment only I could make because it lives in the design intent document I wrote before we started building.

---

## Entry 2 — Character Colors Overridden with Exact Hex Values

**Date:** 2026-04-02

**What AI gave me:**
Claude's initial color assignments for the characters used a generic pastel palette — it made decisions like assigning soft teal to Steve, muted green to Gurchen, etc. When the per-character theme system was built, those colors were carried forward into text, glows, and borders without input from me.

**What I chose instead:**
I gave Claude exact hex values for every character:
- Steve: `#6286FE` (punchy blue-purple)
- Gurchen: `#6BF26B` (vivid lime green)
- Gerald: `#FFDA69` (warm golden yellow)
- Barry: `#FF8651` (bright coral orange)
- Default/title/START: `#6CC2EE` (sky blue)

I also specified that the title text and START button must dynamically update to the selected character's color.

**Why this was my decision:**
The colors I chose were not random. Each one reflects the character's personality and their associated theme (Beach/Swamp/Jungle/River). Steve's blue is vibrant and surfer-coded. Gurchen's lime is froggy and bright. Gerald's yellow is warm and mischievous. Barry's orange is cozy and otter-like. These were intentional visual characterizations, not palette-generated choices. The default sky blue ties the idle screen to the beach/aquatic framing of the overall game aesthetic.

---

## Entry 3 — Kart Layout Completely Redesigned by Direction

**Date:** 2026-04-03 → 2026-04-04

**What AI gave me:**
Claude's initial right panel placed the kart display inside the flex flow of the two-panel layout. The kart started small (~250px), centered inside a constrained box. When I asked for it to be bigger, Claude scaled it up but kept it inside a box container with overflow restrictions, which caused the kart to clip and appear cut off. The panel was still in the document flow, meaning changes to the left column (like the title text changing length) could push or shift it.

**What I chose instead:**
Over two sessions I drove the kart display toward:
1. A 700px emoji kart — dramatically oversized to feel like a hero display, not a thumbnail
2. A `slideInKart` CSS keyframe animation that triggers fresh each time a new character is selected (via `key={character?.id}` React remount trick)
3. A static ellipse shadow under the kart at z-index 0, with the kart at z-index 1
4. The right panel completely removed from flex flow using `position: absolute; top: 0; right: 0; width: 50%; height: 100%` with `overflow: visible` — so the kart can extend beyond its container without clipping

**Why this was my decision:**
The kart is supposed to be the hero moment — the big visual payoff when you select a character. Claude's instinct was to fit it neatly inside a UI box. I wanted it to feel massive and cinematic, like the showcase displays in Mario Kart character select screens. Every specific measurement (700px, ellipse 340×35px shadow, slide-in animation) and the layout architecture change (absolute positioning to decouple from flex flow) came from my direction. Claude implemented it but would not have arrived there on its own.

---

## Entry 4 — Title Behavior Locked Down to Prevent Layout Shift

**Date:** 2026-04-04 → 2026-04-05

**What AI gave me:**
Claude implemented the dynamic title — showing "SELECT YOUR RACER" by default and switching to the character's name when one is selected. The title was placed in normal document flow without a fixed height container. This caused the card grid to visibly shift position every time a character was selected, because short names like "STEVE" and long labels like "SELECT YOUR RACER" have different rendered widths.

**What I chose instead:**
I identified the layout shift as a problem and specified the fix: give the title a fixed-height container (`height: 60px`) with `white-space: nowrap` so the text never wraps and the container never changes size. The title content changes but its bounding box stays constant, keeping everything below it locked in place.

**Why this was my decision:**
This was a UI feel issue — the jitter when clicking cards broke the polish of the interaction. Claude had implemented the dynamic title as requested but hadn't anticipated the reflow side effect. Diagnosing it as a layout shift problem (vs. an animation problem, or a font problem) and specifying `white-space: nowrap` + fixed height as the solution was my direction. The solution required understanding how browser layout reflow works in relation to the surrounding flex structure.

---

## Entry 5 — Visual Identity: Kart Display Has No Box

**Date:** 2026-04-03

**What AI gave me:**
When the kart preview was first designed, Claude placed it inside a visible container panel — a card-like box on the right half of the screen with padding, rounded corners, and some background tint to frame the character preview. This is the conventional UI pattern for a "detail panel."

**What I chose instead:**
I specified that the kart display should have no box, no background, no border — nothing that frames or contains it visually. The character should appear to float in the space of the right half of the screen, against the live background, with only the shadow ellipse beneath it grounding it.

**Why this was my decision:**
Boxes make interfaces feel safe and contained. I wanted the selected character to feel like they're *in the world* of the game, not displayed inside a UI chrome element. Removing the box was a deliberate choice to push the design toward atmosphere over interface convention. That kind of "absence as a decision" is something a design eye catches; Claude's default is always to frame content.

---

---

## Entry 6 — Emoji Karts Replaced with Real PNG Artwork (4/7)

**Date:** 2026-04-07

**What AI gave me:**
The kart display used a 640px `🏎️` emoji as the placeholder kart for all four characters. Claude had sized and animated it correctly, but all four characters showed the identical emoji.

**What I chose instead:**
I provided four unique pixel art PNG kart images (`steve-kart.png`, `gurchen-kart.png`, `gerald-kart.png`, `barry-kart.png`) and directed Claude to wire each character to their own kart image. Claude updated `characters.js` to add a `kartImage` field per character and replaced the emoji span in `KartDisplay.jsx` with an `<img>` tag.

**Why this was my decision:**
Each character needed their own visual identity in the kart display. The generic emoji was a functional placeholder — the actual artwork is original pixel art created for this project. The decision to make the switch and provide the specific file naming convention was mine.

---

## Entry 7 — Character Cards: Full-Bleed Image Over Separate Avatar (4/7)

**Date:** 2026-04-07

**What AI gave me:**
When I asked to replace card emoji with real images, Claude placed them in a `w-24 h-24` (96×96px) avatar container inside the existing card with padding. When I asked for bigger images, Claude doubled the entire card size — cards went from 192×224px to 384×448px.

**What I chose instead:**
I immediately reverted the doubled card size. Then I directed Claude to make the image fill the entire card edge to edge using `position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover` — with the character name overlaid at the bottom using `position: absolute; bottom: 8px`.

**Why this was my decision:**
Doubling the card size broke the 2×2 grid. Full-bleed was the right solution — it gives the artwork maximum presence within the fixed card frame and turns each card into a mini portrait, which matches the "collectible character" aesthetic from the Design Intent. The overlay name treatment was also my call — it's common in trading card and game UI design.

---

## Entry 8 — Text Stroke System: Multiple Iterations → Removed Entirely (4/7)

**Date:** 2026-04-07

**What AI gave me:**
Claude implemented a `::before` pseudo-element stroke system using `content: attr(data-text)` to render a stroked copy of each text element behind the gradient fill. Initial stroke: 4px white. Claude also used `paint-order: stroke fill` with `-webkit-text-stroke` for card names where the pseudo-element caused z-index conflicts.

**What I chose instead:**
I iterated through: white stroke → black stroke → 2px → 0.5px → **removed entirely**. Final direction: plain white fill, no stroke on any text element.

**Why this was my decision:**
The stroke system added visual noise without improving readability. With pixel art backgrounds and plain white text, the strokes felt fussy. Each reduction (color change, size reduction, then full removal) was a deliberate simplification. The final state — clean white text, no outlines — reads best across all four background themes and the default state. Removing decorative complexity is a design decision.

---

## Entry 9 — Character Text Colors: Saturated → Muted Dark Palette (4/7)

**Date:** 2026-04-07

**What AI gave me:**
The character color system used vibrant, saturated hex values: Steve `#6286FE`, Gurchen `#6BF26B`, Gerald `#FFDA69`, Barry `#FF8651`. These appeared on all text, the START button, and stat bars.

**What I chose instead:**
Replaced all four with darker, more muted tones:
- Steve: `#10517B` (deep ocean blue)
- Gurchen: `#436348` (forest green)
- Gerald: `#142341` (dark navy)
- Barry: `#295A57` (dark teal)

**Why this was my decision:**
The saturated colors were designed against the original gradient backgrounds. Once detailed pixel art backgrounds were introduced, those bright colors created visual conflict. The darker tones ground the text against the lighter, more complex background imagery and feel more deliberately paired with each character's world.

---

## Entry 10 — Background Images: Procedural Gradients Replaced with Pixel Art (4/7)

**Date:** 2026-04-07

**What AI gave me:**
Each character theme used a CSS linear gradient (e.g., beach: `#7dd3fc → #bae6fd → #fef3c7`), with floating emoji "floaters" to add atmosphere. The default state was also a gradient. Transitions used stacked opacity-fading divs.

**What I chose instead:**
I provided full-screen pixel art PNG background images — one per character theme plus a default. Directed Claude to wire each theme's `image` field in `themes.js` and update `BackgroundLayer.jsx` to render `background-image: url(...)` with `background-size: cover` when an image is available, falling back to the gradient otherwise.

**Why this was my decision:**
The CSS gradient backgrounds were functional placeholders. The pixel art backgrounds are original artwork that establishes the visual world of each character. The decision to commission and provide the artwork — and the technical decision to keep the existing opacity-fade transition system rather than replacing it — were both mine.

---

## Entry 11 — Transition Screen: Design and Animation Direction (4/7)

**Date:** 2026-04-07

**What AI gave me:**
After I specified the transition screen concept, Claude implemented it with the kart driving left to right. Default duration was 2.5 seconds.

**What I chose instead:**
- Changed kart direction: right to left (more natural for a racing departure feel)
- Adjusted duration: tested 5s → settled on 3s
- Positioned kart lower on screen (`top: 400px`) to clear the title text area
- GET READY! text in white with no stroke (matching the simplified text system)

**Why this was my decision:**
Every timing and directional choice in an animation is a feel decision. Right-to-left reads as "driving away" which suited the "GET READY" moment better. 3 seconds is long enough to register the character and feel the anticipation without overstaying its welcome. These micro-decisions define the emotional pacing of the transition.

---

*Last updated: 2026-04-07*
*Update this log whenever a new session ends.*
