# Architecture Documentation

## Overview

This document describes the architecture and design decisions for the Osh-Western University portal, explaining how the Next.js + TypeScript + Tailwind implementation maps to the NodeLoc/Edu reference architecture.

## Architecture Principles

### 1. Component-Based Design

Following the reference architecture's component patterns, we've organized the codebase into three layers:

- **UI Primitives** (`src/components/ui/`): Atomic, reusable components
- **Layout Components** (`src/components/layout/`): Structural components
- **Section Components** (`src/components/sections/`): Page-level compositions

### 2. Type Safety

TypeScript provides compile-time guarantees that catch errors early:

```typescript
// Component props are strongly typed
interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "danger";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}
```

### 3. Utility-First Styling

Tailwind CSS enables rapid development while maintaining consistency:

- Custom color tokens defined in `globals.css`
- Design system constraints through Tailwind configuration
- The `cn()` utility merges conditional classes safely

### 4. Progressive Enhancement

The site works without JavaScript but enhances with it:

- Server-side rendering for initial content
- Client-side hydration for interactivity
- Mobile menu requires JS, but navigation is accessible

## Component Architecture

### UI Primitives Layer

**Purpose**: Provide basic building blocks with consistent styling

**Examples**:
- `Button`: Unified button styling with variants and sizes
- `Card`: Container component for content grouping
- `Input`: Form input with label and error state
- `Alert`: Notification/message component

**Design Pattern**:
```typescript
// Accept className for extensibility
export function Component({ className, ...props }: ComponentProps) {
  return (
    <element
      className={cn("base-styles", "variant-styles", className)}
      {...props}
    />
  );
}
```

### Layout Components Layer

**Purpose**: Define page structure and responsive containers

**Components**:
- `Header`: Sticky navigation with mobile menu
- `Footer`: Site footer with link sections
- `Container`: Responsive max-width wrapper

**Key Features**:
- Responsive breakpoints (sm, md, lg, xl)
- Sticky positioning for header
- Flexible grid layouts

### Section Components Layer

**Purpose**: Compose UI primitives into page sections

**Components**:
- `Hero`: Landing section with headline and CTAs
- `Stats`: Grid of key metrics
- `CardGrid`: Responsive card layout

**Composition Pattern**:
```typescript
// Sections compose primitives and layouts
export function Hero({ title, subtitle, primaryCta }: HeroProps) {
  return (
    <section>
      <Container>
        <h1>{title}</h1>
        <Button>{primaryCta.label}</Button>
      </Container>
    </section>
  );
}
```

## State Management

### Local State

Use React's built-in hooks for component-specific state:

```typescript
const [isOpen, setIsOpen] = useState(false);
```

### External State Synchronization

For browser APIs, use `useSyncExternalStore`:

```typescript
// useMediaQuery subscribes to window.matchMedia
const isMobile = useMediaQuery("(max-width: 768px)");
```

### Future Considerations

For complex state needs, consider:
- **React Context**: Cross-component state
- **Zustand**: Lightweight global state
- **TanStack Query**: Server state management

## Styling Architecture

### Color System

Custom properties in `globals.css` define brand colors:

```css
:root {
  --osh-primary: #003d5b;
  --osh-secondary: #f89820;
  --osh-tertiary: #5c7f8a;
  --osh-neutral: #f5f5f5;
}
```

Access via Tailwind classes:
```tsx
<div className="bg-osh-primary text-white">
```

### Responsive Design

Mobile-first approach with Tailwind breakpoints:

```tsx
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
```

Breakpoints:
- `sm`: 640px (phone landscape)
- `md`: 768px (tablet portrait)
- `lg`: 1024px (tablet landscape)
- `xl`: 1280px (desktop)
- `2xl`: 1536px (large desktop)

### Custom Utilities

Additional utilities in `@layer utilities`:

```css
@layer utilities {
  .shadow-card {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
}
```

## File Organization

### Import Aliases

The `@/*` alias maps to `src/*`:

```typescript
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";
```

### Barrel Exports

Each component directory includes an `index.ts` for clean imports:

```typescript
// src/components/ui/index.ts
export { Button } from "./Button";
export type { ButtonProps } from "./Button";
```

### File Naming Conventions

- Components: PascalCase (e.g., `Button.tsx`)
- Utilities: camelCase (e.g., `cn.ts`)
- Hooks: camelCase with `use` prefix (e.g., `useMediaQuery.ts`)
- Constants: UPPER_SNAKE_CASE

## Routing

### App Router

Next.js 16 uses the App Router (`src/app/`):

```
src/app/
├── layout.tsx    # Root layout (wraps all pages)
├── page.tsx      # Home page (/)
└── about/
    └── page.tsx  # About page (/about)
```

### Future Routes

To add new pages:

1. Create directory in `src/app/`
2. Add `page.tsx` file
3. Export default component

Example:
```typescript
// src/app/programs/page.tsx
export default function ProgramsPage() {
  return <div>Programs</div>;
}
```

## Performance Considerations

### Code Splitting

Next.js automatically splits code per route:
- Each page loads only its required JavaScript
- Shared components are chunked efficiently

### Image Optimization

Use `next/image` for automatic optimization:

```tsx
import Image from "next/image";

<Image src="/logo.png" alt="Logo" width={200} height={100} />
```

### Static Generation

Pages are pre-rendered at build time when possible:
- Faster initial page load
- Better SEO
- Reduced server load

## Accessibility

### Semantic HTML

Use appropriate elements:
- `<nav>` for navigation
- `<main>` for main content
- `<footer>` for footer
- `<button>` for interactive elements

### ARIA Attributes

Add ARIA labels where needed:

```tsx
<button
  aria-expanded={isOpen}
  aria-label="Toggle menu"
>
```

### Keyboard Navigation

Ensure interactive elements are keyboard-accessible:
- Tab navigation works correctly
- Enter/Space activate buttons
- Escape closes modals/menus

## Testing Strategy (Future)

### Unit Tests

Test components in isolation:
- Use Jest + React Testing Library
- Test props, rendering, interactions

### Integration Tests

Test component composition:
- Verify sections work together
- Test navigation flows

### E2E Tests

Test full user workflows:
- Use Playwright or Cypress
- Test critical paths (navigation, forms)

## Deployment

### Build Process

1. Type checking: `npm run type-check`
2. Linting: `npm run lint`
3. Build: `npm run build`
4. Output: `.next/` directory

### Hosting Options

- **Vercel**: Zero-config deployment
- **Netlify**: Static + serverless support
- **Docker**: Self-hosted option
- **AWS/GCP**: Cloud platforms

### Environment Variables

Store secrets in `.env.local` (not committed):

```
NEXT_PUBLIC_API_URL=https://api.example.com
SECRET_KEY=xxx
```

Access in code:
```typescript
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
```

## Monitoring & Analytics

### Performance Monitoring

Consider adding:
- Vercel Analytics
- Google Analytics 4
- Sentry for error tracking

### Core Web Vitals

Monitor:
- LCP (Largest Contentful Paint)
- FID (First Input Delay)
- CLS (Cumulative Layout Shift)

## Security Considerations

### Content Security Policy

Add CSP headers in `next.config.ts`:

```typescript
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        {
          key: 'Content-Security-Policy',
          value: "default-src 'self'; script-src 'self' 'unsafe-inline';"
        }
      ]
    }
  ];
}
```

### Input Validation

Validate all user inputs:
- Client-side: Basic UX validation
- Server-side: Security validation (always)

## Future Enhancements

### Internationalization (i18n)

Implement multi-language support:
1. Install `next-intl`
2. Use locale files in `src/locales/`
3. Add language switcher component

### CMS Integration

Connect to headless CMS:
- Strapi (open-source)
- Contentful (hosted)
- Sanity (developer-friendly)

### Authentication

Add user authentication:
- NextAuth.js for OAuth
- Auth0 for enterprise
- Custom JWT solution

### API Routes

Add backend endpoints in `src/app/api/`:

```typescript
// src/app/api/contact/route.ts
export async function POST(request: Request) {
  // Handle form submission
}
```

## Conclusion

This architecture provides a solid foundation for the Osh-Western University portal, balancing modern best practices with the proven patterns from the NodeLoc/Edu reference. The component-based approach, type safety, and performance optimizations ensure the codebase remains maintainable and scalable as the project grows.
