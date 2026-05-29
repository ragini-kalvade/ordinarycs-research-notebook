---
name: The Ordinary Computer Scientist
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0edec'
  surface-container-high: '#ebe7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#43474e'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#74777f'
  outline-variant: '#c4c6cf'
  surface-tint: '#455f88'
  primary: '#002045'
  on-primary: '#ffffff'
  primary-container: '#1a365d'
  on-primary-container: '#86a0cd'
  inverse-primary: '#adc7f7'
  secondary: '#5e5f5c'
  on-secondary: '#ffffff'
  secondary-container: '#e0e0dc'
  on-secondary-container: '#626360'
  tertiary: '#162132'
  on-tertiary: '#ffffff'
  tertiary-container: '#2b3648'
  on-tertiary-container: '#949fb4'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#adc7f7'
  on-primary-fixed: '#001b3c'
  on-primary-fixed-variant: '#2d476f'
  secondary-fixed: '#e3e2df'
  secondary-fixed-dim: '#c7c7c3'
  on-secondary-fixed: '#1b1c1a'
  on-secondary-fixed-variant: '#464744'
  tertiary-fixed: '#d8e3fa'
  tertiary-fixed-dim: '#bcc7dd'
  on-tertiary-fixed: '#111c2c'
  on-tertiary-fixed-variant: '#3c475a'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display-lg:
    fontFamily: Source Serif 4
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Source Serif 4
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Source Serif 4
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Source Serif 4
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 32px
  body-md:
    fontFamily: Source Serif 4
    fontSize: 17px
    fontWeight: '400'
    lineHeight: 28px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1120px
  reading-width: 720px
  gutter: 24px
  margin-mobile: 16px
  stack-sm: 8px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style

The design system is rooted in the "New Editorial" aesthetic—a synthesis of classical academic publishing and modern functional minimalism. It targets a scholarly audience of graduate students and researchers, prioritizing intellectual clarity and high-signal content delivery.

The UI should evoke the feeling of a well-typeset physical journal: authoritative, calm, and distraction-free. By utilizing generous whitespace and a restricted color palette, the system reduces cognitive load, allowing the research content to remain the primary focus. There are no decorative gradients or unnecessary depth effects; the personality is conveyed through precise typography and structured layout.

## Colors

The palette is built for long-duration reading sessions. 

- **Background (Secondary):** An off-white "Paper" tone (`#FDFCF8`) is used for all primary surfaces to minimize the harsh glare of pure white screens.
- **Text (Neutral):** A deep "Ink" black (`#111111`) provides maximum contrast for legibility while remaining softer than absolute black.
- **Action (Primary):** "Scholar Blue" (`#111111`) is the sole accent, reserved for primary buttons, active states, and critical navigation links.
- **Support (Tertiary):** A muted slate grey is used for secondary metadata, borders, and captions to maintain a clear hierarchy without competing with the body text.

## Typography

The typography is the core of this design system. It utilizes **Source Serif 4** for all narrative content—from large headlines to body text—to leverage its exceptional legibility and academic character. For UI-specific elements such as buttons, navigation, and metadata labels, **Inter** provides a clean, neutral, and functional contrast.

Body text is sized slightly larger than industry standard (17px-20px) with a generous line height (1.6x) to ensure an optimal reading rhythm. Use optical sizing where available to maintain sharpness in small labels and elegance in large display titles.

## Layout & Spacing

This design system employs a **Fixed Grid** approach for desktop to preserve line-length integrity. 

1.  **The Reading Column:** Main article content must never exceed `720px` in width. This ensures a comfortable 65-75 characters per line, preventing eye fatigue.
2.  **The Master Container:** Centered layout with a max-width of `1120px`, allowing for a sidebar on the left or right for annotations and citations.
3.  **The Stack:** Vertical spacing follows a strict 8px rhythm. Use `stack-lg` to separate major sections and `stack-md` for standard paragraph spacing.
4.  **Responsive Behavior:** On mobile, the grid becomes a single fluid column with `16px` side margins. Navigation should condense into a simple top bar, prioritizing the document title.

## Elevation & Depth

To maintain a flat, scholarly aesthetic, depth is communicated through **Tonal Layers** and **Borders** rather than shadows.

- **Primary Surface:** The cream background (`#FDFCF8`).
- **Secondary Surface:** A slightly darker tint of the background or a subtle 1px border (`#E2E2E2`) is used to define "cards" or "code blocks."
- **Focus States:** Elements do not lift; instead, they receive a crisp, high-contrast outline or a solid color fill change.
- **Zero Shadows:** Avoid all drop shadows. Overlays (like modals) should use a solid 1px border and a semi-transparent dark backdrop to separate from the main content.

## Shapes

The shape language is conservative and architectural. UI elements use a **Soft** (4px) corner radius, providing just enough approachability to feel modern without losing the "professional document" feel.

- **Buttons & Inputs:** 4px radius.
- **Selection Chips:** 2px or 4px radius (never pill-shaped).
- **Images & Figures:** Sharp (0px) or Soft (4px) corners depending on the context of the research data.

## Components

- **Buttons:** Primary buttons are solid `primary_color_hex` with white text. Secondary buttons use a 1px border of the primary color with no fill.
- **Input Fields:** Use a 1px border (`#D1D1D1`) and the `label_font`. The focus state should be a solid 2px border in the accent color.
- **Citations & Footnotes:** Styled in `label-sm` with a subtle background highlight on hover to indicate interactivity.
- **Code Blocks:** Use a monospaced font (system default) on a slightly cooler-toned off-white background with a 1px border.
- **Cards:** For paper summaries, cards should have no background color and a thin top-border to separate them in a list, rather than being fully enclosed boxes.
- **Progress Indicator:** A thin, horizontal bar at the top of the viewport to indicate reading progress through a long paper.