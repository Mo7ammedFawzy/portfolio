---
name: Warm Editorial
colors:
  surface: '#fbf9f8'
  surface-dim: '#f5f3f3'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#e9e8e7'
  surface-container-high: '#e9e8e7'
  surface-container-highest: '#e1bfb2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#594137'
  inverse-surface: '#2b2622'
  inverse-on-surface: '#f3ede5'
  outline: '#8d7165'
  outline-variant: '#e1bfb2'
  surface-tint: '#e85d04'
  primary: '#e85d04'
  on-primary: '#ffffff'
  primary-container: '#c74e00'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb380'
  secondary: '#5d5f5f'
  on-secondary: '#ffffff'
  secondary-container: '#e5e7e7'
  on-secondary-container: '#1b1d1d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  card-border: '#eeeeee'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  text-primary: '#1b1c1c'
  text-secondary: '#594137'
  border-subtle: '#e1bfb2'
typography:
  display-lg:
    fontFamily: Libre Caslon Text
    fontSize: 72px
    fontWeight: '700'
    lineHeight: 76px
    letterSpacing: -0.02em
  display-md:
    fontFamily: Libre Caslon Text
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 60px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Libre Caslon Text
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
  headline-md:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Libre Caslon Text
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 31px
  title-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 29px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  ui-label:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.08em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  '2xl': 2rem
  '3xl': 32px
  full: 9999px
spacing:
  grid-margin: 2.5rem
  grid-gutter: 1.5rem
  bento-gap: 1rem
  section-padding: 6rem
  container-padding-sm: 1.5rem
  container-padding-md: 2.5rem
---

## Brand & Style

This design system frames a personal portfolio through a **Warm Editorial** lens. It fuses the precision of a technical showcase with the intimacy of a literary publication. The aesthetic is a fusion of **Editorial Design** and **Modern Minimalism**, using warm earthy tones and serif typography to create a space that feels both authoritative and approachable.

The visual narrative is built on "Crafted Warmth." It replaces cold corporate grays with a parchment-like canvas where code, projects, and personal narrative are treated with the care of a well-edited book. The brand personality is thoughtful, refined, and personal, balancing developer credibility with creative sensitivity. Key pillars include:

- **Editorial Clarity:** Serif headlines (Libre Caslon Text) inject a sense of literary craft, while clean sans-serif body text (Plus Jakarta Sans) ensures modern readability.
- **Vibrant Warmth:** Burnt Orange (`#e85d04`) serves as the singular energetic accent, evoking warmth and confidence against the cream-toned canvas.
- **Subtle Depth:** Cards and surfaces use soft shadows and gentle hover lifts rather than heavy borders, maintaining an airy, premium feel.

## Colors

The palette is anchored in warm neutrals with a single bold accent, designed for a personal, inviting atmosphere.

- **Primary (Burnt Orange):** `#e85d04`. Reserved for calls-to-action, interactive highlights, active states, and brand identity. It is the visual heartbeat of the system.
- **Neutral (Parchment & Warm Grays):** The foundation. `#fbf9f8` is the base background, while `#f5f3f3` and `#e9e8e7` create subtle depth in containers and elevated surfaces.
- **Text (Deep Charcoal):** `#1b1c1c` for primary text, `#594137` for secondary text and labels with a warm brown undertone.

For interactive states, the primary color intensifies through container shifts (`#c74e00` light / `#ff8a3d` dark) rather than opacity overlays, creating a confident, physical feel.

## Typography

The typography employs a **Dual-Core** strategy that balances editorial elegance with technical clarity.

1. **The Editorial Core (Libre Caslon Text):** Provides a sophisticated, bookish layer. Used for display text and all headings to inject personality, warmth, and a sense of craftsmanship.
2. **The Utility Core (Plus Jakarta Sans):** Serves as the workhorse for body content, labels, and UI elements, ensuring a clean, modern, and highly legible reading experience.

**Scale Rules:**
- Display text (72px/56px) in Libre Caslon Text uses tight tracking (-0.02em/-0.01em) for a cohesive, editorial feel.
- UI labels are uppercase with wide letter spacing (+0.08em) and bold weight to clearly differentiate them from body text.
- Body text maintains a generous 1.6 line-height for comfortable reading.

## Layout & Spacing

This design system uses a **Centered Editorial** model with a generous max-width to create a focused, magazine-like reading experience.

- **Desktop (1280px max-width):** Content is centered with 40px side padding. The single-column layout prioritizes vertical rhythm and narrative flow.
- **Mobile (Under 768px):** Padding reduces to 24px. Elements reflow into a single column with consistent vertical rhythm.
- **Negative Space:** Maintain significant vertical padding between sections to let the warm background breathe and sustain the premium, unhurried feel.

Internal spacing follows an 8px increment system for mathematical consistency, with cards using 24–32px internal padding.

## Elevation & Depth

Depth is conveyed through **Tonal Layering** and **Ambient Shadows** that adapt between light and dark modes.

- **Surface Tiers:** `#fbf9f8` is the base. Cards use `#ffffff` (surface-container-lowest) with 1px borders in `#eeeeee` to define boundaries softly.
- **Ambient Shadows:** Cards use `0 4px 20px rgba(0,0,0,0.04)` at rest, deepening to `0 8px 30px rgba(0,0,0,0.08)` on hover. Dark mode intensifies these to 30%/45% opacity.
- **Interactive States:** On hover, elements lift 4px (`-translate-y-1`) and gain shadow depth. Card borders transition to the primary orange to signal engagement.

## Shapes

The system employs **Soft Geometry** to balance warmth with structural clarity.

- **Structural Containers:** Cards and layout blocks use `rounded-2xl` (16px) for a friendly, modern edge that remains professional.
- **Interactive Elements:** Buttons use `rounded-lg` (8px) for a grounded, substantial feel. Icon buttons and scroll-to-top use `rounded-full` for circular shapes.
- **Special Containers:** Journey cards use `rounded-[32px]` for a distinctive, oversized radius that creates visual distinction.

## Components

### Buttons
- **Primary:** Solid Burnt Orange (`#e85d04`) background with White text. Sans font, 14px, semibold. `rounded-lg`.
  - Hover: background shifts to `#c74e00` (primary-container), scales 1.03, gains an orange glow shadow.
- **Secondary:** White (`#ffffff`) background with 1px `#eeeeee` border. Dark text.
  - Hover: border and text turn Burnt Orange, slight upward translate, subtle shadow.
- **Icon Button:** 48×48 circle, white background, 1px border. Hover: border and icon turn orange.

### Cards
- **Project Card:** White background, 1px `#eeeeee` border, `rounded-2xl`. Shadow at rest, lifts and gains border-color on hover. Internal image scales 1.03 on hover.
- **Experience Card:** White background, 1px border, `rounded-2xl`, 24–32px padding.
- **Skill Card:** Square aspect ratio, white background, 1px border, `rounded-xl`. Hover: lifts and shadows.
- **Journey Card:** Surface background, 1px border, `rounded-[32px]`, 32–40px padding.

### Chips & Pills
- **Tech Pill:** Rounded-full, white background, 1px `#eeeeee` border. Uppercase sans text, 12px bold, warm brown (`#594137`).

### Navigation
- **Header:** Transparent at top, gains background + shadow on scroll (16px threshold). Smooth 300ms transition.
- **Active State:** Indicated by Burnt Orange underline or color shift.

### Scroll Progress
- **Top Bar:** 3px fixed bar at top, gradient from Burnt Orange to primary-container, glowing box-shadow. Scales horizontally with scroll.
- **Vertical Indicator:** Right-side fixed track (desktop only), 220px tall, with dot navigation for sections. Hidden on mobile.

## Animations & Motion

- **Reveal on Scroll:** Elements with `[data-reveal]` fade in and slide up 12px via IntersectionObserver. Staggered via `--reveal-delay` CSS variable.
- **Hero Entrance:** Staggered fade-in animations using `--hero-delay` for sequential element appearance.
- **Shimmer Text:** Gradient shimmer animation (7s) across text using primary color variations.
- **Reduced Motion:** All animations and transitions are disabled under `prefers-reduced-motion: reduce`. Elements appear instantly.

## Accessibility

- All interactive elements have visible focus rings (2px primary color with 2px offset).
- Scroll indicator dots have `focus-visible` outlines.
- Dark mode is toggled via `.dark` class on `<html>`, driven by user preference (VueUse `useDark`).
- Color contrast ratios meet WCAG AA standards for all text/background combinations.
