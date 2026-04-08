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
When I was expermimenting, because I didn't know 100% the font/ I asked for visual polish based on the design intent and larger character cards, Claude interpreted the "retro pixel art" aesthetic too literally. It restyled every component with sharp corners, hard pixel drop shadows, angular button shapes, and an overall aesthetic that looked like a classic 8-bit game UI. Everything was harsh and blocky the cards, the navigation buttons, the layout borders.

**What I chose instead:**
I told Claude to revert everything except the Press Start 2P font. I wanted the *feeling* of retro without the visual harshness. The aesthetic I had defined in my Design Intent was kawaii pastel soft, round, cute, bubbly inspired by Mario Kart × Sanrio, not Atari. The font was the right retro touch; the pixel shadows and sharp corners broke the softness I was going for.

**Why this was my decision:**
The Design Intent I wrote describes a specific visual register. Claude defaulted to a common association between "pixel font = full retro aesthetic." I had to draw the line between typographic nostalgia (keep) and harsh visual language (cut). That distinction was a creative judgment only I could make because it lives in the design intent document I wrote before we started building.

---

## Entry 2 — Character Colors Overridden with Exact Hex Values

**Date:** 2026-04-02

**What AI gave me:**
When I was experimenting initially, I didn't have an exact hex code, but the colors I wanted to go for. Claude's initial color assignments for the characters used a generic pastel palette it made decisions like assigning soft teal to Steve, muted green to Gurchen, etc. When the per character theme system was built, those colors were carried forward into text, glows, and borders without input from me.

**What I chose instead:**
I gave Claude exact hex values for every character:
- Steve: `#6286FE` (punchy blue-purple)
- Gurchen: `#6BF26B` (vivid lime green)
- Gerald: `#FFDA69` (warm golden yellow)
- Barry: `#FF8651` (bright coral orange)
- Default/title/START: `#6CC2EE` (sky blue)

I also specified that the title text and START button must dynamically update to the selected character's color.

**Why this was my decision:**
The colors I chose were not random. Each one reflects the character's personality and their associated theme (Beach/Swamp/Jungle/River). Steve's blue is vibrant and surfer coded. Gurchen's lime is froggy and bright. Gerald's yellow is warm and mischievous. Barry's orange is cozy and otter-like. These were intentional visual characterizations, not palette-generated choices. The default sky blue ties the idle screen to the beach/aquatic framing of the overall game aesthetic.

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
The kart is supposed to be the hero moment the big visual payoff when you select a character. Claude's instinct was to fit it neatly inside a UI box. I wanted it to feel massive and cinematic, like the showcase displays in Mario Kart character select screens. Every specific measurement 700px, ellipse 340×35px shadow, slide-in animation and the layout architecture change absolute positioning to decouple from flex flow came from my direction. Claude implemented it but would not have arrived there on its own.

---

## Entry 4 — Title Behavior Locked Down to Prevent Layout Shift

**Date:** 2026-04-04 → 2026-04-05

**What AI gave me:**
Claude implemented the dynamic title showing "SELECT YOUR RACER" by default and switching to the character's name when one is selected. The title was placed in normal document flow without a fixed height container. This caused the card grid to visibly shift position every time a character was selected, because short names like "STEVE" and long labels like "SELECT YOUR RACER" have different rendered widths.

**What I chose instead:**
I identified the layout shift as a problem and specified the fix: give the title a fixed-height container (`height: 60px`) with `white-space: nowrap` so the text never wraps and the container never changes size. The title content changes but its bounding box stays constant, keeping everything below it locked in place.

**Why this was my decision:**
This was a UI feel issue the jitter when clicking cards broke the polish of the interaction. Claude had implemented the dynamic title as requested but hadn't anticipated the reflow side effect. Diagnosing it as a layout shift problem (vs. an animation problem, or a font problem) and specifying `white-space: nowrap` + fixed height as the solution was my direction. The solution required understanding how browser layout reflow works in relation to the surrounding flex structure.

---

## Entry 5 — Visual Identity: Kart Display Has No Box

**Date:** 2026-04-03

**What AI gave me:**
When the kart preview was first designed, Claude placed it inside a visible container panel a card like box on the right half of the screen with padding, rounded corners, and some background tint to frame the character preview. This is the conventional UI pattern for a "detail panel."

**What I chose instead:**
I specified that the kart display should have no box, no background, no border nothing that frames or contains it visually. The character should appear to float in the space of the right half of the screen, against the live background, with only the shadow ellipse beneath it grounding it.

**Why this was my decision:**
Boxes make interfaces feel safe and contained. I wanted the selected character to feel like they're *in the world* of the game, not displayed inside a UI chrome element. Removing the box was a deliberate choice to push the design toward atmosphere over interface convention. That kind of "absence as a decision" is something a design eye catches; Claude's default is always to frame content.

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
Doubling the card size broke the 2×2 grid. Full-bleed was the right solution it gives the artwork maximum presence within the fixed card frame and turns each card into a mini portrait, which matches the "collectible character" aesthetic from the Design Intent. The overlay name treatment was also my call it's common in trading card and game UI design.

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
The CSS gradient backgrounds were functional placeholders. The pixel art backgrounds are original artwork that establishes the visual world of each character. The decision to commission and provide the artwork and the technical decision to keep the existing opacity fade transition system rather than replacing it  were both mine.

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

## Entry 12 — Character Card Portraits: Second Round of Artwork (4/7)

**Date:** 2026-04-07

**What AI gave me:**
The first-round character card images had been placed in the correct slots. The images were functional but not final the art was still being iterated on.

**What I chose instead:**
I provided a second round of pixel art character portraits, fully replacing the previous set. Final character identities: Steve as a white duck/seagull in a blue kart, Gurchen as a green crocodile, Gerald as a monkey in a spacesuit, Barry as an orange platypus. Each image was matched to the correct character by name and overwritten in place.

**Why this was my decision:**
Character visual identity is a creative decision entirely outside Claude's scope. The artwork reflects each character's personality and backstory. The matchinng of image to character — seagull to Steve, croc to Gurchen, monkey to Gerald, platypus to Barry — was my authorship. Claude only handled the file wiring.

---

## Entry 13 — Character Colors Applied to All Text via `--char-color` CSS Variable (4/7)

**Date:** 2026-04-07

**What AI gave me:**
After the text stroke system was removed, all text defaulted to white regardless of which character was selected. The `--text-gradient` CSS variable system that previously drove text color was left inert.

**What I chose instead:**
I specified that when a character is selected, every text element on screen — title, subheader, detail stats (Age, Favorite Food, Favorite Place, Catchphrase), stat bar labels, card name — should shift to that character's `color.text` value. Implemented by replacing `--text-gradient` with a unified `--char-color` CSS custom property passed through inline styles, with `white` as the fallback when no character is selected.

**Why this was my decision:**
The screen needed to feel fully themed to the selected character not just the background and borders, but all readable text. The `--char-color` system was my direction to unify every text element under a single, consistent per-character color switch.

---

## Entry 14 — Card Name Text: White by Default, Border Color When Selected (4/7)

**Date:** 2026-04-07

**What AI gave me:**
After the initial `--char-color` system was applied, card names first showed the character's muted `color.text` values at all times, then were refined to always show the border color, regardless of selection state.

**What I chose instead:**
I specified two distinct states for the card name text:
- **Unselected:** white (same as all unselected text)
- **Selected:** character's `color.border` (the lighter pastel version — sky blue, mint, yellow, peach)

This was isolated from the `--char-color` system using its own `--card-border-color` CSS variable scoped only to `.card-name`.

**Why this was my decision:**
The card names needed lighter, more legible colors against the full-bleed character artwork. The border colors (`#7dd3fc`, `#86efac`, `#fde047`, `#fdba74`) are brighter and more readable over the card images than the dark `color.text` values. The distinction between the two color roles — dark text on backgrounds, light text on cards — was a deliberate legibility call.

---

## Entry 15 — SELECT YOUR RACER Title Color Set to `#51A0C8` (4/7)

**Date:** 2026-04-07

**What AI gave me:**
The default title ("SELECT YOUR RACER") displayed in white. With the `--char-color` fallback set to white, the idle screen had no color distinction in the title.

**What I chose instead:**
`#51A0C8` — a mid-tone sky blue — for the title in its default, unselected state. When a character is selected, the title still switches to that character's `color.text`. The change was scoped to the title element only by defaulting its `--char-color` variable to `#51A0C8` rather than relying on the CSS fallback.

**Why this was my decision:**
The idle screen needed a color presence before any character is selected. `#51A0C8` ties the default state to the beach/aquatic palette of the game's overall aesthetic without competing with the per-character colors that activate on selection.

---

## Entry 16 — Pixel Art Rendering: `image-rendering: pixelated` Applied Site-Wide (4/7)

**Date:** 2026-04-07

**What AI gave me:**
Character card images and background images appeared blurry on screen. The images were correctly sized and placed, but the browser's default bilinear filtering was smoothing the pixel art when scaling, destroying the sharp pixel edges that define the aesthetic.

**What I chose instead:**
I asked claude chat what could be the issue with the blurrines because I wanted the image to be pixalted and high quality it then directed `image-rendering: pixelated` on both the character card `<img>` elements and the background `<div>` elements with `background-image`. This forces nearest-neighbor scaling — pixels stay sharp at any display size.

**Why this was my decision:**
The pixel art aesthetic is foundational to the entire Design Intent. Blurry pixel art is the opposite of the visual language this project is built on. Identifying the rendering issue as a CSS property problem (not an image resolution problem) and specifying the correct fix was my direction. The crispness of the pixel grid is non-negotiable.

---

---

## Entry 17 — Claude Chat Used as a Prompt Intermediary and Coding Advisor (4/1–4/7)

**Date:** 2026-04-01 → 2026-04-07

**What the workflow was:**
Throughout the project I used a separate Claude.ai chat session as a middleman between my design intentions and Claude Code when I was struggling to tell claude what to do after multiple attempts. After these attempts, instead of typing raw instructions directly into Claude Code, I would describe what I wanted to Claude chat often sharing reference images like the AngelKart Stamp Rally screenshot and my design vision on figma Claude chat would translate my vision into specific, technically correct prompts ready to paste into Claude Code.

This created a three-layer process:
1. I had an idea with figjam or saw a reference image I liked
2. I described it (or showed it) to Claude chat
3. Claude chat helped write the Claude Code prompt — including specific CSS, and code snippets
4. I pasted that prompt into Claude Code

**Why this was my decision:**
The decision to use Claude chat as a prompt advisor was mine. Without it, I would have typed vague instructions into Claude Code and gotten unpredictable results. Using Claude chat as a translator let me communicate design intent ("the kart should feel like a hero moment, like in this reference image. I want it to be bigger like 450px) and receive back precise technical language ("set width to 450px, use position: absolute inside a fixed-size container with flex-shrink: 0"). This protected my vision from being lost in translation.

**Specific coding advice Claude chat gave that shaped the project:**

- **CSS variables for layout** — Claude chat suggested defining `--card-size`, `--card-gap`, and `--card-columns` as CSS custom properties so I could tweak one number and have everything update together
- **DOM removal trick for animation retrigger** — Claude chat identified that CSS animations only play once unless the element is removed from and re-added to the DOM; this solved the kart slide-in not replaying on each character select
- **Fixed-size kart container** — Claude chat suggested using a `position: relative; width: 500px; height: 280px; flex-shrink: 0` wrapper so the kart image could be resized without shifting the layout
- **Character color lookup object** — Claude chat suggested storing colors as a JavaScript object `const characterColors = { steve: '#6286FE', ... }` and applying `characterColors[selectedCharacter]` dynamically to both the title and START button
- **Glass morphism stat bars** — Claude chat specified `background: rgba(255,255,255,0.4); backdrop-filter: blur(8px); border: 2px solid rgba(255,255,255,0.7); border-radius: 999px` as the stat bar container style
- **Layered character outfit system** — Claude chat explained how outfit customization works using stacked `position: absolute` PNG layers (base + hat + outfit + accessory), each with `top: 0; left: 0; width: 100%; height: 100%`, swapping `src` per layer on click

---

## Entry 19 — Nav Buttons Removed, Replaced with Stat Bars by Direction (4/6)

**Date:** 2026-04-06

**What I had:**
A row of nav buttons at the top (CHARACTERS, ITEMS, POWER-UPS, KARTS) that I had added earlier. I changed my mind about them — the space was better used for character stat information.

**What I chose instead:**
I directed Claude chat to generate a prompt that removed the nav buttons entirely and replaced that space with two animated stat bars — STRENGTH and ABILITY — styled as glass morphism pill bars with per-character color fills and a fill animation from 0% to their value on selection.

Character stat values I assigned:
- STEVE: Strength 80%, Ability 60%
- GURCHEN: Strength 40%, Ability 90%
- GERALD: Strength 70%, Ability 50%
- BARRY: Strength 60%, Ability 75%

I iterated on the bar style through Claude chat: dark border → white border → dark navy glossy → glass morphism → final style with thicker border matching the card opacity.

**Why this was my decision:**
The nav buttons were a convention (tabs for categories). I replaced them with stats because the character select screen is about knowing who you're picking personality, strengths, and stats make the characters feel real. The specific stat values I assigned to each character reflect their personalities: Gurchen has high ability (he's nimble for a croc), Steve has high strength (surfer power). These were my characterizations.

---

## Entry 20 — Character Detail Stats Added with Real Personal Data (4/6)

**Date:** 2026-04-06

**What I chose:**
I added a character details section to the right panel and populated it with real, personally written character data for each character:

| Character | Age | Favorite Food | Favorite Place | Catchphrase |
|-----------|-----|---------------|----------------|-------------|
| Steve | 1 year | French Fry | Beach | SQWA |
| Gurchen | 5 months | Pizza | Jungle | GRRR |
| Gerald | 1 month | Freeze Dried Bananas | Outer Space | Hmmm |
| Barry | 3 months | Fish | River | I'm not Perry, I'm Barry |

**Why this was my decision:**
Every piece of data in those fields is original character writing. Claude Code and Claude chat never generated this content — I wrote each character's biography. The ages, foods, places, and catchphrases were intentional personality choices: Gerald eats freeze dried bananas because he's a space monkey, Barry's catchphrase references Perry the Platypus as a joke, Steve's SQWA is a seagull noise. This is character authorship, not UI scaffolding.

---

## Entry 21 — CRITTER CUP Title Screen Built and Iterated Through Direction (4/7)

**Date:** 2026-04-07

**What AI gave me:**
After specifying a title screen concept, Claude generated an initial version with the CRITTER CUP text fading in and four individual kart images sliding in from the screen corners (Steve from left, Gurchen from right, Gerald from bottom-left, Barry from bottom-right).

**What I chose instead:**
I iterated through the title screen across multiple passes:
- Added a DevGrid overlay for layout alignment
- Changed the kart animation from corner-sliding to a unified right-to-left drive formation — all four karts driving in from the right side in a row at the bottom, staggered by character
- Adjusted kart size through several values (150px → 250px → 600px → 250px height) before landing on the right scale
- Repositioned the kart group and PLAY button through many specific x/y coordinate passes
- Replaced the Default-Image background with a dedicated pixel art road track image (Title-BG.png)
- Changed the CRITTER CUP color from the default blue gradient to `#353290` (deep indigo) to match the new background

**Why this was my decision:**
The title screen is the first impression of the entire game. Every detail — kart behavior, positions, title scale, background — was iterated against the actual visual result until it felt right. Claude generated functional code but the aesthetic tuning was entirely mine.

---

## Entry 23 — Title and Subheader Preview Character Color on Hover (4/7)

**Date:** 2026-04-07

**What AI gave me:**
The `charColor` variable only updated when a character was selected. Hovering a card previewed the background but title and subheader text stayed at their selected (or default) color no preview of the character's color until a click.

**What I chose instead:**
I specified that hovering a character should also update the title and subheader text to that character's color — not just the background. The color preview should be immediate on hover, not gated by selection.

**Why this was my decision:**
Hover feedback should preview the character's full identity background, border glow, and text color not just the background. The decision that text color should respond to hover (not just click) was a directional choice about how immediate and responsive the interaction should feel.

---

## Entry 24 — CRITTER CUP Title: 1.5x Bigger, Shimmer Gradient (4/7)

**Date:** 2026-04-07

**What AI gave me:**
The CRITTER CUP title was 64px white text with a simple fade-in.

**What I chose instead:**
I specified three changes:
1. Scale the title 1.5× (64px → 96px)
2. Apply the same blue gradient as the default SELECT YOUR RACER text (`#6CC2EE` family), implemented via `background-clip: text` with `-webkit-text-fill-color: transparent`
3. Add a sweeping shimmer animation (`@keyframes shine`) that cycles every 10 seconds

The color was then changed to `#353290` (deep indigo) to match the overall title screen color scheme, with the shimmer gradient built from indigo tones sweeping to white at the midpoint.

**Why this was my decision:**
The shimmer animation adds life to what would otherwise be static text. The 10-second interval feels like a slow breathing pulse rather than a distracting loop. The color choice (`#353290`) and the decision to build the shimmer from that color rather than the default blue were both aesthetic calls made in response to the new title screen background.

---

## Entry 25 — Title Screen Background Replaced with Pixel Art Track (4/7)

**Date:** 2026-04-07

**What AI gave me:**
The title screen used `Default-Image.png` (the default character select background) as its backdrop.

**What I chose instead:**
I replaced it with a dedicated pixel art racing track background (`Title-BG.png`) — a wide road with crosswalk stripes, pixel-art trees, and a blue sky. More thematically appropriate for a kart racing game title screen.

**Why this was my decision:**
The title screen should feel like the entrance to a racing game, not a preview of the character select screen. Using the same background as the default character screen made the two screens feel interchangeable. The track image establishes the racing context before any character is even seen.

---

## Entry 26 — Gerald's START Button Given a Dedicated Color Override (4/7)

**Date:** 2026-04-07

**What AI gave me:**
Gerald's `color.text` value (`#FFFAD9`, very pale yellow) was being applied to the START button background when Gerald was selected. The button was nearly invisible against the light screen.

**What I chose instead:**
I specified `#293964` (dark navy blue) as Gerald's START button color completely different from his text color. Implemented by adding an optional `button` field to the character color object with a fallback to `color.text` for all other characters. Only Gerald has the override.

**Why this was my decision:**
The START button needs to be legible and functional. Gerald's very light text color reads well on the dark space background but is unacceptable as a button background as it was the same color as the moon. The `#293964` navy grounds the button visually and feels like a space-themed dark control element. The decision to solve this per-character rather than globally (which would have changed all other characters' buttons) was a targeted fix.

---

## Entry 27 — Gerald's Floating Emojis Changed to Astronomy Theme (4/7)

**Date:** 2026-04-07

**What AI gave me:**
Gerald's background theme was named "jungle" in `themes.js` — a holdover from an earlier character theme assignment. His floaters were 🍃 🌿 🐦 (jungle/forest). Gerald's actual character theme is outer space.

**What I chose instead:**
I directed the floaters changed to astronomy: 🌙 ⭐ 🪐 🚀 ☄️ ✨ 🌟 — moon, star, planet, rocket, comet, sparkle, and glowing star. Seven floaters instead of five, spread across the screen.

**Why this was my decision:**
Gerald is a space monkey. Every visual element of his theme — background image, color palette, character biography ("Favorite Place: Outer Space") — is oriented around space. Jungle floaters were simply a legacy error from an earlier theme assignment. Astronomy floaters make the theme coherent from the floating particles down to the character facts.

---

## Entry 28 — Stat Bar Labels Changed to Title Case (4/7)

**Date:** 2026-04-07

**What AI gave me:**
Stat bar labels displayed as "STRENGTH" and "ABILITY" (all-caps).

**What I chose instead:**
Changed to "Strength" and "Ability" (title case).

**Why this was my decision:**
All-caps labels felt more aggressive and shouty than the kawaii aesthetic calls for. Title case reads softer and more consistent with the overall friendly, playful tone of the screen. A small typographic call — but in a design where a single typeface is used at every size, casing is one of the few available levers.

---

## Entry 29 — Kart Label Color Follows Hover and Select System (4/8)

**Date:** 2026-04-08

**What AI gave me:**
The kart label ("[Name]'S KART") used the `.gradient-title` class but had no `--char-color` variable set, so it always rendered white regardless of character hover or selection.

**What I chose instead:**
I specified the kart label should follow the same color system as the title, subheader, and stats — previewing the character's color on hover and locking to it on select. Implemented by adding a `charColor` prop to `KartDisplay` and passing `displayColor` from `GameMenu`.

**Why this was my decision:**
Visual consistency — every readable text element on screen should respond to the character color system simultaneously. The kart label was the one outlier that hadn't been connected to the system. Identifying and closing that gap was a deliberate completeness call.

---

## Entry 30 — Character-Themed Emoji Added to Transition Confetti (4/8)

**Date:** 2026-04-08

**What AI gave me:**
The transition screen confetti was 80 generic colored rectangles — no character-specific theming.

**What I chose instead:**
I directed Claude to pull the emoji floaters from each character's theme in `themes.js` and mix 20 emoji confetti pieces into the falling particles alongside the rectangles. Steve gets 🐦 ☀️ 🌊, Gurchen gets 🫧 🌿 💨, Gerald gets 🌙 ⭐ 🪐 🚀 ☄️ ✨ 🌟, Barry gets 💧 🪨 🌊.

**Why this was my decision:**
The transition screen should feel like it belongs to that character's world. Generic confetti felt disconnected from the character's identity. Reusing the existing theme emoji system was the right solution — no new art, no new data, just connecting two systems that were already there.

---

## Entry 31 — Moodboard Added to Documentation (4/8)

**Date:** 2026-04-08

**What I did:**
I added a visual moodboard image to the project documentation — placed in `docs/Moodboard.png` and referenced in both the README and `design-intent.md` immediately after the personal statement.

**Why this was my decision:**
The moodboard captures the visual references that informed the design before a single line of code was written — kawaii pixel games, plushie aesthetics, cute animal characters, pastel game UIs. Documenting it in the repo gives the AI direction system a visual anchor that written descriptions alone can't fully convey. It also demonstrates that the creative vision existed prior to any AI-assisted development.

---

*Last updated: 2026-04-08*
*Update this log whenever a new session ends.*
