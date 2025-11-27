# Layout Component Usage Guide

This guide shows how to use the layout system components in your pages.

## Layout (Root)

The root layout is already wired in `src/app/layout.tsx`. All pages automatically inherit the header and footer.

```typescript
// src/app/layout.tsx
import { Layout } from '@/components/layout'
import { defaultHeaderConfig, defaultFooterConfig } from '@/config/layout.config'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout
          headerProps={defaultHeaderConfig}
          footerProps={defaultFooterConfig}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
```

## Header

The header is automatically included via the root layout. To customize:

```typescript
import { Header } from '@/components/layout'

<Header
  logo={{ text: 'University Name', alt: 'Logo' }}
  primaryMenu={[
    {
      label: 'Academics',
      href: '/academics',
      children: [
        { label: 'Programs', href: '/programs' },
        { label: 'Faculty', href: '/faculty' }
      ]
    }
  ]}
  ctaButtons={[
    { label: 'Apply', href: '/apply', variant: 'primary' }
  ]}
  sticky={true}
/>
```

## Footer

The footer is automatically included via the root layout. To customize:

```typescript
import { Footer } from '@/components/layout'

<Footer
  logo={{ text: 'University Name' }}
  sections={[
    {
      title: 'Academics',
      links: [
        { label: 'Programs', href: '/programs' },
        { label: 'Departments', href: '/departments' }
      ]
    }
  ]}
  contactInfo={{
    address: '123 University Ave',
    phone: '(555) 123-4567',
    email: 'info@university.edu'
  }}
  socialLinks={[...]}
  complianceText="Accredited by..."
/>
```

## Hero

Use the Hero component for page headers:

```typescript
import { Hero } from '@/components/layout'

// Basic hero
<Hero
  title="Welcome to Our University"
  subtitle="Excellence in education since 1950"
  size="large"
  align="center"
/>

// Hero with background image
<Hero
  title="About Us"
  subtitle="Our story and mission"
  size="medium"
  backgroundImage="/images/campus.jpg"
  overlay={true}
>
  <div className="flex gap-4 mt-8">
    <Link href="/apply" className="px-8 py-3 bg-white...">
      Apply Now
    </Link>
  </div>
</Hero>
```

### Props
- `title` (string): Main heading
- `subtitle` (string): Subheading text
- `size` ('small' | 'medium' | 'large'): Controls padding/height
- `align` ('left' | 'center'): Text alignment
- `backgroundImage` (string): Background image URL
- `overlay` (boolean): Adds dark overlay over background image
- `children` (ReactNode): Additional content (buttons, etc.)

## Section

Use the Section component to wrap page content:

```typescript
import { Section } from '@/components/layout'

<Section
  title="Our Programs"
  subtitle="Choose from a wide variety of programs"
  spacing="large"
  background="gray"
>
  {/* Your content here */}
</Section>
```

### Props
- `title` (string): Optional section title
- `subtitle` (string): Optional section subtitle
- `spacing` ('small' | 'medium' | 'large'): Vertical padding
- `background` ('white' | 'gray' | 'primary' | 'secondary'): Background color
- `children` (ReactNode): Section content

### Spacing Values
- `small`: 2rem mobile, 3rem desktop
- `medium`: 3rem mobile, 4-5rem desktop
- `large`: 4rem mobile, 6rem desktop

## Grid

Use the Grid component for responsive layouts:

```typescript
import { Grid, GridItem } from '@/components/layout'

// Basic 3-column grid
<Grid cols={{ mobile: 1, tablet: 2, desktop: 3 }} gap="medium">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Grid>

// Grid with custom spans
<Grid cols={{ mobile: 1, tablet: 2, desktop: 4 }}>
  <GridItem span={{ mobile: 1, desktop: 2 }}>
    Wide item
  </GridItem>
  <GridItem>Normal item</GridItem>
  <GridItem>Normal item</GridItem>
</Grid>
```

### Grid Props
- `cols`: Column configuration per breakpoint
  - `mobile`: 1 | 2
  - `tablet`: 2 | 3 | 4
  - `desktop`: 2 | 3 | 4 | 5 | 6
- `gap` ('small' | 'medium' | 'large'): Space between items

### GridItem Props
- `span`: How many columns to span per breakpoint
  - `mobile`: 1 | 2
  - `tablet`: 1 | 2 | 3 | 4
  - `desktop`: 1 | 2 | 3 | 4 | 5 | 6

## Complete Page Example

```typescript
import { Hero, Section, Grid } from '@/components/layout'

export default function MyPage() {
  return (
    <>
      {/* Hero section */}
      <Hero
        title="Page Title"
        subtitle="Page description"
        size="medium"
        align="center"
      >
        <Link href="/cta" className="btn-primary">
          Call to Action
        </Link>
      </Hero>

      {/* Content section */}
      <Section
        title="Features"
        subtitle="What we offer"
        spacing="large"
        background="white"
      >
        <Grid cols={{ mobile: 1, tablet: 2, desktop: 3 }} gap="large">
          <div className="card">Feature 1</div>
          <div className="card">Feature 2</div>
          <div className="card">Feature 3</div>
        </Grid>
      </Section>

      {/* Another section */}
      <Section spacing="large" background="gray">
        <p>More content...</p>
      </Section>
    </>
  )
}
```

## Design Tokens

Use design tokens for consistent styling:

```typescript
import { designTokens } from '@/lib/design-tokens'

// Colors
designTokens.colors.brand.primary    // #0284c7
designTokens.colors.text.primary     // #0f172a
designTokens.colors.background.primary // #ffffff

// Spacing
designTokens.spacing.containerPadding.desktop // 2rem
designTokens.spacing.sectionSpacing.large     // 6rem

// Breakpoints
designTokens.breakpoints.mobile   // 640px
designTokens.breakpoints.desktop  // 1024px
```

## Utilities

Use the `cn()` utility for conditional classes:

```typescript
import { cn } from '@/lib/utils'

<div className={cn(
  'base-class',
  isActive && 'active-class',
  'another-class'
)}>
  Content
</div>
```

## Customization Tips

1. **Customize colors**: Edit `tailwind.config.ts` to change the color palette
2. **Adjust spacing**: Modify design tokens in `src/lib/design-tokens.ts`
3. **Change breakpoints**: Update Tailwind config and design tokens
4. **Add logo**: Pass `logo.src` prop to Header/Footer components
5. **Modify menus**: Edit `src/config/layout.config.tsx`

## Responsive Design

All components follow mobile-first design:

```typescript
// Mobile: Default styling
// Tablet: md: prefix (768px+)
// Desktop: lg: prefix (1024px+)

<div className="
  px-4           /* Mobile: 1rem padding */
  md:px-6        /* Tablet: 1.5rem padding */
  lg:px-8        /* Desktop: 2rem padding */
  
  grid-cols-1    /* Mobile: 1 column */
  md:grid-cols-2 /* Tablet: 2 columns */
  lg:grid-cols-3 /* Desktop: 3 columns */
">
```

## Best Practices

1. ✅ Always use Hero for page headers
2. ✅ Wrap content in Section components
3. ✅ Use Grid for multi-column layouts
4. ✅ Follow design tokens for consistency
5. ✅ Test on multiple screen sizes
6. ✅ Use semantic HTML (h1, h2, etc.)
7. ✅ Add proper alt text for images
8. ✅ Ensure links are descriptive
