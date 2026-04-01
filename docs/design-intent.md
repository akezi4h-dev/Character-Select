# Design Intent
## AI 201 — Hero Faction Screen | Spring 2026

---

## 1. Overall Experience

The app should feel like a **cute pixelated pastel racing game lobby** inspired by Japanese kawaii UI and casual Nintendo-style game menus.

The experience should feel:
- Playful
- Soft and dreamy
- Friendly and collectible
- Lighthearted and whimsical

The interface should feel like the **start screen of a cute kart racing game**, where players choose characters before starting a race.

The design should feel **joyful and cozy rather than competitive**.

---

## 2. Visual Style

### Color Palette
Use soft pastel colors:
- Baby blue background
- Soft pink accents
- Creamy yellows
- Mint green
- Lavender

The palette should feel **cotton-candy-like and dreamy**. Avoid harsh colors or dark tones.

### Background
The background should feel **light and playful**, not empty. Include:
- Subtle checkerboard pattern (racing reference)
- Soft star shapes
- Faint sparkles
- Gradient pastel sky

It should feel like a **fantasy racetrack world UI**.

### UI Elements
All UI components should have:
- Rounded corners
- Soft shadows
- Pill-shaped buttons
- Thick friendly outlines
- Subtle glow or highlight

Everything should feel **soft and toy-like**, like plastic game pieces.

---

## 3. Character Selection Grid

The left side should show a **grid of selectable character icons**.

Structure:
- 3 columns
- Multiple rows
- Square character cards

Each card should have:
- Rounded square frame
- Pastel border
- Cute character avatar
- Creator/character name under it

### Interaction Behavior

**When hovering:**
- Card slightly scales up
- Border glows
- Soft bounce animation

**When selected:**
- Card highlights
- Soft glow appears

---

## 4. Main Character Display

The right side should display a **large featured character sitting in a whimsical kart**.

Design details:
- The kart should look like a toy vehicle
- Candy-like materials
- Musical notes / cute decorations
- Heart-shaped wheels or accents

The character should feel:
- Chibi
- Expressive
- Soft colors
- Big eyes

---

## 5. Primary UI Actions

### Start Button
Located bottom right.
- Big rounded button
- Pastel pink or mint
- Soft glow
- Playful font
- **Hover:** gentle bounce + sparkle effect

### Customize Button
Near the kart. Secondary playful option.
- Dice icon
- Rounded bubble button
- Hover animation

### Back Button
Bottom left. Small rounded button with:
- Arrow icon
- Pastel tone
- Subtle hover effect

---

## 6. Typography

Typography should feel **cute and game-like**:
- Rounded sans-serif
- Bubbly shapes
- Slightly thick
- Readable but playful

Avoid corporate fonts.

---

## 7. Motion & Microinteractions

The UI should feel alive. Include:
- Floating stars
- Gentle background movement
- Character idle animation
- UI hover bounce
- Button squish animation

Animations should feel: **soft, springy, slow and satisfying**.

---

## 8. Layout Structure

Two-panel layout:

**Left panel:** Character selection grid

**Right panel:**
- Large character preview
- Kart display
- Customize button

**Bottom bar:**
- Back button (left)
- Start button (right)

---

## 9. Technical Stack

- Vite
- React
- Tailwind CSS

### Components
- `GameMenu`
- `CharacterGrid`
- `CharacterCard`
- `CharacterPreview`
- `KartDisplay`
- `StartButton`
- `CustomizeButton`
- `BackButton`

### Animations
- CSS transitions
- Small spring animations
- Hover scale effects

---

## 10. Tone of the Product

The app should feel like:
- A collectible character racing game
- Something between **Mario Kart and Sanrio aesthetics**
- Joyful and adorable

**The UI should feel like a toy you want to click on.**
