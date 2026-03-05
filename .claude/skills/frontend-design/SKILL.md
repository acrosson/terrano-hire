---
name: frontend-design
description: Create distinctive, production-grade frontend interfaces with high design quality. Use this skill when the user asks to build web components, pages, or applications. Generates creative, polished code that avoids generic AI aesthetics.
license: Complete terms in LICENSE.txt
---

This skill guides creation of distinctive, production-grade frontend interfaces that avoid generic "AI slop" aesthetics. Implement real working code with exceptional attention to aesthetic details and creative choices.

The user provides frontend requirements: a component, page, application, or interface to build. They may include context about the purpose, audience, or technical constraints.

## Component Library: HeroUI First

**ALWAYS check HeroUI before building any standard component from scratch.**

HeroUI (https://www.heroui.com) is the preferred component library. Use it for any standard UI element it covers:

- Buttons, icon buttons, button groups
- Inputs, textareas, checkboxes, radio groups, switches, sliders, date pickers
- Modals, drawers, popovers, tooltips, dropdowns
- Tables, pagination, sorting
- Cards, avatars, badges, chips
- Navbars, tabs, breadcrumbs, sidebars
- Progress bars, spinners, skeletons
- Accordions, dividers, scroll shadows

**Decision rule**: If HeroUI has it → use it. If HeroUI doesn't have it, or it requires heavy custom behavior → build it from scratch with full creative freedom.

### HeroUI Setup (include if not already in project)
```bash
npm install @heroui/react framer-motion
```
```jsx
// main.jsx or layout root
import { HeroUIProvider } from "@heroui/react";
export default function App() {
  return <HeroUIProvider>{children}</HeroUIProvider>;
}
```

### Theming HeroUI to Fit the Aesthetic
HeroUI components must match the chosen aesthetic — never leave them at default styling. Use the theming system to align them with your design direction:

```js
// heroui.config.js or tailwind.config.js
const { heroui } = require("@heroui/react");
module.exports = {
  plugins: [
    heroui({
      themes: {
        custom: {
          colors: {
            primary: { DEFAULT: "#YOUR_COLOR" },
            // ... match your palette
          }
        }
      }
    })
  ]
};
```

Override with `classNames` prop for per-component customization:
```jsx
<Button classNames={{ base: "your-custom-classes" }}>Click</Button>
```

---

## Design Thinking

Before coding, understand the context and commit to a BOLD aesthetic direction:
- **Purpose**: What problem does this interface solve? Who uses it?
- **Tone**: Pick an extreme: brutally minimal, maximalist chaos, retro-futuristic, organic/natural, luxury/refined, playful/toy-like, editorial/magazine, brutalist/raw, art deco/geometric, soft/pastel, industrial/utilitarian, etc. There are so many flavors to choose from. Use these for inspiration but design one that is true to the aesthetic direction.
- **Constraints**: Technical requirements (framework, performance, accessibility).
- **Differentiation**: What makes this UNFORGETTABLE? What's the one thing someone will remember?

**CRITICAL**: Choose a clear conceptual direction and execute it with precision. Bold maximalism and refined minimalism both work - the key is intentionality, not intensity.

Then implement working code (HTML/CSS/JS, React, Vue, etc.) that is:
- Production-grade and functional
- Visually striking and memorable
- Cohesive with a clear aesthetic point-of-view
- Meticulously refined in every detail

## Frontend Aesthetics Guidelines

Focus on:
- **Typography**: Choose fonts that are beautiful, unique, and interesting. Avoid generic fonts like Arial and Inter; opt instead for distinctive choices that elevate the frontend's aesthetics; unexpected, characterful font choices. Pair a distinctive display font with a refined body font.
- **Color & Theme**: Commit to a cohesive aesthetic. Use CSS variables for consistency. Dominant colors with sharp accents outperform timid, evenly-distributed palettes.
- **Motion**: Use animations for effects and micro-interactions. Prioritize CSS-only solutions for HTML. Use Motion library for React when available. Focus on high-impact moments: one well-orchestrated page load with staggered reveals (animation-delay) creates more delight than scattered micro-interactions. Use scroll-triggering and hover states that surprise.
- **Spatial Composition**: Unexpected layouts. Asymmetry. Overlap. Diagonal flow. Grid-breaking elements. Generous negative space OR controlled density.
- **Backgrounds & Visual Details**: Create atmosphere and depth rather than defaulting to solid colors. Add contextual effects and textures that match the overall aesthetic. Apply creative forms like gradient meshes, noise textures, geometric patterns, layered transparencies, dramatic shadows, decorative borders, custom cursors, and grain overlays.

NEVER use generic AI-generated aesthetics like overused font families (Inter, Roboto, Arial, system fonts), cliched color schemes (particularly purple gradients on white backgrounds), predictable layouts and component patterns, and cookie-cutter design that lacks context-specific character.

Interpret creatively and make unexpected choices that feel genuinely designed for the context. No design should be the same. Vary between light and dark themes, different fonts, different aesthetics. NEVER converge on common choices (Space Grotesk, for example) across generations.

**IMPORTANT**: Match implementation complexity to the aesthetic vision. Maximalist designs need elaborate code with extensive animations and effects. Minimalist or refined designs need restraint, precision, and careful attention to spacing, typography, and subtle details. Elegance comes from executing the vision well.

Remember: Claude is capable of extraordinary creative work. Don't hold back, show what can truly be created when thinking outside the box and committing fully to a distinctive vision.
