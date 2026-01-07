# Celestial Labs Design System (v1.0)
> **Role**: The centralized "Source of Truth" for the Celestial Labs aesthetic, UI patterns, and brand voice.
> **Target Audience**: AI Agents & Human Developers.
> **Core Theme**: Industrial Futurist / Deep Tech / Sovereign Kinetic.

---

## 1. Core Philosophy & Tone
**"Scientific Precision meets Industrial Scale."**
The design language is not "consumer software"—it is **mission infrastructure**. It feels like the control panel for a nuclear reactor or a deep-space telescope.

### Voice Guidelines
-   **Tone**: Authoritative, Essential, Permanent. Avoid casual or playful language.
-   **Keywords**: Uplink, Telemetry, Protocol, Relay, Architecture, Vector, Sovereign.
-   **Forbidden**: "Oops!", "Click here", "Fun", "Easy".
-   **Formatting**: Use UPPERCASE for labels (`SYSTEM STATUS`, `INITIALIZE`). Use monospaced fonts for data-heavy text.
-   **Naming Convention**:
    -   *Good*: "Vanguard Tier", "Deep Science", "Orbital Relay".
    -   *Bad*: "Colonizer" (Avoid), "Pro Plan", "Start Free".

---

## 2. Global Foundation (CSS Variables)
*To be used in `globals.css` :root*

| Variable | Value | Usage |
| :--- | :--- | :--- |
| `--void` | `#050505` | Primary background. The "infinite black" canvas. |
| `--starlight` | `#F5F5F7` | Primary text, active states, high contrast elements. |
| `--platinum` | `#E5E4E2` | Secondary text, subtle borders, inactive states. |
| `--nebula` | `#1A1D23` | Card backgrounds on hover, utility surfaces. |
| `--grid-line` | `rgba(255, 255, 255, 0.08)` | Borders, dividers, subtle grid backgrounds. |

### Typography
-   **Primary (Sans)**: `Inter` (`var(--font-inter)`) - Used for body text, general UI.
-   **Secondary (Mono)**: `IBM Plex Mono` (`var(--font-mono)`) - Used for headers, labels, data, code, technical readouts.

---

## 3. UI Component Specifications

### A. Containers & Cards (`.componentCard`, `.pricingCard`)
-   **Background**: `var(--void)` (Transparent or solid).
-   **Border**: `1px solid var(--grid-line)`.
-   **Border Radius**: `8px` (Standard), `12px` (Holographic/Special).
-   **Padding**: `2rem` to `3rem` (Generous spacing is key to the "Premium" feel).
-   **Hover Effect**:
    -   `transform: translateY(-8px)` (Lift)
    -   `box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.5)`
    -   `border-color: var(--starlight)`

### B. Buttons (`.button`, `.buttonPrimary`)
-   **Typography**: Monospace, Uppercase, Tracking `0.1em`.
-   **Shape**: Sharp corners or slight radius (`4px`), `1px solid` border.
-   **Default**: Transparent background, `var(--grid-line)` border, `var(--starlight)` text.
-   **Hover**: Invert colors (Background `var(--starlight)`, Text `var(--void)`).
-   **Primary**: Solid `var(--starlight)` background by default.

### C. Inputs (`.input`)
-   **Background**: Transparent.
-   **Border**: `1px solid var(--grid-line)`.
-   **Focus State**: Border becomes `var(--starlight)`. No default browser glow.
-   **Font**: `Inter` for value, `Mono` for labels.

### D. Toggles & Checkboxes
-   **Checkbox**: Square `1.25rem`, sharp edges. Checkmark is `var(--void)` on `var(--starlight)`.
-   **Toggle**: Pill shape `var(--grid-line)` background. Circle thumb `var(--platinum)`. Active state fills with `var(--starlight)`.

---

## 4. Special "Celestial" Components

### A. The "Terminal" (`.terminal`)
Used for showcasing code or logs.
-   **Background**: `#0D0F12`
-   **Font**: `IBM Plex Mono`
-   **Details**: Window dots (Red/Yellow/Green or Monochrome), `> ` command prompt prefixes.

### B. The "IDE" Window (`.ideContainer`)
A rich code editor simulation.
-   **Structure**: Header (Tabs + Window Controls) + Body (Gutter + Content) + Status Bar.
-   **Gutter**: Right-aligned line numbers, opacity `0.2`.
-   **Syntax Highlighting**:
    -   Purple (`#bd93f9`): Numbers
    -   Pink (`#ff79c6`): Keywords/Operators
    -   Green (`#50fa7b`): Variables
    -   Yellow (`#f1fa8c`): Strings
    -   Blue (`#8be9fd`): Functions

### C. Visual Effects (VFX)
1.  **Holographic Card**:
    -   `backdrop-filter: blur(12px)`
    -   `background: rgba(255, 255, 255, 0.03)`
    -   `animation: hologram-shine` (Linear gradient sweep).
2.  **Radar Scan**:
    -   `conic-gradient` green sweep.
    -   Pulsing "pips" (`#00FF80`) with `box-shadow` glow.
3.  **AI Streamed Text**:
    -   Terminal-like container `#0A0A0A`.
    -   Blinking Block Cursor (`.aiCursor`).
    -   Typing effect (JS driven).

---

## 5. Animation & Motion
-   **General**: `0.2s` ease for micro-interactions (hover).
-   **Entrance**: `Framer Motion` usually.
    -   `initial={{ opacity: 0, y: 20 }}`
    -   `animate={{ opacity: 1, y: 0 }}`
    -   `transition={{ duration: 0.8 }}`
-   **Looping**: Pulse, Glow, Spin (Linear).

---

## 6. Layout Grid
-   **Background**: `.grid-bg`
    -   Linear gradient pattern `80px x 80px`.
    -   Color: `var(--grid-line)`.
    -   Crucial for the "blueprint" / "technical" look.

---

## 7. Implementation Checklist for Agents
When creating new pages/components:
1.  [ ] **Check Font**: Are headers Mono? Is body Inter?
2.  [ ] **Check Borders**: Are borders `1px solid var(--grid-line)`?
3.  [ ] **Check Padding**: Is there enough breathing room (min `2rem` inside cards)?
4.  [ ] **Check Tone**: Is the copy serious and high-tech? (No exclamation marks!).
5.  [ ] **Check Interaction**: Do buttons invert on hover? Do cards lift?
6.  [ ] **Check Background**: Is the global background `var(--void)`? Is the grid visible?

---

*End of Specification*
