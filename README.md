# University Portal

A modern, responsive university website built with Next.js, TypeScript, and Tailwind CSS, featuring a comprehensive global layout system.

## Features

### Layout System

- **Responsive Navigation Header**
  - University branding with logo support
  - Primary menu with dropdown support
  - Secondary menu for quick links
  - CTA buttons (Apply, Request Info)
  - Sticky navigation
  - Mobile-friendly hamburger menu
  - Dark-on-light color palette

- **Footer**
  - Multiple footer sections with links
  - Contact information (address, phone, email)
  - Social media links (Facebook, Twitter, Instagram, LinkedIn)
  - Compliance text and copyright
  - Responsive grid layout

- **Hero Component**
  - Configurable size (small, medium, large)
  - Text alignment options (left, center)
  - Background image support with overlay
  - Gradient background fallback

- **Section Component**
  - Consistent spacing options (small, medium, large)
  - Background color variants (white, gray, primary, secondary)
  - Optional title and subtitle
  - Container padding and max-width

- **Grid System**
  - Responsive column configuration for mobile, tablet, and desktop
  - Configurable gap sizes
  - Grid item span control
  - Mobile-first breakpoints

## Design Tokens

The project uses a comprehensive design token system located in `src/lib/design-tokens.ts`:

- **Colors**: Background, text, brand, and border colors
- **Spacing**: Container padding and section spacing
- **Typography**: Font sizes and line heights
- **Breakpoints**: Mobile (640px), Tablet (768px), Desktop (1024px), Wide (1280px), Ultra-wide (1536px)
- **Z-index**: Layering system for UI elements

## Tech Stack

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **React 18**: Latest React features

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with global shell
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── academics/         # Academics page
│   └── admissions/        # Admissions page
├── components/
│   └── layout/            # Layout components
│       ├── Header.tsx     # Navigation header
│       ├── Footer.tsx     # Footer
│       ├── Hero.tsx       # Hero section
│       ├── Section.tsx    # Section wrapper
│       ├── Grid.tsx       # Grid utility
│       ├── Layout.tsx     # Main layout wrapper
│       └── index.ts       # Export barrel
├── config/
│   └── layout.config.tsx  # Layout configuration
├── lib/
│   ├── design-tokens.ts   # Design tokens
│   └── utils.ts           # Utility functions
└── styles/
    └── globals.css        # Global styles
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Configuration

### Layout Configuration

The default layout configuration is located in `src/config/layout.config.tsx`. You can customize:

- Logo and branding
- Primary and secondary menus
- CTA buttons
- Footer sections and links
- Contact information
- Social media links
- Compliance text

### Customizing the Header

```typescript
import { Header } from '@/components/layout'

<Header
  logo={{ text: 'Your University', alt: 'Logo' }}
  primaryMenu={[...]}
  ctaButtons={[...]}
  sticky={true}
/>
```

### Customizing the Footer

```typescript
import { Footer } from '@/components/layout'

<Footer
  sections={[...]}
  contactInfo={...}
  socialLinks={[...]}
  complianceText="Your compliance text"
/>
```

## Responsive Design

The layout system follows a mobile-first approach with the following breakpoints:

- **Mobile**: < 640px (1 column layouts)
- **Tablet**: 640px - 1024px (2-3 column layouts)
- **Desktop**: 1024px+ (3-4+ column layouts)

## Development

### Type Checking

```bash
npm run type-check
```

### Linting

```bash
npm run lint
```

### Building for Production

```bash
npm run build
npm start
```

## License

MIT
