# Design System Strategy: The Culinary Editorial

## 1. Overview & Creative North Star
**Creative North Star: "The Obsidian Sommelier"**

This design system rejects the "fast-food" digital template in favor of a high-end, editorial experience. It is designed to feel like a heavy, linen-paper menu under dim gallery lighting. We move beyond the grid by embracing **Intentional Asymmetry** and **Tonal Depth**. 

Instead of boxing content, we curate it. By utilizing extreme typographic scale and layering charcoal-on-black surfaces, we create a "Family-Friendly Sophistication"—an environment that feels premium enough for a date night, yet legible and intuitive enough for a parent ordering for a table of four. The goal is to make the user feel like they are interacting with a physical brand rather than a database.

---

## 2. Colors & Atmospheric Depth
Our palette is rooted in the absence of light, using silver and charcoal to "carve" shapes out of the darkness.

*   **Primary Hierarchy:** Use `primary` (#c6c6c6) for critical calls to action. It should feel like brushed silver leaf against a dark stone background.
*   **The "No-Line" Rule:** Standard 1px solid borders are strictly prohibited for sectioning. To separate a "Starters" section from "Mains," use a background shift from `surface` (#0e0e0e) to `surface-container-low` (#131313). Let the change in value define the edge, not a stroke.
*   **Surface Hierarchy & Nesting:** Treat the UI as layers of vellum. 
    *   **Base:** `surface-dim` (#0e0e0e).
    *   **Sectioning:** `surface-container` (#191a1a).
    *   **Interactive Cards:** `surface-container-high` (#1f2020) nested within a lower container.
*   **The "Glass & Gradient" Rule:** For floating navigation or mobile "Order Bar" elements, apply a `surface-container` color at 80% opacity with a `20px` backdrop-blur. 
*   **Signature Textures:** For high-impact areas (Hero headers or "Chef's Specials"), use a subtle linear gradient transitioning from `primary` (#c6c6c6) to `secondary` (#9f9d9d) at a 45-degree angle to mimic the sheen of polished cutlery.

---

## 3. Typography: The Editorial Voice
We use a high-contrast pairing to establish an authoritative hierarchy.

*   **The Hero (Noto Serif):** Used for `display` and `headline` tiers. This is our "signature." Use `display-lg` (3.5rem) for section titles (e.g., "The Grill") with generous tracking to convey luxury.
*   **The Utility (Inter):** Used for `title`, `body`, and `label` tiers. This provides the "Trust" factor. Use `body-md` (#e7e5e5) for item descriptions. It must be clean, legible, and never smaller than `0.875rem` to remain family-friendly for all ages.
*   **The "Price Accent":** Prices should use `title-md` in `primary` (#c6c6c6). Do not bold them; let the color shift and the clean sans-serif geometry provide the emphasis.

---

## 4. Elevation & Depth: Tonal Layering
We do not use shadows to lift objects; we use light to reveal them.

*   **The Layering Principle:** Depth is achieved by stacking. Place a `surface-container-highest` card on a `surface-container-low` background. The contrast difference creates a "soft lift" that feels architectural.
*   **Ambient Shadows:** If a floating element (like a "View Cart" FAB) requires a shadow, use a blur of `32px` or higher with the color `surface-container-lowest` at 40% opacity. It should look like a soft glow of darkness, not a hard drop shadow.
*   **The "Ghost Border" Fallback:** If a boundary is required for accessibility (e.g., input fields), use `outline-variant` (#484848) at 20% opacity. It should be barely perceptible—a "whisper" of a line.
*   **Glassmorphism:** Use for persistent headers. It allows the rich photography of the food to bleed through the UI as the user scrolls, maintaining a connection to the physical product.

---

## 5. Components & Interface Elements

### Buttons
*   **Primary:** Solid `primary` (#c6c6c6) background with `on-primary` (#3f4041) text. Shape: `md` (0.375rem) roundedness.
*   **Secondary:** Ghost style. `Ghost Border` (20% opacity `outline-variant`) with `on-surface` text.
*   **Interaction:** On tap/hover, transition background to `primary-dim` (#b9b9b9).

### Cards & Menu Items
*   **Forbid Dividers:** Do not use lines between menu items. Use `spacing-6` (2rem) of vertical white space to let the eye rest. 
*   **Layout:** Use asymmetrical spacing. A dish's title (`headline-sm`) might be left-aligned, while its price sits subtly below it, indented by `spacing-2`.

### Inputs & Selection
*   **Search/Text Fields:** Use `surface-container-high` as the base. No bottom line. Use a `sm` (0.125rem) radius.
*   **Chips (Dietary Filters):** Use `surface-container-highest` with `label-md`. When selected, use `primary` text with a subtle `primary` underline—avoid heavy fills for filters.

### Interactive "Specials" Carousel
*   A bespoke component using `surface-bright` (#2b2c2c) to pull the user's attention. Use `display-sm` for the dish name, overlapping a high-quality cutout image of the food.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use `spacing-16` and `spacing-20` for top-level section margins. Negative space is a luxury signal.
*   **Do** use fine linear icons (0.5px to 1px weight) in `on-surface-variant` (#acabaa).
*   **Do** prioritize mobile-first ergonomics. All interactive targets must be at least `44px` tall, regardless of how "slim" they look.

### Don’t:
*   **Don’t** use pure white (#FFFFFF). It creates eye strain against the deep black background. Use `on-surface` (#e7e5e5).
*   **Don’t** use standard "Material Design" shadows. They feel like software; we want this to feel like a boutique.
*   **Don’t** crowd the screen. If a menu has 50 items, use "progressive disclosure" (categories) rather than a single long list.
*   **Don’t** use center-alignment for long descriptions. Keep body text left-aligned for readability (Inter's strength).

---

## 7. Spacing & Rhythm
Use the **"Breathable Grid"** approach.
*   **Internal Padding:** Use `spacing-4` (1.4rem) for card internals.
*   **Section Gaps:** Use `spacing-12` (4rem) to separate "Appetizers" from "Entrees."
*   **Touch Targets:** Ensure `secondary_container` elements have at least `spacing-2` of breathing room from the screen edge.