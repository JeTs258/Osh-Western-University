# Component Library Reference

This document provides a comprehensive reference for all available components in the Osh-Western University portal.

## UI Primitives (`src/components/ui/`)

### Button

Multi-variant button component with size options.

**Import**:
```typescript
import { Button } from "@/components/ui";
```

**Props**:
```typescript
interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "danger";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  // ...standard button HTML attributes
}
```

**Examples**:
```tsx
// Primary button (default)
<Button variant="primary">Apply Now</Button>

// Secondary button
<Button variant="secondary" size="lg">Learn More</Button>

// Outline button
<Button variant="outline" size="sm">Cancel</Button>

// Danger button
<Button variant="danger">Delete Account</Button>

// With custom styling
<Button className="w-full">Full Width Button</Button>

// Disabled state
<Button disabled>Processing...</Button>
```

**Styling**:
- Primary: Deep teal background with white text
- Secondary: White background with teal border
- Outline: Transparent with gray border
- Danger: Red background with white text

---

### Card

Container component for grouping related content.

**Import**:
```typescript
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui";
```

**Props**:
```typescript
interface CardProps {
  children: React.ReactNode;
  hover?: boolean; // Adds hover shadow effect
}
```

**Examples**:
```tsx
// Basic card
<Card>
  <p>Card content here</p>
</Card>

// Full featured card
<Card hover>
  <CardHeader>
    <CardTitle>Program Overview</CardTitle>
  </CardHeader>
  <CardDescription>
    Comprehensive undergraduate program in Computer Science
  </CardDescription>
  <CardContent>
    <ul>
      <li>Duration: 4 years</li>
      <li>Credits: 120</li>
      <li>Degree: B.Sc.</li>
    </ul>
  </CardContent>
</Card>

// Card with custom styling
<Card className="bg-osh-primary text-white">
  <CardTitle className="text-white">Highlighted Card</CardTitle>
</Card>
```

---

### Input

Form input component with label and error state support.

**Import**:
```typescript
import { Input } from "@/components/ui";
```

**Props**:
```typescript
interface InputProps {
  label?: string;
  error?: string;
  // ...standard input HTML attributes
}
```

**Examples**:
```tsx
// Basic input
<Input
  type="text"
  placeholder="Enter your name"
/>

// Input with label
<Input
  id="email"
  type="email"
  label="Email Address"
  placeholder="you@example.com"
/>

// Input with error
<Input
  id="username"
  type="text"
  label="Username"
  error="Username is already taken"
/>

// Required input
<Input
  label="Password"
  type="password"
  required
/>
```

---

### Alert

Notification/message component with multiple variants.

**Import**:
```typescript
import { Alert } from "@/components/ui";
```

**Props**:
```typescript
interface AlertProps {
  variant?: "success" | "error" | "warning" | "info";
  children: React.ReactNode;
}
```

**Examples**:
```tsx
// Success alert
<Alert variant="success">
  Your application has been submitted successfully!
</Alert>

// Error alert
<Alert variant="error">
  Failed to process payment. Please try again.
</Alert>

// Warning alert
<Alert variant="warning">
  Your session will expire in 5 minutes.
</Alert>

// Info alert (default)
<Alert variant="info">
  New courses are now available for registration.
</Alert>
```

---

## Layout Components (`src/components/layout/`)

### Header

Global navigation header with mobile menu support.

**Import**:
```typescript
import { Header } from "@/components/layout";
```

**Props**:
```typescript
interface HeaderProps {
  navLinks?: NavLink[];
  logoText?: string;
}

interface NavLink {
  href: string;
  label: string;
}
```

**Examples**:
```tsx
// Default header (automatically included in layout)
<Header />

// Custom navigation links
<Header
  logoText="Osh-Western"
  navLinks={[
    { href: "/", label: "Home" },
    { href: "/programs", label: "Programs" },
    { href: "/contact", label: "Contact" },
  ]}
/>
```

**Features**:
- Sticky positioning
- Responsive mobile menu
- Accessible (ARIA labels)
- Smooth transitions

---

### Footer

Global footer with link sections.

**Import**:
```typescript
import { Footer } from "@/components/layout";
```

**Props**:
```typescript
interface FooterProps {
  sections?: FooterSection[];
  copyrightText?: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}
```

**Examples**:
```tsx
// Default footer (automatically included in layout)
<Footer />

// Custom footer sections
<Footer
  sections={[
    {
      title: "Academics",
      links: [
        { href: "/programs", label: "Programs" },
        { href: "/faculty", label: "Faculty" },
        { href: "/research", label: "Research" },
      ],
    },
    {
      title: "Student Life",
      links: [
        { href: "/housing", label: "Housing" },
        { href: "/activities", label: "Activities" },
        { href: "/support", label: "Support" },
      ],
    },
  ]}
  copyrightText="© 2024 Osh-Western University"
/>
```

---

### Container

Responsive content container with max-width constraints.

**Import**:
```typescript
import { Container } from "@/components/layout";
```

**Props**:
```typescript
interface ContainerProps {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full";
}
```

**Examples**:
```tsx
// Default container (lg = 1280px max-width)
<Container>
  <h1>Page Title</h1>
  <p>Content...</p>
</Container>

// Small container (narrower)
<Container size="sm">
  <article>Blog post content</article>
</Container>

// Full width container
<Container size="full">
  <div>Full width content</div>
</Container>

// Custom styling
<Container className="py-16 bg-gray-50">
  <p>Content with padding and background</p>
</Container>
```

**Sizes**:
- `sm`: 768px
- `md`: 1024px
- `lg`: 1280px (default)
- `xl`: 1400px
- `full`: No max-width

---

## Section Components (`src/components/sections/`)

### Hero

Landing page hero section with headline and CTAs.

**Import**:
```typescript
import { Hero } from "@/components/sections";
```

**Props**:
```typescript
interface HeroProps {
  title: string;
  subtitle?: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
}
```

**Examples**:
```tsx
// Basic hero with title only
<Hero title="Welcome to Osh-Western University" />

// Full hero with subtitle and CTAs
<Hero
  title="Shape Your Future"
  subtitle="Join a community of innovators and leaders committed to academic excellence and real-world impact."
  primaryCta={{
    label: "Apply Now",
    href: "/admissions",
  }}
  secondaryCta={{
    label: "Schedule a Tour",
    href: "/visit",
  }}
/>
```

**Styling**:
- Gradient background (primary to tertiary colors)
- Large, bold typography
- Responsive text sizes
- Spacious padding

---

### Stats

Display key metrics in a responsive grid.

**Import**:
```typescript
import { Stats } from "@/components/sections";
```

**Props**:
```typescript
interface StatsProps {
  stats: Stat[];
}

interface Stat {
  value: string;
  label: string;
}
```

**Examples**:
```tsx
// Basic stats section
<Stats
  stats={[
    { value: "2,500+", label: "Students" },
    { value: "150+", label: "Faculty" },
    { value: "50+", label: "Programs" },
    { value: "95%", label: "Placement Rate" },
  ]}
/>

// Fewer stats (automatically adjusts grid)
<Stats
  stats={[
    { value: "1961", label: "Founded" },
    { value: "60+", label: "Countries" },
    { value: "$5M", label: "Scholarships" },
  ]}
/>
```

**Layout**:
- 2 columns on mobile
- Up to 4 columns on desktop
- Center-aligned text
- Primary color for values

---

### CardGrid

Responsive grid of cards with optional icons and links.

**Import**:
```typescript
import { CardGrid } from "@/components/sections";
```

**Props**:
```typescript
interface CardGridProps {
  title?: string;
  subtitle?: string;
  cards: CardItem[];
  columns?: 2 | 3 | 4;
}

interface CardItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
  link?: {
    label: string;
    href: string;
  };
}
```

**Examples**:
```tsx
// Basic card grid
<CardGrid
  title="Why Choose Us?"
  cards={[
    {
      title: "Excellence",
      description: "World-class education",
      link: { label: "Learn More", href: "/about" },
    },
    {
      title: "Community",
      description: "Diverse student body",
      link: { label: "Meet Students", href: "/community" },
    },
  ]}
/>

// Card grid with icons
<CardGrid
  title="Our Programs"
  subtitle="Explore our comprehensive academic offerings"
  columns={3}
  cards={[
    {
      title: "Computer Science",
      description: "Cutting-edge technology education",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      link: { label: "View Program", href: "/programs/cs" },
    },
    // ... more cards
  ]}
/>
```

**Columns**:
- `2`: 2 columns on medium+ screens
- `3`: 2 on medium, 3 on large (default)
- `4`: 2 on medium, 4 on large

---

## Utilities (`src/lib/utils/`)

### cn (Class Name Utility)

Merge Tailwind classes safely with deduplication.

**Import**:
```typescript
import { cn } from "@/lib/utils";
```

**Usage**:
```typescript
// Basic usage
const classes = cn("bg-blue-500", "text-white", "p-4");

// Conditional classes
const classes = cn(
  "px-4 py-2 rounded",
  isActive && "bg-blue-500 text-white",
  isDisabled && "opacity-50 cursor-not-allowed"
);

// Merging with props
function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      className={cn("base-styles", "more-styles", className)}
      {...props}
    />
  );
}
```

---

### Format Utilities

Helper functions for formatting data.

**Import**:
```typescript
import { formatDate, formatNumber, formatCurrency, truncateText } from "@/lib/utils";
```

**Examples**:
```typescript
// Format date
formatDate(new Date(), "short"); // "11/27/2024"
formatDate(new Date(), "long");  // "November 27, 2024"

// Format number with commas
formatNumber(1234567); // "1,234,567"

// Format currency
formatCurrency(49.99);        // "$49.99"
formatCurrency(49.99, "EUR"); // "€49.99"

// Truncate text
truncateText("Long text here...", 20); // "Long text here..."
```

---

## Hooks (`src/lib/hooks/`)

### useMediaQuery

React hook for responsive breakpoints.

**Import**:
```typescript
import { useMediaQuery } from "@/lib/hooks";
```

**Usage**:
```typescript
function MyComponent() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  
  return (
    <div>
      {isMobile && <p>Mobile view</p>}
      {isDesktop && <p>Desktop view</p>}
    </div>
  );
}
```

**Common Queries**:
```typescript
// Tailwind breakpoints
const isSm = useMediaQuery("(min-width: 640px)");
const isMd = useMediaQuery("(min-width: 768px)");
const isLg = useMediaQuery("(min-width: 1024px)");
const isXl = useMediaQuery("(min-width: 1280px)");

// Dark mode
const isDark = useMediaQuery("(prefers-color-scheme: dark)");

// Reduced motion
const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
```

---

## Color Reference

### Brand Colors

Use these Tailwind classes for brand consistency:

```tsx
// Primary (Deep Teal)
<div className="bg-osh-primary text-white">...</div>
<div className="text-osh-primary">...</div>
<div className="border-osh-primary">...</div>

// Secondary (Vibrant Orange)
<button className="bg-osh-secondary hover:bg-osh-secondary/90">...</button>

// Tertiary (Muted Blue-Gray)
<div className="bg-osh-tertiary">...</div>

// Neutral (Light Gray)
<div className="bg-osh-neutral">...</div>
```

### Standard Colors

Tailwind's full color palette is available:

```tsx
// Grays
<div className="bg-gray-50">...</div>   // Lightest
<div className="bg-gray-900">...</div>  // Darkest

// Semantic colors
<div className="bg-blue-600">...</div>   // Info
<div className="bg-green-600">...</div>  // Success
<div className="bg-yellow-600">...</div> // Warning
<div className="bg-red-600">...</div>    // Error
```

---

## Best Practices

### Component Composition

Prefer composition over creating large monolithic components:

```tsx
// ❌ Bad: Everything in one component
function LandingPage() {
  return (
    <div>
      <nav>...</nav>
      <section>...</section>
      <section>...</section>
      <footer>...</footer>
    </div>
  );
}

// ✅ Good: Composed from smaller components
function LandingPage() {
  return (
    <>
      <Hero {...heroProps} />
      <Stats {...statsProps} />
      <CardGrid {...cardGridProps} />
    </>
  );
}
```

### Prop Spreading

Use TypeScript interfaces and prop spreading:

```tsx
// ✅ Good: Type-safe and flexible
interface MyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary";
}

function MyButton({ variant, className, ...props }: MyButtonProps) {
  return <button className={cn(getVariantStyles(variant), className)} {...props} />;
}
```

### Styling Extensions

Always accept `className` prop for extensibility:

```tsx
// ✅ Good: Allows custom styling
function Card({ children, className }: CardProps) {
  return (
    <div className={cn("rounded-lg shadow-card p-6", className)}>
      {children}
    </div>
  );
}

// Usage
<Card className="bg-blue-50">...</Card>
```

---

## Examples

See the home page (`src/app/page.tsx`) for live examples of all major components working together.

For more examples and patterns, refer to:
- **README.md**: Project overview and quick start
- **ARCHITECTURE.md**: Design decisions and patterns
- **SETUP.md**: Development environment setup
