# Atelier Lactea Design System

## 1) Color Palette
- Background Base: `#F7F3EC` (Warm Ivory)
- Background Soft: `#F2EDE4` (Soft Cream)
- Surface Elevated: `#E8DCC8` (Champagne)
- Neutral Mid: `#D7CEC1` (Pale Stone)
- Neutral Deep: `#B2A28B` (Muted Taupe)
- Accent Metal: `#8A6E4F` (Muted Bronze/Gold)
- Contrast Text: `#2F2A24` (Soft Charcoal)

## 2) Typography Pairing
- Display / Headlines: `Cormorant Garamond` (serif, editorial elegance)
- Body / UI: `Manrope` (clean, modern, calm readability)

## 3) Spacing System
- Base scale: `4, 8, 12, 16, 24, 32, 48, 64, 96, 128`
- Section rhythm:
  - Compact section: `py-16`
  - Standard section: `py-24`
  - Immersive section: `py-28` to `py-32`

## 4) Layout Grid
- Main container width: `1240px`
- Content side padding: `px-5 md:px-8 lg:px-12`
- Product grids:
  - Mobile: 1-2 columns
  - Tablet: 2-3 columns
  - Desktop: 3-4 columns

## 5) Radius + Shadow System
- Radius: `10px` small, `16px` medium, `20px` luxe
- Shadows:
  - Soft depth: `0 12px 36px rgba(57, 44, 28, 0.08)`
  - Card depth: `0 10px 24px rgba(70, 54, 34, 0.07)`

## 6) Component List
- Layout: `SiteHeader`, `MobileMenu`, `SiteFooter`, `PageShell`
- Primitives: `SectionHeader`, `LuxuryButton`, `ProductCard`, `TierBadge`
- Sections (Home): hero, collections, best sellers, editorial banner, brand story, craftsmanship, highlights, newsletter

## 7) Page Structure
- `/` Home (immersive editorial narrative + merchandising)
- `/collection` Collection grid + static filters + segmentation
- `/product/[slug]` Product detail + gallery + craft info + related
- `/maison` Brand story and atelier philosophy
- `/contact` Visit and static inquiry UI

## Motion Rules
- Subtle transitions (`300-500ms`) only
- Gentle hover lift and opacity shifts
- Sparse layered parallax via fixed backgrounds on desktop
