# Osh-Western University Portal

A modern web portal built with Next.js, TypeScript, and Tailwind CSS, following the NodeLoc/Edu design patterns and architecture principles.

## 🎯 Project Overview

This project serves as the foundation for the Osh-Western University web portal. It implements a component-based architecture with reusable UI primitives, layouts, and sections that mirror the reference NodeLoc/Edu stack while leveraging modern web technologies for enhanced developer experience and maintainability.

## 🚀 Tech Stack

### Core Technologies

| Layer          | Technology       | Version | Purpose                                    |
| -------------- | ---------------- | ------- | ------------------------------------------ |
| **Framework**  | Next.js          | 16.x    | React framework with SSR, routing, and optimization |
| **Language**   | TypeScript       | 5.x     | Type-safe JavaScript for better DX         |
| **Styling**    | Tailwind CSS     | 4.x     | Utility-first CSS framework                |
| **State**      | React (built-in) | 19.x    | Component state management                 |

### Development Tools

- **ESLint**: Code linting and quality checks
- **Prettier**: Code formatting with Tailwind plugin
- **PostCSS**: CSS processing and optimization

### Dependencies

```json
{
  "next": "16.0.5",
  "react": "19.2.0",
  "react-dom": "19.2.0",
  "tailwindcss": "^4",
  "typescript": "^5",
  "clsx": "latest",
  "tailwind-merge": "latest"
}
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with Header/Footer
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles and Tailwind config
├── components/
│   ├── ui/                 # Reusable UI primitives
│   │   ├── Button.tsx      # Button component with variants
│   │   ├── Card.tsx        # Card components (Card, CardHeader, etc.)
│   │   ├── Input.tsx       # Form input component
│   │   ├── Alert.tsx       # Alert/notification component
│   │   └── index.ts        # Barrel export
│   ├── layout/             # Layout components
│   │   ├── Header.tsx      # Sticky navigation header
│   │   ├── Footer.tsx      # Footer with links
│   │   ├── Container.tsx   # Responsive container wrapper
│   │   └── index.ts        # Barrel export
│   └── sections/           # Page section components
│       ├── Hero.tsx        # Hero section with CTA
│       ├── Stats.tsx       # Statistics display section
│       ├── CardGrid.tsx    # Grid of cards
│       └── index.ts        # Barrel export
├── lib/
│   ├── utils/              # Utility functions
│   │   ├── cn.ts           # Class name merger (clsx + tailwind-merge)
│   │   ├── format.ts       # Formatting utilities (date, number, etc.)
│   │   └── index.ts        # Barrel export
│   └── hooks/              # Custom React hooks
│       ├── useMediaQuery.ts # Media query hook
│       └── index.ts        # Barrel export
├── assets/
│   ├── images/             # Image assets
│   └── icons/              # Icon assets
├── locales/                # Internationalization resources
│   ├── en/
│   │   └── common.json     # English translations
│   └── fr/
│       └── common.json     # French translations
└── public/                 # Static assets

```

## 🎨 Design System

### Color Palette (Osh-Western Brand)

The project uses a custom color scheme defined in `globals.css`:

```css
--osh-primary: #003d5b    /* Deep teal - institutional color */
--osh-secondary: #f89820  /* Vibrant orange - accent color */
--osh-tertiary: #5c7f8a   /* Muted blue-gray */
--osh-neutral: #f5f5f5    /* Light gray background */
```

Usage in components:
```tsx
<div className="bg-osh-primary text-white">...</div>
<button className="text-osh-secondary hover:text-osh-secondary/80">...</button>
```

### Typography

Following the NodeLoc/Edu reference, we use a system font stack for optimal performance:

- **Font Stack**: `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`
- **Scale**: Tailwind's default scale (text-sm to text-5xl)
- **Line Heights**: `leading-tight` for headings, `leading-relaxed` for body text

### Spacing

Consistent spacing using Tailwind's 4px base scale:
- Component spacing: `space-y-4` (16px)
- Section spacing: `space-y-8` or `space-y-12` (32-48px)
- Container padding: `px-4 sm:px-6 lg:px-8`

### Component Patterns

#### Buttons
```tsx
<Button variant="primary" size="lg">Primary Action</Button>
<Button variant="secondary">Secondary Action</Button>
<Button variant="outline">Outline Action</Button>
<Button variant="danger">Delete</Button>
```

#### Cards
```tsx
<Card hover>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardDescription>Description text</CardDescription>
  <CardContent>Main content</CardContent>
</Card>
```

#### Alerts
```tsx
<Alert variant="success">Operation completed successfully</Alert>
<Alert variant="error">An error occurred</Alert>
<Alert variant="warning">Warning message</Alert>
<Alert variant="info">Informational message</Alert>
```

## 🛠️ Scripts

### Development

```bash
# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Code Quality

```bash
# Run ESLint
npm run lint

# Fix ESLint issues automatically
npm run lint:fix

# Format code with Prettier
npm run format

# Check formatting without changes
npm run format:check

# Type checking
npm run type-check
```

## 🏗️ Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Osh-Western-University
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### First Build

The project includes a placeholder landing page demonstrating:
- Responsive navigation with mobile menu
- Hero section with CTAs
- Statistics section
- Card grid with icons
- Footer with links

## 🔄 Mapping to Reference Architecture

This Next.js implementation mirrors the NodeLoc/Edu reference patterns:

| NodeLoc/Edu Pattern | Next.js Implementation | Notes |
|---------------------|------------------------|-------|
| Static HTML pages | Next.js pages in `src/app/` | Using App Router for enhanced features |
| Vanilla JS modules | React components + hooks | Component-based with type safety |
| Tailwind CDN | Tailwind CSS (PostCSS) | Optimized build for production |
| Manual routing | Next.js file-based routing | Automatic code splitting |
| Component patterns | Reusable React components | Same design patterns, better DX |

### Key Differences

1. **Build System**: Next.js provides optimized bundling vs. static files
2. **Type Safety**: TypeScript adds compile-time checks
3. **Code Splitting**: Automatic per-route code splitting
4. **Image Optimization**: Built-in Next.js Image component
5. **Developer Experience**: Hot reload, better error messages

### Maintained Patterns

- ✅ Tailwind utility classes
- ✅ Component composition patterns
- ✅ Responsive design breakpoints
- ✅ Color palette and typography
- ✅ Layout hierarchy (Header, Main, Footer)
- ✅ Accessibility considerations

## 📦 Adding New Components

### UI Component Example

Create a new file in `src/components/ui/`:

```tsx
// src/components/ui/Badge.tsx
import { cn } from "@/lib/utils/cn";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "success" | "warning";
}

export function Badge({ children, variant = "default" }: BadgeProps) {
  return (
    <span className={cn(
      "inline-block px-3 py-1 text-sm rounded-full",
      variant === "default" && "bg-gray-200 text-gray-800",
      variant === "success" && "bg-green-100 text-green-800",
      variant === "warning" && "bg-yellow-100 text-yellow-800"
    )}>
      {children}
    </span>
  );
}
```

Export from `src/components/ui/index.ts`:
```tsx
export { Badge } from "./Badge";
export type { BadgeProps } from "./Badge";
```

### Page Section Example

Create a new file in `src/components/sections/`:

```tsx
// src/components/sections/Features.tsx
import { Container } from "@/components/layout";
import { Card } from "@/components/ui";

export function Features() {
  return (
    <section className="py-16 bg-white">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        {/* Feature content */}
      </Container>
    </section>
  );
}
```

## 🌐 Internationalization

The project includes a basic locale structure for future i18n implementation:

```
src/locales/
├── en/common.json  # English translations
└── fr/common.json  # French translations
```

To implement full i18n, consider adding:
- `next-intl` or `react-i18next`
- Locale-based routing
- Language switcher component

## 🎯 Next Steps

### Recommended Enhancements

1. **Additional Pages**: Create About, Programs, Admissions, Contact pages
2. **CMS Integration**: Connect to a headless CMS (Strapi, Contentful, Sanity)
3. **Authentication**: Add student/faculty login system
4. **Forms**: Implement application and contact forms
5. **Blog**: Add news/blog section with dynamic routing
6. **Search**: Implement site-wide search functionality
7. **Analytics**: Integrate Google Analytics or similar
8. **SEO**: Add sitemap, robots.txt, structured data

### Performance Optimizations

- [ ] Add `next/image` for image optimization
- [ ] Implement lazy loading for below-fold content
- [ ] Configure caching headers
- [ ] Add PWA support
- [ ] Optimize font loading

## 📚 Reference Documentation

- **Next.js**: https://nextjs.org/docs
- **TypeScript**: https://www.typescriptlang.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **React**: https://react.dev/reference/react
- **NodeLoc/Edu Reference**: See `docs/reference-architecture.md` branch

## 🤝 Contributing

1. Create a feature branch from `main`
2. Make your changes following the established patterns
3. Run linting and type checking: `npm run lint && npm run type-check`
4. Format code: `npm run format`
5. Test the build: `npm run build`
6. Submit a pull request

## 📄 License

This project is private and proprietary to Osh-Western University.

---

**Built with ❤️ for Osh-Western University**
