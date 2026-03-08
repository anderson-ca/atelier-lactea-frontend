# AGENTS.md

This project builds the frontend for a luxury jewelry brand called **Atelier Lactéa**.

The goal is to create a **quiet luxury ecommerce frontend** using modern React architecture.

Stack:
- Next.js
- TypeScript
- Tailwind CSS
- Ant Design (as a base only)

Important constraints:

• Frontend only  
• Static/mock data only  
• No backend  
• No authentication  
• No checkout logic  
• No real cart functionality  
• Buttons and UI elements may appear interactive but should remain mostly presentational  

The objective is to build a **visually polished, production-quality frontend**.

---

# Design Direction

The brand aesthetic is **quiet luxury**.

Visual characteristics:

- elegant
- minimal
- refined
- editorial
- high-end jewelry brand aesthetic
- soft feminine tone
- maternal symbolism
- warm luxury neutrals

Primary palette direction:

- warm ivory
- champagne
- soft taupe
- muted gold accents
- subtle bronze tones

Avoid:

- loud luxury
- dark gothic visuals
- bright colors
- generic ecommerce UI
- default Ant Design styling
- overly animated interfaces

Motion should be **subtle and restrained**.

---

# Development Workflow

Always follow this order:

1. Inspect reference materials in `/references`
2. Read documentation in `/docs`
3. Define the design system
4. Define project structure
5. Create reusable components
6. Build pages

Do NOT jump straight into page implementation.

---

# Design System Requirements

Before building UI, define:

• color palette  
• typography system  
• spacing scale  
• layout grid  
• border radius system  
• shadow system  
• container widths  

Typography should feel like **high-end editorial jewelry branding**.

Serif-forward hierarchy is recommended.

---

# UI Rules

Ant Design should be used **only as a structural base**.

It must be **fully styled using Tailwind and custom CSS** so the interface does NOT look like default Ant components.

Avoid:

- default Ant buttons
- default Ant forms
- obvious Ant layout patterns

Everything should feel **bespoke and brand-specific**.

---

# Pages to Build

Create these pages:

1. Homepage
2. Collection / Shop
3. Product Detail
4. About / Brand
5. Contact

---

# Homepage Sections

The homepage should include:

• hero section  
• featured collections  
• best-selling pieces  
• editorial banner section  
• brand story  
• craftsmanship / trust section  
• product carousel  
• newsletter signup  
• footer  

Design emphasis:

- large imagery
- elegant typography
- premium whitespace
- editorial layout composition

---

# Imagery

Use elegant placeholder imagery when necessary.

Images should resemble:

- jewelry product photography
- editorial fashion imagery
- neutral luxury backgrounds

Images must be easy to replace later.

---

# Code Quality

Requirements:

• modular components  
• reusable UI elements  
• responsive layouts  
• clean folder structure  
• no monolithic page files  

Components should be reusable across multiple pages.

---

# Project Philosophy

The goal is to produce something that looks like it could belong to brands such as:

- Mejuri
- Byredo
- Cartier (modern minimal side)
- high-end editorial ecommerce sites

Focus on **restraint, elegance, spacing, and typography** rather than decoration.

# Service Structure

Atelier Lactéa offers three levels of craftsmanship.

These tiers should be communicated subtly through the design and page structure.

Do NOT use generic ecommerce language like:
- basic
- standard
- premium
- tier 1 / tier 2 / tier 3

Instead use refined luxury language.

Suggested structure:

### Signature
Elegant accessible pieces created with the same care and materials as the atelier.

### Élevé
More elevated pieces with expanded customization options and refined materials.

### Bespoke
Fully personalized heirloom pieces created through a highly tailored process.

Design guidance:

These service levels should appear **organically within the site**, not as pricing tiers.

Possible placements:

- homepage editorial section
- product filtering categories
- collection navigation
- storytelling blocks explaining the atelier process
- product detail page badges or descriptors

The presentation should feel **editorial and narrative**, not like a SaaS pricing table.

Visual direction:

• refined icons or subtle motifs  
• elegant typography hierarchy  
• calm editorial layout  
• minimal visual separation between tiers  

The hierarchy should feel natural and luxurious rather than transactional.