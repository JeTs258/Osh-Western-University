# Reference Architecture: NodeLoc/Edu Stack → Osh-Western Portal

## Executive Summary

This document captures the reference architecture of the NodeLoc/Edu stack—a lightweight, static-first web application pattern—and provides explicit guidance for adapting it to the Osh-Western portal requirements. The stack emphasizes simplicity, performance, and maintainability through vanilla technologies and reusable component patterns.

---

## 1. Technology Stack

### Core Technologies

| Layer | Technology | Version/Approach | Rationale |
|-------|-----------|------------------|-----------|
| **Markup** | Static HTML5 | Semantic, accessible markup | Zero build step, SEO-friendly, fast delivery |
| **Styling** | Tailwind CSS | CDN v3.x (JIT via Play CDN) | Rapid prototyping, consistent design tokens, no build required |
| **Scripting** | Vanilla JavaScript | ES6+ modules | No framework lock-in, minimal dependencies, excellent performance |
| **Icons** | Heroicons / Lucide | Inline SVG or CDN | Scalable, customizable, matches Tailwind ecosystem |
| **Hosting** | Static file server | Nginx, Apache, or CDN | Simple deployment, high availability, caching-friendly |

### Dependencies

```html
<!-- Tailwind CSS via Play CDN (development/prototyping) -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- Optional: Production recommendation -->
<!-- Build with Tailwind CLI for optimized bundle -->
```

**Note**: For production deployments, transition from CDN to a compiled Tailwind bundle to eliminate unused CSS (~90% size reduction typical).

---

## 2. UI Design System

### 2.1 Color Tokens

The NodeLoc/Edu stack uses Tailwind's semantic color system. Key mappings:

| Purpose | Tailwind Classes | Hex Values (Default) | Usage |
|---------|-----------------|---------------------|--------|
| **Primary** | `blue-600`, `blue-700` | #2563EB, #1D4ED8 | CTAs, links, active states |
| **Secondary** | `gray-600`, `gray-700` | #4B5563, #374151 | Body text, secondary buttons |
| **Success** | `green-600`, `green-700` | #16A34A, #15803D | Success messages, positive metrics |
| **Warning** | `yellow-500`, `yellow-600` | #EAB308, #CA8A04 | Alerts, pending states |
| **Danger** | `red-600`, `red-700` | #DC2626, #B91C1C | Errors, destructive actions |
| **Background** | `white`, `gray-50`, `gray-100` | #FFFFFF, #F9FAFB, #F3F4F6 | Page backgrounds, cards |
| **Borders** | `gray-200`, `gray-300` | #E5E7EB, #D1D5DB | Dividers, card edges |

#### Osh-Western Customization

Override Tailwind config for brand alignment:

```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        'osh-primary': '#003D5B',    // Deep teal (institutional)
        'osh-secondary': '#F89820',  // Vibrant orange (accent)
        'osh-tertiary': '#5C7F8A',   // Muted blue-gray
      }
    }
  }
}
```

### 2.2 Typography Scale

| Element | Tailwind Classes | Properties | Use Cases |
|---------|-----------------|------------|-----------|
| **Display** | `text-4xl lg:text-5xl font-bold` | 36px→48px, 700 weight | Page titles, hero headlines |
| **H1** | `text-3xl lg:text-4xl font-bold` | 30px→36px, 700 weight | Section headers |
| **H2** | `text-2xl lg:text-3xl font-semibold` | 24px→30px, 600 weight | Subsection headers |
| **H3** | `text-xl lg:text-2xl font-semibold` | 20px→24px, 600 weight | Card headers, module titles |
| **Body** | `text-base` | 16px, 400 weight | Default paragraph text |
| **Small** | `text-sm` | 14px, 400 weight | Metadata, captions |
| **Tiny** | `text-xs` | 12px, 400 weight | Labels, footnotes |

**Line Heights**: Use `leading-tight` (1.25) for headings, `leading-relaxed` (1.625) for body text.

**Font Stack**: System fonts via Tailwind default (`font-sans`):
```
-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
```

### 2.3 Spacing System

Follows Tailwind's 4px base scale:

| Token | Pixels | Typical Usage |
|-------|--------|---------------|
| `space-y-2` | 8px | Tight vertical rhythm (form fields) |
| `space-y-4` | 16px | Standard component spacing |
| `space-y-6` | 24px | Section spacing within containers |
| `space-y-8` | 32px | Major section breaks |
| `space-y-12` | 48px | Hero to content transition |
| `space-y-16` | 64px | Full page sections |

**Container Padding**: `px-4 md:px-6 lg:px-8` (16px → 24px → 32px)

---

## 3. Layout Patterns

### 3.1 Page Structure Hierarchy

```
<body>
  └── <div class="min-h-screen flex flex-col">
       ├── <nav>              <!-- Global navigation -->
       ├── <main class="flex-1">
       │    ├── <section class="hero">      <!-- Optional hero -->
       │    ├── <section class="content">   <!-- Main content -->
       │    └── <section class="...">       <!-- Additional sections -->
       └── <footer>           <!-- Global footer -->
  └── <button id="back-to-top"> <!-- Scroll utility -->
```

### 3.2 Navigation Pattern

**Desktop**: Horizontal nav with dropdowns
**Mobile**: Hamburger menu with slide-in drawer

```html
<nav class="bg-white border-b border-gray-200 sticky top-0 z-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-16">
      <!-- Logo -->
      <div class="flex-shrink-0">
        <a href="/" class="text-xl font-bold text-blue-600">Brand</a>
      </div>
      
      <!-- Desktop Nav -->
      <div class="hidden md:flex space-x-8">
        <a href="#" class="text-gray-700 hover:text-blue-600">Link</a>
      </div>
      
      <!-- Mobile Toggle -->
      <button id="mobile-menu-btn" class="md:hidden">
        <svg><!-- Hamburger icon --></svg>
      </button>
    </div>
  </div>
  
  <!-- Mobile Menu -->
  <div id="mobile-menu" class="hidden md:hidden">
    <div class="px-2 pt-2 pb-3 space-y-1">
      <a href="#" class="block px-3 py-2 text-gray-700">Link</a>
    </div>
  </div>
</nav>
```

**Key Features**:
- Sticky positioning (`sticky top-0`)
- Responsive breakpoint at `md:` (768px)
- Accessible markup (ARIA labels on mobile toggle)

### 3.3 Hero Section Pattern

```html
<section class="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
    <div class="max-w-3xl">
      <h1 class="text-4xl lg:text-5xl font-bold mb-6">
        Hero Headline
      </h1>
      <p class="text-xl lg:text-2xl mb-8 text-blue-100">
        Supporting subheadline or value proposition
      </p>
      <div class="flex flex-col sm:flex-row gap-4">
        <a href="#" class="btn-primary">Primary CTA</a>
        <a href="#" class="btn-secondary">Secondary CTA</a>
      </div>
    </div>
  </div>
</section>
```

**Variants**:
- **Full-height**: Add `min-h-screen items-center flex`
- **With image**: Use `grid md:grid-cols-2` for split layout
- **Overlay**: Background image with `bg-cover bg-center` + gradient overlay

### 3.4 Stats Section Pattern

```html
<section class="bg-white py-16">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      <div>
        <div class="text-4xl font-bold text-blue-600">2,500+</div>
        <div class="text-gray-600 mt-2">Metric Label</div>
      </div>
      <!-- Repeat stat blocks -->
    </div>
  </div>
</section>
```

**Usage**: KPIs, social proof, institutional metrics

### 3.5 Card Grid Pattern

```html
<section class="bg-gray-50 py-16">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
        <div class="text-blue-600 mb-4">
          <svg class="w-12 h-12"><!-- Icon --></svg>
        </div>
        <h3 class="text-xl font-semibold mb-2">Card Title</h3>
        <p class="text-gray-600 mb-4">Card description text</p>
        <a href="#" class="text-blue-600 font-medium">Learn more →</a>
      </div>
      <!-- Repeat cards -->
    </div>
  </div>
</section>
```

**Responsive Grid**:
- Mobile: 1 column (default)
- Tablet: 2 columns (`md:grid-cols-2`)
- Desktop: 3 columns (`lg:grid-cols-3`)

### 3.6 Table Pattern

```html
<div class="overflow-x-auto">
  <table class="min-w-full divide-y divide-gray-200">
    <thead class="bg-gray-50">
      <tr>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Column Header
        </th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-200">
      <tr class="hover:bg-gray-50">
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
          Cell Content
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

**Features**:
- Horizontal scroll on mobile (`overflow-x-auto`)
- Hover states for row interactivity
- Zebra striping: Add `even:bg-gray-50` to `<tr>`

### 3.7 Responsive Container System

**Max-Width Containers**:
```html
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <!-- Content constrained to 1280px with responsive padding -->
</div>
```

**Breakpoints**:
| Name | Min Width | Usage |
|------|-----------|-------|
| `sm` | 640px | Phone landscape |
| `md` | 768px | Tablet portrait |
| `lg` | 1024px | Tablet landscape, small desktop |
| `xl` | 1280px | Desktop |
| `2xl` | 1536px | Large desktop |

---

## 4. JavaScript Behaviors

### 4.1 Mobile Menu Toggle

```javascript
// File: js/mobile-menu.js
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  menuBtn?.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    
    // Accessibility: Update aria-expanded
    const isExpanded = !mobileMenu.classList.contains('hidden');
    menuBtn.setAttribute('aria-expanded', isExpanded);
  });
  
  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!menuBtn?.contains(e.target) && !mobileMenu?.contains(e.target)) {
      mobileMenu?.classList.add('hidden');
      menuBtn?.setAttribute('aria-expanded', 'false');
    }
  });
});
```

### 4.2 Smooth Scrolling

```javascript
// File: js/smooth-scroll.js
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    
    if (target) {
      const offsetTop = target.offsetTop - 80; // Account for sticky nav
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});
```

### 4.3 Back-to-Top Button

```javascript
// File: js/back-to-top.js
document.addEventListener('DOMContentLoaded', () => {
  const backToTopBtn = document.getElementById('back-to-top');
  
  // Show button after scrolling 300px
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn?.classList.remove('hidden');
    } else {
      backToTopBtn?.classList.add('hidden');
    }
  });
  
  // Scroll to top on click
  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
```

**HTML Markup**:
```html
<button id="back-to-top" 
        class="hidden fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition z-50"
        aria-label="Back to top">
  <svg class="w-6 h-6"><!-- Up arrow icon --></svg>
</button>
```

### 4.4 Form Validation (Example)

```javascript
// File: js/form-validation.js
function validateForm(formId) {
  const form = document.getElementById(formId);
  
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    const errors = [];
    
    // Example: Email validation
    const email = formData.get('email');
    if (email && !isValidEmail(email)) {
      errors.push('Invalid email address');
    }
    
    if (errors.length > 0) {
      displayErrors(errors);
    } else {
      // Submit form data
      submitForm(formData);
    }
  });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
```

### 4.5 Module Loading Pattern

**Recommended Structure**:
```
js/
├── main.js              # Entry point, loads all modules
├── mobile-menu.js       # Mobile navigation
├── smooth-scroll.js     # Smooth scrolling
├── back-to-top.js       # Back-to-top button
├── form-validation.js   # Form handling
└── utils.js             # Shared utilities
```

**main.js**:
```javascript
// Import all modules
import './mobile-menu.js';
import './smooth-scroll.js';
import './back-to-top.js';
import './form-validation.js';
```

---

## 5. Shared Component Library

### 5.1 Button Styles

```html
<!-- Primary Button -->
<button class="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition shadow-md hover:shadow-lg">
  Primary Action
</button>

<!-- Secondary Button -->
<button class="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium border-2 border-blue-600 hover:bg-blue-50 transition">
  Secondary Action
</button>

<!-- Outline Button -->
<button class="bg-transparent text-gray-700 px-6 py-3 rounded-lg font-medium border border-gray-300 hover:bg-gray-50 transition">
  Outline Action
</button>

<!-- Danger Button -->
<button class="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition">
  Delete
</button>
```

### 5.2 Input Fields

```html
<!-- Text Input -->
<div class="mb-4">
  <label for="field-id" class="block text-sm font-medium text-gray-700 mb-2">
    Field Label
  </label>
  <input type="text" 
         id="field-id" 
         name="field-name"
         class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
         placeholder="Enter value">
</div>

<!-- Select Dropdown -->
<select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
  <option>Option 1</option>
</select>

<!-- Textarea -->
<textarea class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" rows="4"></textarea>
```

### 5.3 Alert/Message Boxes

```html
<!-- Success Alert -->
<div class="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
  <div class="flex items-start">
    <svg class="w-5 h-5 text-green-500 mr-3"><!-- Icon --></svg>
    <p class="text-green-700">Success message</p>
  </div>
</div>

<!-- Error Alert -->
<div class="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
  <div class="flex items-start">
    <svg class="w-5 h-5 text-red-500 mr-3"><!-- Icon --></svg>
    <p class="text-red-700">Error message</p>
  </div>
</div>

<!-- Info Alert -->
<div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
  <div class="flex items-start">
    <svg class="w-5 h-5 text-blue-500 mr-3"><!-- Icon --></svg>
    <p class="text-blue-700">Info message</p>
  </div>
</div>
```

### 5.4 Modal/Dialog Pattern

```html
<div id="modal" class="hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
  <div class="bg-white rounded-lg max-w-md w-full p-6">
    <div class="flex justify-between items-start mb-4">
      <h3 class="text-xl font-semibold">Modal Title</h3>
      <button id="close-modal" class="text-gray-400 hover:text-gray-600">
        <svg class="w-6 h-6"><!-- X icon --></svg>
      </button>
    </div>
    <div class="mb-6">
      <p class="text-gray-600">Modal content</p>
    </div>
    <div class="flex justify-end gap-3">
      <button class="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">Cancel</button>
      <button class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Confirm</button>
    </div>
  </div>
</div>
```

### 5.5 Badge/Tag Component

```html
<span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
  Badge Text
</span>

<!-- Status Badges -->
<span class="badge-success">Active</span>
<span class="badge-warning">Pending</span>
<span class="badge-danger">Inactive</span>
```

---

## 6. Osh-Western Portal Adaptation

### 6.1 Portal Architecture Overview

The Osh-Western portal extends the NodeLoc/Edu stack to support authenticated user workflows, data modules, and administrative dashboards. Key adaptations:

1. **Session Management**: Add JWT-based authentication layer
2. **Dynamic Data Loading**: Fetch API for AJAX interactions
3. **State Management**: localStorage/sessionStorage for client-side state
4. **Component Modularity**: Reusable Web Components for complex widgets

### 6.2 Page Lineup and Mapping

| Portal Module | NodeLoc/Edu Pattern | Osh-Western Specific Requirements |
|---------------|---------------------|----------------------------------|
| **Landing Page** | Hero + Stats + Card Grid | Add institution branding, program highlights, quick actions |
| **Dashboard** | Stats + Card Grid + Tables | Real-time data widgets, personalized metrics, notification center |
| **Data Browser** | Table + Pagination | Advanced filtering, search, export to CSV/Excel, column sorting |
| **Report Viewer** | Card + Table hybrid | Chart.js/D3.js integration, print-friendly layout, PDF export |
| **User Profile** | Form + Card layout | Avatar upload, preference management, activity log |
| **Admin Panel** | Table + Forms + Modals | User management, permission controls, audit logs |
| **Help/Docs** | Content sections + TOC | Searchable documentation, video embeds, FAQ accordion |

### 6.3 Portal-Specific Components

#### Dashboard Widget Card

```html
<div class="bg-white rounded-lg shadow-md p-6">
  <div class="flex justify-between items-start mb-4">
    <div>
      <h3 class="text-lg font-semibold text-gray-900">Widget Title</h3>
      <p class="text-sm text-gray-500">Last updated: 2 min ago</p>
    </div>
    <button class="text-gray-400 hover:text-gray-600">
      <svg class="w-5 h-5"><!-- Settings icon --></svg>
    </button>
  </div>
  
  <div class="space-y-3">
    <!-- Metric rows -->
    <div class="flex justify-between">
      <span class="text-gray-600">Metric Label</span>
      <span class="font-semibold text-gray-900">Value</span>
    </div>
  </div>
  
  <div class="mt-4 pt-4 border-t border-gray-200">
    <a href="#" class="text-blue-600 text-sm font-medium hover:text-blue-700">
      View details →
    </a>
  </div>
</div>
```

#### Data Table with Actions

```html
<div class="bg-white rounded-lg shadow-md overflow-hidden">
  <div class="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
    <h3 class="text-lg font-semibold">Data Table</h3>
    <div class="flex gap-2">
      <input type="search" 
             placeholder="Search..." 
             class="px-3 py-2 border border-gray-300 rounded-md text-sm">
      <button class="px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
        Add New
      </button>
    </div>
  </div>
  
  <div class="overflow-x-auto">
    <table class="min-w-full divide-y divide-gray-200">
      <!-- Table markup from section 3.6 -->
    </table>
  </div>
  
  <div class="px-6 py-4 border-t border-gray-200 flex justify-between items-center">
    <div class="text-sm text-gray-600">
      Showing 1-10 of 100 results
    </div>
    <div class="flex gap-2">
      <button class="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">Previous</button>
      <button class="px-3 py-1 bg-blue-600 text-white rounded text-sm">1</button>
      <button class="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">2</button>
      <button class="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">Next</button>
    </div>
  </div>
</div>
```

#### Sidebar Navigation (Portal Layout)

```html
<div class="flex h-screen bg-gray-100">
  <!-- Sidebar -->
  <aside class="w-64 bg-white border-r border-gray-200 hidden lg:block">
    <div class="p-6">
      <h2 class="text-xl font-bold text-blue-600">Osh-Western</h2>
    </div>
    <nav class="px-4 space-y-1">
      <a href="#" class="flex items-center px-4 py-3 text-gray-700 bg-blue-50 border-r-4 border-blue-600 font-medium">
        <svg class="w-5 h-5 mr-3"><!-- Icon --></svg>
        Dashboard
      </a>
      <a href="#" class="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900">
        <svg class="w-5 h-5 mr-3"><!-- Icon --></svg>
        Data Browser
      </a>
      <!-- More nav items -->
    </nav>
  </aside>
  
  <!-- Main Content Area -->
  <div class="flex-1 flex flex-col overflow-hidden">
    <!-- Top Bar -->
    <header class="bg-white border-b border-gray-200 px-6 py-4">
      <div class="flex justify-between items-center">
        <h1 class="text-2xl font-semibold">Page Title</h1>
        <div class="flex items-center gap-4">
          <button class="text-gray-400 hover:text-gray-600">
            <svg class="w-6 h-6"><!-- Notification icon --></svg>
          </button>
          <div class="flex items-center gap-3">
            <img src="avatar.jpg" alt="User" class="w-8 h-8 rounded-full">
            <span class="text-sm font-medium">Username</span>
          </div>
        </div>
      </div>
    </header>
    
    <!-- Scrollable Content -->
    <main class="flex-1 overflow-y-auto p-6">
      <!-- Page content -->
    </main>
  </div>
</div>
```

### 6.4 Data Module Integration Patterns

#### Fetch API Pattern for Data Loading

```javascript
// File: js/data-loader.js
async function fetchData(endpoint, options = {}) {
  try {
    const response = await fetch(endpoint, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getAuthToken()}`
      },
      ...options
    });
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Data fetch error:', error);
    showNotification('Failed to load data', 'error');
    throw error;
  }
}

// Usage example
async function loadDashboardData() {
  const data = await fetchData('/api/dashboard/metrics');
  renderMetrics(data);
}
```

#### Client-Side State Management

```javascript
// File: js/state-manager.js
class StateManager {
  constructor() {
    this.state = this.loadState();
  }
  
  loadState() {
    const saved = localStorage.getItem('app-state');
    return saved ? JSON.parse(saved) : {};
  }
  
  setState(key, value) {
    this.state[key] = value;
    localStorage.setItem('app-state', JSON.stringify(this.state));
    this.notify(key, value);
  }
  
  getState(key) {
    return this.state[key];
  }
  
  notify(key, value) {
    window.dispatchEvent(new CustomEvent('state-change', {
      detail: { key, value }
    }));
  }
}

const state = new StateManager();
```

#### Table Filtering and Sorting

```javascript
// File: js/table-utils.js
function setupTableSorting(tableId) {
  const table = document.getElementById(tableId);
  const headers = table.querySelectorAll('th[data-sortable]');
  
  headers.forEach(header => {
    header.style.cursor = 'pointer';
    header.addEventListener('click', () => {
      const column = header.dataset.column;
      const currentSort = header.dataset.sort || 'none';
      const newSort = currentSort === 'asc' ? 'desc' : 'asc';
      
      sortTable(table, column, newSort);
      
      // Update header indicators
      headers.forEach(h => h.classList.remove('sorted-asc', 'sorted-desc'));
      header.classList.add(`sorted-${newSort}`);
      header.dataset.sort = newSort;
    });
  });
}

function sortTable(table, column, direction) {
  const tbody = table.querySelector('tbody');
  const rows = Array.from(tbody.querySelectorAll('tr'));
  
  rows.sort((a, b) => {
    const aVal = a.querySelector(`td[data-column="${column}"]`)?.textContent || '';
    const bVal = b.querySelector(`td[data-column="${column}"]`)?.textContent || '';
    
    return direction === 'asc' 
      ? aVal.localeCompare(bVal)
      : bVal.localeCompare(aVal);
  });
  
  rows.forEach(row => tbody.appendChild(row));
}
```

### 6.5 Authentication Flow

```javascript
// File: js/auth.js
class AuthManager {
  constructor() {
    this.token = this.getToken();
  }
  
  getToken() {
    return localStorage.getItem('auth-token');
  }
  
  setToken(token) {
    localStorage.setItem('auth-token', token);
    this.token = token;
  }
  
  clearToken() {
    localStorage.removeItem('auth-token');
    this.token = null;
  }
  
  isAuthenticated() {
    return !!this.token;
  }
  
  async login(credentials) {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials)
    });
    
    if (response.ok) {
      const { token } = await response.json();
      this.setToken(token);
      return true;
    }
    return false;
  }
  
  logout() {
    this.clearToken();
    window.location.href = '/login.html';
  }
}

const auth = new AuthManager();

// Protect pages
if (!auth.isAuthenticated() && !window.location.pathname.includes('login')) {
  window.location.href = '/login.html';
}
```

### 6.6 Responsive Dashboard Layout

**Mobile-First Approach**:
- **Mobile**: Single column, stacked widgets
- **Tablet**: 2-column grid
- **Desktop**: 3-column grid with sidebar

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <!-- Dashboard widgets -->
</div>
```

**Widget Prioritization**:
Use `order-*` utilities to reorder widgets on mobile:

```html
<div class="order-1 md:order-1">Critical Widget</div>
<div class="order-3 md:order-2">Secondary Widget</div>
<div class="order-2 md:order-3">Less Important Widget</div>
```

---

## 7. File Structure Conventions

### 7.1 Recommended Project Structure

```
osh-western-portal/
├── index.html                 # Landing page
├── dashboard.html             # Main dashboard
├── login.html                 # Authentication
├── css/
│   ├── custom.css             # Custom utility classes
│   └── print.css              # Print-specific styles
├── js/
│   ├── main.js                # Entry point
│   ├── auth.js                # Authentication
│   ├── mobile-menu.js         # Mobile navigation
│   ├── smooth-scroll.js       # Smooth scrolling
│   ├── back-to-top.js         # Back-to-top button
│   ├── data-loader.js         # API interactions
│   ├── state-manager.js       # Client state
│   ├── table-utils.js         # Table sorting/filtering
│   └── utils.js               # Shared utilities
├── assets/
│   ├── images/
│   ├── icons/
│   └── logos/
├── docs/
│   └── reference-architecture.md
└── README.md
```

### 7.2 HTML Template Boilerplate

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Page description for SEO">
  <title>Page Title | Osh-Western Portal</title>
  
  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            'osh-primary': '#003D5B',
            'osh-secondary': '#F89820',
          }
        }
      }
    }
  </script>
  
  <!-- Custom CSS -->
  <link rel="stylesheet" href="css/custom.css">
  
  <!-- Favicon -->
  <link rel="icon" type="image/png" href="assets/favicon.png">
</head>
<body class="min-h-screen bg-gray-50">
  
  <!-- Navigation -->
  <nav><!-- Navigation markup --></nav>
  
  <!-- Main Content -->
  <main class="flex-1">
    <!-- Page content -->
  </main>
  
  <!-- Footer -->
  <footer><!-- Footer markup --></footer>
  
  <!-- Back to Top Button -->
  <button id="back-to-top" class="hidden"><!-- Button markup --></button>
  
  <!-- JavaScript -->
  <script src="js/main.js" type="module"></script>
</body>
</html>
```

---

## 8. Performance and Accessibility Guidelines

### 8.1 Performance Best Practices

1. **Minimize CDN Usage in Production**: Compile Tailwind CSS to reduce bundle size
2. **Lazy Load Images**: Use `loading="lazy"` attribute
3. **Defer Non-Critical JS**: Use `defer` or `async` attributes
4. **Optimize Images**: Use WebP format, appropriate sizing
5. **Enable Caching**: Set appropriate cache headers for static assets
6. **Minimize Reflows**: Batch DOM manipulations

### 8.2 Accessibility (WCAG 2.1 AA Compliance)

1. **Semantic HTML**: Use proper heading hierarchy, landmarks
2. **Keyboard Navigation**: Ensure all interactive elements are keyboard-accessible
3. **ARIA Labels**: Add `aria-label`, `aria-expanded`, `aria-controls` where needed
4. **Color Contrast**: Maintain 4.5:1 ratio for normal text, 3:1 for large text
5. **Focus Indicators**: Use Tailwind's `focus:ring-2` for visible focus states
6. **Alt Text**: Provide descriptive alt text for images
7. **Form Labels**: Associate all form inputs with `<label>` elements

### 8.3 Browser Support

**Target**: Modern browsers (last 2 versions)
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile Safari iOS 14+
- Chrome Android 90+

**Polyfills** (if needed):
- Fetch API: `whatwg-fetch`
- Promises: `promise-polyfill`

---

## 9. Deployment and Build Process

### 9.1 Development Workflow

1. **Local Development**: Use Live Server or Python's SimpleHTTPServer
   ```bash
   python3 -m http.server 8000
   ```

2. **Tailwind Compilation** (for production):
   ```bash
   # Install Tailwind CLI
   npm install -D tailwindcss
   
   # Generate config
   npx tailwindcss init
   
   # Build CSS
   npx tailwindcss -i ./css/input.css -o ./css/output.css --minify
   ```

3. **Version Control**: Git with feature branches
   - `main`: Production-ready code
   - `develop`: Integration branch
   - `feature/*`: Individual features

### 9.2 Production Deployment

**Static Hosting Options**:
- Nginx/Apache server
- AWS S3 + CloudFront
- Netlify / Vercel
- GitHub Pages

**Pre-Deploy Checklist**:
- [ ] Replace Tailwind CDN with compiled CSS
- [ ] Minify JavaScript files
- [ ] Optimize and compress images
- [ ] Set up proper cache headers
- [ ] Configure HTTPS
- [ ] Test on target browsers
- [ ] Validate HTML/CSS
- [ ] Run accessibility audit (Lighthouse)

---

## 10. Testing and Quality Assurance

### 10.1 Testing Checklist

**Functional Testing**:
- [ ] All navigation links work
- [ ] Forms submit and validate correctly
- [ ] JavaScript behaviors function (mobile menu, smooth scroll, back-to-top)
- [ ] Modal/dialog interactions work
- [ ] Table sorting and filtering work
- [ ] Authentication flow works (login, logout, protected routes)

**Responsive Testing**:
- [ ] Test on mobile (375px, 414px)
- [ ] Test on tablet (768px, 1024px)
- [ ] Test on desktop (1280px, 1920px)
- [ ] Test landscape and portrait orientations
- [ ] Verify touch interactions on mobile

**Cross-Browser Testing**:
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile Safari
- [ ] Chrome Android

**Performance Testing**:
- [ ] Lighthouse score > 90
- [ ] First Contentful Paint < 1.5s
- [ ] Time to Interactive < 3s
- [ ] No layout shifts (CLS < 0.1)

**Accessibility Testing**:
- [ ] Keyboard navigation works throughout
- [ ] Screen reader compatibility (NVDA, JAWS, VoiceOver)
- [ ] Color contrast meets WCAG AA
- [ ] Focus indicators visible
- [ ] ARIA attributes used correctly

### 10.2 Tools

- **Lighthouse**: Performance and accessibility audits
- **WAVE**: Web accessibility evaluation
- **axe DevTools**: Automated accessibility testing
- **BrowserStack**: Cross-browser testing
- **Chrome DevTools**: Responsive design mode, performance profiling

---

## 11. Maintenance and Evolution

### 11.1 Versioning Strategy

Use Semantic Versioning for major releases:
- **MAJOR**: Breaking changes to component structure
- **MINOR**: New features, backward-compatible
- **PATCH**: Bug fixes, minor improvements

### 11.2 Documentation Updates

Update this reference architecture when:
- New components are added
- Design tokens change
- JavaScript patterns evolve
- Portal requirements expand

### 11.3 Component Library Evolution

Consider transitioning to Web Components for reusable widgets:

```javascript
class DashboardWidget extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  
  connectedCallback() {
    this.render();
  }
  
  render() {
    this.shadowRoot.innerHTML = `
      <style>/* Scoped styles */</style>
      <div class="widget">/* Widget markup */</div>
    `;
  }
}

customElements.define('dashboard-widget', DashboardWidget);
```

---

## 12. Migration Path: NodeLoc/Edu → Osh-Western

### 12.1 Phase 1: Static Pages (Weeks 1-2)

- [ ] Set up project structure
- [ ] Create HTML templates with Tailwind
- [ ] Implement navigation and footer
- [ ] Build landing page (hero, stats, cards)
- [ ] Add smooth scrolling, back-to-top

**Deliverable**: Static landing page, about page, contact page

### 12.2 Phase 2: Portal Layout (Weeks 3-4)

- [ ] Build sidebar navigation layout
- [ ] Create dashboard page structure
- [ ] Implement dashboard widgets
- [ ] Add responsive mobile navigation
- [ ] Create login page

**Deliverable**: Portal shell with navigation

### 12.3 Phase 3: Data Integration (Weeks 5-7)

- [ ] Implement authentication system
- [ ] Build data loader utilities
- [ ] Create data browser page with tables
- [ ] Add table sorting and filtering
- [ ] Implement pagination

**Deliverable**: Functional data browser

### 12.4 Phase 4: Advanced Features (Weeks 8-10)

- [ ] Add report viewer with charts
- [ ] Build user profile page
- [ ] Create admin panel
- [ ] Implement file upload/download
- [ ] Add export functionality (CSV, PDF)

**Deliverable**: Complete portal with all modules

### 12.5 Phase 5: Polish and Launch (Weeks 11-12)

- [ ] Performance optimization
- [ ] Accessibility audit and fixes
- [ ] Cross-browser testing
- [ ] User acceptance testing
- [ ] Production deployment

**Deliverable**: Production-ready Osh-Western portal

---

## 13. Appendix: Code Snippets

### 13.1 Tailwind Configuration for Osh-Western

```javascript
// tailwind.config.js
module.exports = {
  content: ['./**/*.html', './js/**/*.js'],
  theme: {
    extend: {
      colors: {
        'osh-primary': '#003D5B',
        'osh-secondary': '#F89820',
        'osh-tertiary': '#5C7F8A',
        'osh-neutral': '#F5F5F5',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 8px 16px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
}
```

### 13.2 Utility Functions

```javascript
// js/utils.js

// Debounce function for search inputs
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Format date
export function formatDate(date, format = 'short') {
  const options = format === 'long' 
    ? { year: 'numeric', month: 'long', day: 'numeric' }
    : { year: 'numeric', month: '2-digit', day: '2-digit' };
  return new Date(date).toLocaleDateString('en-US', options);
}

// Format number with commas
export function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Show notification
export function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.classList.add('fade-out');
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}
```

---

## 14. References and Resources

### 14.1 External Documentation

- **Tailwind CSS**: https://tailwindcss.com/docs
- **MDN Web Docs**: https://developer.mozilla.org/
- **WCAG 2.1 Guidelines**: https://www.w3.org/WAI/WCAG21/quickref/
- **Heroicons**: https://heroicons.com/

### 14.2 Design Inspiration

- **Tailwind UI**: https://tailwindui.com/ (premium components)
- **Flowbite**: https://flowbite.com/ (open-source components)
- **Headless UI**: https://headlessui.com/ (accessible components)

### 14.3 Tools and Validators

- **HTML Validator**: https://validator.w3.org/
- **CSS Validator**: https://jigsaw.w3.org/css-validator/
- **Lighthouse**: Built into Chrome DevTools
- **WAVE**: https://wave.webaim.org/

---

## Conclusion

This reference architecture provides a comprehensive blueprint for adapting the NodeLoc/Edu stack to the Osh-Western portal. By following the patterns, components, and guidelines outlined here, developers can build a consistent, performant, and accessible web application that meets institutional requirements while maintaining the simplicity and elegance of the static-first approach.

**Key Takeaways**:
1. **Simplicity First**: Leverage static HTML + Tailwind + vanilla JS for maximum performance
2. **Component Reusability**: Use consistent patterns for navigation, cards, tables, forms
3. **Progressive Enhancement**: Start with static pages, add interactivity incrementally
4. **Accessibility**: Bake in WCAG compliance from the start
5. **Scalability**: Modular JavaScript allows easy extension to portal features

For questions or updates to this architecture, contact the development team or submit a pull request with proposed changes.
