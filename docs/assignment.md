# AI 201 — Hero Faction Screen
## Companion Document — Spring 2026 | Professor Tim Lindsey

---

## What Is a Hero/Faction Screen?

A hero screen (or faction screen, or character select screen) is the moment before the game begins **where the player chooses who they will be.** It is not a menu. It is a mood. The screen's job is to make every option feel distinct, powerful, and worth choosing. When you hover over a character, the entire page should shift to reflect that character's identity — the colors change, the typography shifts, the atmosphere transforms.

The design principle at work is simple: the interface itself communicates meaning. The screen does not just list options — it performs them.

**If you are not a gamer:** Think of it as an interactive poster for a movie, band, or fashion collection. 3–5 options. When a viewer hovers on one, the entire poster shifts — different color palette, different type treatment, different mood. The unselected options fade or recede. The selected option dominates the space.

### Examples Across Disciplines

| If You Come From… | Think of It As… |
|---|---|
| Game Design | Character select screen. Faction picker. Class chooser. |
| Graphic Design | An interactive poster where hovering changes the entire composition. |
| UX / Interaction | Hover as a design tool, not just a cursor cue. |
| Film / Motion | A cast page where hovering on an actor transforms the page into their character's world. |
| Fashion / Branding | A lookbook landing page where each collection has a distinct atmosphere. |
| Photography | A portfolio series page where each project transforms the visual treatment when selected. |

---

## Your Role: Art Director and Orchestrator

**You are the Art Director. AI is your engineering team.** You do not write the CSS by hand — you direct the AI to write it, then evaluate whether the result matches your vision. When it does not, you revise, reject, or redirect.

> "The Art Director never says 'make it look cool.' They say 'the palette is desaturated teal with warm amber accents, the type is condensed sans-serif at 72pt for headers, and when the user hovers, the background shifts from 15% to 85% opacity over 300ms.' That level of specificity is what makes the AI useful. Without it, you get generic."
> — Professor Lindsey

---

## Session Schedule

| Session | Date | What You Learn | How It Feeds Your Project |
|---|---|---|---|
| 2 | Wed 3/25 | Blueprinting the Vibe. Writing a creative spec (Design Intent). | Your Design Intent is written this session. This is the document everything else gets measured against. |
| 3 | Mon 3/30 | Vibe Coding 101. Directing AI to translate your spec into CSS Grid layout. | You go from spec to structure. AI builds the layout; you evaluate whether it matches your intent. |
| 4 | Wed 4/1 | The Cloud Save. Git add, commit, push. Your prototype goes live. | **First Playable checkpoint.** Your Hero Screen is live and navigable, even if unpolished. |
| 5 | Mon 4/6 | The Director's Cut. Intentionally breaking the layout, then using Git to revert. | Stress-test your design. Polish hover states. AI Direction Log fills out. |
| 6 | Wed 4/8 | Studio Crit. Presenting interactive flow, not just static beauty. | **Final deliverable due.** Live desk demos. You present and defend your work. |

> If your deliverable references a technique not demonstrated in Sessions 2–5, that is a signal to check your scope.

---

## ESF Practices (Epistemic Stewardship Framework)

### 1. Design Intent
**What it is:** A creative specification you write **before AI touches your code.** Defines color palette, typographic hierarchy, hover-state behavior, mood, and visual rules.

**What a good one includes:**
- Specific color values (not "dark and moody" but `#1a1a2e` background with `#d4a843` accent)
- Type choices with sizes
- Hover behavior described in enough detail that someone else could build it
- The mood in one sentence
- What you will not compromise on

> **ACADEMIC INTEGRITY: Your Design Intent must be your own writing. AI-generated Design Intents are academic dishonesty.**

---

### 2. AI Direction Log (3–5 Entries)
**What it is:** A running record of your AI interactions. Each entry captures:
1. What you asked AI to do
2. What it produced
3. What you changed, rejected, or kept — and why

**Where it lives:** In your project README, as annotated Git commit messages, or in a physical sketchbook. A commit message like *"Reverted AI-generated grid layout — spacing was wrong for the atmosphere I wanted"* counts as a log entry.

---

### 3. Records of Resistance (3 Moments)
**What it is:** Three documented moments where you rejected or significantly revised what AI gave you. Each record answers:
1. What did AI produce?
2. Why did you reject or revise it?
3. What did you do instead?

**Example:** "AI generated a symmetrical 3-column grid with equal spacing. I rejected it because my Design Intent calls for an asymmetric layout with the selected hero at 60% width. I revised the prompt to specify the ratio and added a CSS rule to suppress the default centering."

---

### 4. Five Questions Reflection
Answer these five questions in a short paragraph before submitting:

1. **Can I defend this?** Can I explain every major decision in this project?
2. **Is this mine?** Does this reflect my creative direction, or did I mostly follow AI's suggestions?
3. **Did I verify?** Did I check that things work the way I think they work?
4. **Would I teach this?** Do I understand it well enough to explain it to someone else?
5. **Is my documentation honest?** Does my AI Direction Log accurately describe what I asked and what I changed?

---

## Tips for Success

- **Start with the Design Intent, not the code.** The number one mistake is asking AI to "make a cool hero screen." Write your spec first.
- **Sketch on paper first.** Draw the layout. Label sections. Indicate what happens on hover.
- **Use the First Playable.** Your screen must be live on GitHub Pages by Session 4 (Wed 4/1).
- **Scope down, not up.** 3–5 factions or characters. One page. No routing. No backend.
- **Test in incognito.** Before submitting, open your GitHub Pages URL in an incognito window. If it doesn't load, your submission is broken.

---

## Academic Integrity

- This is an individual assignment.
- Your Design Intent must be your own writing — written before AI engagement.
- Your AI Direction Log and Records of Resistance must be honest. Fabricated documentation is worse than missing documentation.
- Do not share code repositories, Design Intents, or documentation with other students.

---

*Document Version: 1.0 | Last Updated: March 2026 | AI 201 Spring 2026*
*Professor Tim Lindsey — SCAD*
