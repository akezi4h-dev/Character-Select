# Records of Resistance
**Project:** AI 201 P1 — Hero Faction Screen
**Student:** Art Director
**Tool:** Claude (claude-sonnet-4-6, Claude Code CLI)
**Due:** 2026-04-08

---

> This document records moments where I pushed back on what AI produced and redirected the work. Each entry names what AI gave, what I did instead, and why the rejection mattered creatively or technically.

---

## Record 1 — Full Retro Restyle: Rejected

**Date:** 2026-04-01
**Commits:** `ff74c9f` (rejected) → `570547b` (revert)

**What AI gave:**
I asked Claude to increase the card sizes and add polish. It returned a full visual restyle: pixel-drop shadows on every element, sharp right-angle corners on cards and buttons, heavy pixel-art borders, and an overall aesthetic that read as "NES game UI." It kept the Press Start 2P font (which I wanted) but pushed it into territory that felt harsh and dated rather than kawaii.

**What I did instead:**
I told Claude: *"I don't like it, please revert everything back except the font — keep the Press Start 2P font."*

Claude used `git checkout [hash] -- [specific files]` to selectively revert only the component files, leaving the font in `index.html` and `index.css` intact. The Nav Tabs that had been bundled into that commit were later re-added as a standalone change.

**Why this rejection matters:**
This was the clearest moment where my aesthetic vision diverged from Claude's interpretation. Claude made an assumption: pixel font = pixel art UI = full retro treatment. My Design Intent was always Mario Kart × Sanrio — soft, pastel, kawaii, bubbly. The font was a retro *touch*, not an invitation to go full 8-bit. Letting that restyle ship would have broken the emotional register the whole project is built on. The rejection was fast, deliberate, and completely mine.

---

## Record 2 — Kart Size: Rejected Twice, Escalated by Direction

**Date:** 2026-04-03 → 2026-04-04

**What AI gave (first attempt):**
When I asked for the kart to be displayed on the right panel, Claude placed it at roughly 250–300px — appropriately sized for a "preview thumbnail" in a UI. This is the conventional choice.

**What I did instead (round 1):**
I rejected the size: *"Make the kart image much larger — around 250–300px wide... The kart should feel like a hero moment."*

Claude scaled it up, but placed it inside a constrained container that clipped the emoji at the edges. The kart was bigger but cut off.

**What AI gave (second attempt):**
Claude fixed the clipping by adding padding, but the kart was still roughly 400–500px and not the dominant visual I wanted. It still felt like a UI element, not a hero.

**What I did instead (round 2):**
*"Can you make it even bigger — 700 pixels?"*

Claude scaled the font-size to `600px` (~700px wide rendered), updated the container to `maxWidth: 720px`, and ensured `overflow: visible` so nothing clips.

**Why this rejection matters:**
700px is not a size any UI convention would suggest. It is almost the full height of a laptop screen. I wanted the character to feel dominant, oversized, larger-than-life — the way Mario Kart's character select screen makes your character feel like *the* character. Both rounds of rejection were pushing toward that feeling. The escalation from "a bit bigger" to "700 pixels" was a design escalation, not a technical one.

---

## Record 3 — Character Cards Shifting on Click: Rejected, Root Cause Demanded

**Date:** 2026-04-04 → 2026-04-05

**What AI gave:**
After several layout iterations, the character card grid was visibly shifting position whenever a character was clicked. The cards would jump slightly left or up because the title text was changing between "SELECT YOUR RACER" (long) and "STEVE" (short), and this caused a browser layout reflow that pushed the card grid around.

Claude's initial response was to adjust padding/margins to try to compensate for the shift — a symptomatic fix.

**What I did instead:**
I rejected the symptomatic approach and demanded a structural fix: *"Character cards must not move or shift when clicked... stop this completely."*

I also gave Claude the specific architectural direction for the right panel: *"position: absolute; top: 0; right: 0; width: 50%; height: 100%... so the kart sits perfectly centered in that space... Make sure overflow: visible is set so nothing gets clipped."*

The actual fix required two changes together:
1. Fixed-height title container (`height: 60px`) + `white-space: nowrap` so the title never causes reflow
2. Right panel fully decoupled from the flex flow via `position: absolute` so nothing on the right can ever affect the left

**Why this rejection matters:**
This was a moment where I identified the root cause (layout reflow from text change) rather than accepting a patch. Demanding that cards "must not move" and specifying *why* (the title text length is variable) forced a structural architectural fix instead of a visual bandaid. The `position: absolute` right panel was a layout decision that changed how the entire screen is composed. That came from my direction, not Claude's default instinct.

---

## Record 4 — Kart Container Box: Rejected in Favor of Open Space

**Date:** 2026-04-03

**What AI gave:**
Claude's first version of the right panel placed the kart inside a framed container — a card-like box with padding, a slight background tint, and rounded corners. Standard UI practice for a "detail view" or "preview panel."

**What I did instead:**
I specified: no box, no background panel, no border. The kart should float directly in the background. Only the ellipse shadow should connect it to the ground.

**Why this rejection matters:**
Removing the box was a deliberate aesthetic choice. Boxes say "this is a UI." Open space says "this is a world." The character select screen is meant to feel like you're looking at the character in their environment — the background shifts to their theme, and they float in it. Putting a box around the kart would have re-introduced an interface boundary that broke the immersive atmosphere. The choice to *not* add something is a design decision, and it was mine.

---

## Record 5 — Layout Shift on Kart Panel: Rejected, Architecture Redirected

**Date:** 2026-04-03

**What AI gave:**
The original right panel for the kart was placed inside the main flex layout as a sibling to the left panel. This meant changes on the left (title length, card selection state) could affect the right panel's position and size through normal flex behavior.

**What I did instead:**
I specified that the right panel must be `position: absolute; top: 0; right: 0; width: 50%; height: 100%` — completely removed from the flex flow. I also specified `display: flex; align-items: center; justify-content: center` inside it so the kart stays perfectly centered regardless of what changes on the left side.

**Why this rejection matters:**
This was a layout architecture decision. The default behavior (two flex children side by side) is what most UI layouts use. But it creates coupling between the two halves — any change on the left can push the right. Decoupling via absolute positioning was the right solution for a screen where the left panel is dynamic (character selection changes the title, grid selection changes layout stress) and the right panel should be a stable, independent display area. I identified the coupling problem and specified the fix.

---

*Last updated: 2026-04-06*
*Update this document whenever a new session ends.*
