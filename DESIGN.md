# Design System Inspired by HealthTech

> Auto-extracted from `https://healthtech-template.framer.website/#contact-section` on 2026-07-14

## 1. Visual Theme & Atmosphere

Clean, minimal, and product-focused with deliberate use of whitespace.

The hero section leads with "Clinical operations, finally connected.".

**Key Characteristics:**
- Switzer as the heading font (custom web font loaded via @font-face)
- sans-serif as the body font for all running text
- Heading weight 500, letter-spacing -2.43px
- Light/white background (#ffffff) as the primary canvas
- Primary accent `#17dec3` used for CTAs and brand highlights
- Sharp corners (0-2px) for a precise, technical aesthetic
- Tags: light, sharp, accented, bold-typography, sans-serif

## 2. Color Palette & Roles

### Primary
- **Primary Accent** (`#17dec3`) · `--color-primary`: Brand color, CTA backgrounds, link text, interactive highlights.
- **Secondary Accent** (`#08685b`) · `--color-secondary`: Secondary brand, hover states, complementary highlights.
- **Background** (`#ffffff`) · `--color-bg`: Page background, primary canvas.
- **Background Secondary** (`#08685b`) · `--color-bg-secondary`: Cards, surfaces, alternating sections.

### Text
- **Text Primary** (`#000000`) · `--color-text`: Headings and body text.
- **Text Secondary** (`#878787`) · `--color-text-secondary`: Muted text, captions, placeholders.

### Borders & Surfaces
- **Border** (`#f4f4f4`) · `--color-border`: Dividers, outlines, input borders.

### Full Extracted Palette

| # | Hex | CSS Variable | Role | Area | Contrast |
|---|---|---|---|---|---|
| 1 | `#0b423b` | `--palette-1` | section | large | text-light |
| 2 | `#08685b` | `--palette-2` | button | large | text-light |
| 3 | `#f4f4f4` | `--palette-3` | block | large | text-dark |
| 4 | `#085e53` | `--palette-4` | block | large | text-light |
| 5 | `#ffffff` | `--palette-5` | badge | large | text-dark |
| 6 | `#17dec3` | `--palette-6` | text-accent | medium | text-dark |
| 7 | `#363636` | `--palette-7` | button | medium | text-light |
| 8 | `#878787` | `--palette-8` | badge | small | text-dark |
| 9 | `#0000ee` | `--palette-9` | text-accent | small | text-light |

## 3. Typography Rules

- **Heading Font:** `Switzer` (web font)
- **Body Font:** `sans-serif`, sans-serif

### Type Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|---|
| H1 | Switzer | 81px | 500 | 81px | -2.43px |
| H2 | Switzer | 49px | 500 | 53.9px | -1.47px |
| H4 | Switzer | 31px | 400 | 34.1px | -0.62px |
| Body | Switzer | 16px | 400 | 22.4px | normal |

### Type Scale

| Token | Size | Suggested Usage |
|---|---|---|
| Display | `81px` | headings |
| H1 | `49px` | headings |
| H2 | `31px` | headings |
| H3 | `25px` | headings |
| H4 | `20px` | headings |
| Body L | `16px` | body / supporting text |
| Body | `14px` | body / supporting text |
| Small | `12px` | body / supporting text |

## 4. Component Stylings

### Primary Button

```css
.btn-primary {
  background: #08685b;
  color: #000000;
  border-radius: 0px;
  padding: 0px 0px;
  font-size: 12px;
  font-weight: 400;
  border: none;
  cursor: pointer;
}
```

## 5. Layout Principles

- **Base spacing unit:** `4px` — use multiples (8px, 12px, 16px, etc.)

### Spacing Scale (extracted from real elements)

| Token | Value | Role |
|---|---|---|
| spacing-1 | `4px` | element |
| spacing-2 | `24px` | card |
| spacing-3 | `16px` | element |
| spacing-4 | `8px` | element |
| spacing-5 | `12px` | element |
| spacing-6 | `104px` | section |
| spacing-7 | `32px` | card |
| spacing-8 | `72px` | section |

### Border Radius Scale

| Token | Value | Element |
|---|---|---|

## 6. Depth & Elevation

No prominent box-shadows detected. This design likely uses flat surfaces with borders or background color changes for depth.

## 7. Do's and Don'ts

### Do
- Use `#ffffff` as the primary background color
- Use `Switzer` for all headings and `sans-serif` for body text
- Use `#17dec3` as the single dominant accent/CTA color
- Maintain `4px` as the base spacing unit — all gaps should be multiples
- Keep corners sharp (0-2px radius) for a precise, technical feel
- Make headlines large and bold — typography is the hero element
- Use weight 500 for headings to match the brand's typographic voice

### Don't
- Don't use colors outside the extracted palette without justification
- Don't substitute Switzer/sans-serif with generic alternatives
- Don't use irregular spacing — stick to 4px grid
- Don't use dark/black backgrounds — this is a light-themed design
- Don't use large border-radius — keep everything crisp and geometric
- Don't use pure black (#000000) for text — use `#000000` instead
- Don't add decorative elements not present in the original design — no badges, ribbons, banners, or ornaments unless the source site uses them
- Don't invent UI patterns the source site doesn't have — if the original has no NEW badge, don't add one just because a red is in the palette

## 8. Responsive Behavior

| Breakpoint | Width | Notes |
|---|---|---|
| Mobile | < 640px | Single column, stack sections, reduce font sizes ~80% |
| Tablet | 640–1024px | 2-column where appropriate, maintain spacing ratios |
| Desktop | 1024–1440px | Full layout as designed |
| Wide | > 1440px | Max-width container, center content |

- Touch targets: minimum 44×44px on mobile
- Maintain 4px base unit across breakpoints — only scale multipliers

## 9. Agent Prompt Guide

### Quick Color Reference

```
Background:  #ffffff
Text:        #000000
Accent:      #17dec3
Secondary:   #08685b
Border:      #f4f4f4
```

### Example Prompts

1. "Build a hero section with a `#ffffff` background, `Switzer` heading in `#000000`, and a `#17dec3` CTA button with 0px radius."
2. "Create a pricing card using background `#08685b`, border `#f4f4f4`, `sans-serif` for text, and 12px padding."
3. "Design a navigation bar — `#ffffff` background, `#000000` links, `#17dec3` for active state."
4. "Build a feature grid with 3 columns, 12px gap, each card using the card component style."
5. "Create a footer with `#000000` background, `#ffffff` text, and 8px padding."

### Iteration Guide

1. Start with layout structure (sections, grid, spacing)
2. Apply colors from the palette — background first, then text, then accents
3. Set typography — font families, sizes from the type scale, weights
4. Add components — buttons, cards, inputs using the specs above
5. Apply border-radius consistently across all elements
6. Check responsive behavior — test mobile and tablet layouts
7. Final pass — verify all colors match, spacing is consistent, fonts are correct
MAKE 