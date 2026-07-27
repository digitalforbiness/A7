---
name: A7 Digital Identity
colors:
  surface: '#fff7fb'
  surface-dim: '#e0d8dd'
  surface-bright: '#fff7fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#faf1f7'
  surface-container: '#f4ebf1'
  surface-container-high: '#eee6eb'
  surface-container-highest: '#e9e0e6'
  on-surface: '#1e1a1e'
  on-surface-variant: '#4c444d'
  inverse-surface: '#332f33'
  inverse-on-surface: '#f7eef4'
  outline: '#7e747e'
  outline-variant: '#cfc3ce'
  surface-tint: '#784e88'
  primary: '#330b43'
  on-primary: '#ffffff'
  primary-container: '#4a235a'
  on-primary-container: '#ba8bca'
  inverse-primary: '#e7b5f7'
  secondary: '#865300'
  on-secondary: '#ffffff'
  secondary-container: '#fea520'
  on-secondary-container: '#694000'
  tertiary: '#202000'
  on-tertiary: '#ffffff'
  tertiary-container: '#353600'
  on-tertiary-container: '#a0a05e'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#f8d8ff'
  primary-fixed-dim: '#e7b5f7'
  on-primary-fixed: '#2f0740'
  on-primary-fixed-variant: '#5f366f'
  secondary-fixed: '#ffddb9'
  secondary-fixed-dim: '#ffb961'
  on-secondary-fixed: '#2b1700'
  on-secondary-fixed-variant: '#663e00'
  tertiary-fixed: '#e7e69e'
  tertiary-fixed-dim: '#cbca84'
  on-tertiary-fixed: '#1d1d00'
  on-tertiary-fixed-variant: '#494911'
  background: '#fff7fb'
  on-background: '#1e1a1e'
  surface-variant: '#e9e0e6'
  deep-purple: '#2E1537'
  vibrant-orange: '#E67E22'
  surface-gray: '#F8F9FA'
  border-subtle: '#E9ECEF'
  text-main: '#2D3436'
  text-muted: '#636E72'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
  stack-sm: 8px
  stack-md: 24px
  stack-lg: 64px
---

## Brand & Style

The visual identity of the design system is rooted in a **Corporate Modern** aesthetic that balances high-tier enterprise reliability with the agility of modern SaaS. It targets high-demand professionals in the e-commerce and data sectors, evoking a sense of technical mastery and data-driven confidence.

The style utilizes a clean, high-contrast interface with expansive whitespace to ensure complex data and pricing structures remain digestible. It moves away from the flat, utilitarian look of legacy enterprise software, introducing subtle depth through soft shadows and fluid transitions to create a premium, tactile experience. The emotional response is one of **Expertise, Transparency, and Precision.**

## Colors

The palette is anchored by a **Deep Professional Purple**, used strategically for primary brand touchpoints, headings, and core action states to establish authority. A **Vibrant Orange** serves as the energetic highlight, reserved for secondary calls-to-action, status indicators, and critical data points to ensure they command immediate attention.

We employ a sophisticated neutral scale built on soft cool-greys. This prevents "pure black" fatigue and creates a softer, more professional reading environment. 
- **Primary Actions:** Deep Purple (#4A235A).
- **Highlights/Secondary CTA:** Vibrant Orange (#F39C12).
- **Backgrounds:** Primarily White (#FFFFFF) with Surface Gray (#F8F9FA) used for section nesting and card grouping.
- **Typography:** Text-Main (#2D3436) for maximum legibility.

## Typography

This design system utilizes a dual-font strategy to maximize both impact and readability. **Montserrat** is the voice of the brand, used for headings and high-impact data metrics. Its geometric structure feels modern and confident. **Inter** is the workhorse for all body copy and UI labels, chosen for its exceptional legibility and neutral, professional tone.

Generous line heights (1.5 - 1.6) are mandated for body text to ensure ease of reading during data-heavy sessions. On mobile, headlines scale down slightly while line heights increase to maintain clarity.

## Layout & Spacing

The system follows a **12-column fixed grid** for desktop applications, centered within the viewport with a maximum width of 1200px. This provides a structured, reliable container for complex pricing tiers and service grids.

**Spacing Philosophy:**
- **Vertical Rhythm:** We utilize a generous stacking model (`stack-lg`) between major sections to emphasize the "Information-Dense Utility" without causing cognitive overwhelm.
- **Mobile-First:** On mobile devices, the 12-column grid collapses into a single-column stack. Margins reduce to 16px to maximize horizontal real estate for data tables and feature lists.
- **Gutters:** A consistent 24px gutter is used between cards and grid items to ensure distinct visual separation.

## Elevation & Depth

Depth is used to signify interactivity and hierarchy rather than just decoration. This design system avoids heavy, dark shadows in favor of **Ambient Shadows** that are soft, diffused, and slightly tinted with the brand's primary purple to feel integrated.

- **Level 0 (Flat):** Used for the main background surface.
- **Level 1 (Surface):** Subtle 1px border (#E9ECEF) with no shadow. Used for secondary content blocks.
- **Level 2 (Cards):** Soft shadow (Y: 4px, Blur: 12px, Opacity: 6%). Used for pricing tiers and service containers.
- **Level 3 (Interactive/Hover):** Enhanced shadow (Y: 8px, Blur: 20px, Opacity: 10%). Triggered on hover to provide tactile feedback that an element is actionable.

## Shapes

The shape language is defined as **Rounded**, utilizing a 0.5rem (8px) base radius for standard components like input fields and small buttons. Larger containers, such as pricing cards and hero sections, utilize `rounded-lg` (16px) to create a softer, more approachable feel that contrasts with the technical nature of the data. 

Interactive elements should never be sharp, as rounded corners guide the eye toward the center of the component and feel more "fluid" and modern.

## Components

### Buttons
Primary buttons use the **Deep Purple** background with white text. Secondary CTAs use the **Vibrant Orange**. All buttons feature a 300ms transition on hover, shifting the background color slightly darker and increasing the elevation level.

### Cards
Cards are the primary organizational unit. They must have a white background, `rounded-lg` corners, and a Level 2 elevation. For pricing cards, the header section should be color-coded (Purple for E-commerce, Orange/Gold for Monetization) to provide instant category recognition.

### Input Fields
Fields should use a subtle gray background (#F8F9FA) with a 1px border. On focus, the border transitions to Deep Purple with a soft outer glow.

### Chips & Tags
Used for "E-shop", "E-boutique" labels. These use a desaturated version of the category color with high-contrast text to ensure they are readable but not distracting from the primary CTA.

### Lists
Feature lists within cards should use custom checkmark icons in the brand's secondary orange to draw the eye to value-driven content.