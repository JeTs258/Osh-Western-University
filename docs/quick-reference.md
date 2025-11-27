# Quick Reference Guide - Osh-Western University Website

## 🎯 Project Summary

**Goal**: Adapt nodeloc/edu reference repository for Osh-Western University with multilingual support (RU/EN/ZH)

**Reference**: [nodeloc/edu on GitHub](https://github.com/nodeloc/edu)

**Status**: Architecture documented, ready for implementation

---

## 📊 Key Differences at a Glance

| Feature | Reference (NodeLoc) | Target (Osh-Western) |
|---------|-------------------|---------------------|
| Languages | English only | Russian (default), English, Chinese |
| Location | Serbia (.edu.rs) | Kyrgyzstan (.kg) |
| Tailwind | CDN (default) | Custom config with brand colors |
| Structure | Flat (root level) | Multi-directory (by language) |
| Fonts | System defaults | PT Sans, Noto Sans SC |
| Build | None | Tailwind CLI for production |

---

## 🚀 Quick Start Commands

```bash
# 1. Study reference (already done)
cd /tmp
git clone https://github.com/nodeloc/edu.git nodeloc-edu

# 2. Setup project
cd /home/engine/project
npm init -y
npm install -D tailwindcss

# 3. Initialize Tailwind
npx tailwindcss init

# 4. Create structure
mkdir -p ru en zh js images src dist

# 5. Development
npm run dev   # Watch mode
npm run build # Production build
```

---

## 📁 Directory Structure

```
osh-western-university/
├── docs/
│   ├── architecture.md       # Full architecture (836 lines)
│   └── quick-reference.md    # This file
├── ru/                       # Russian (default)
├── en/                       # English
├── zh/                       # Chinese (中文)
├── js/                       # JavaScript
├── images/                   # Assets
├── src/input.css             # Tailwind source
├── dist/output.css           # Compiled CSS
├── tailwind.config.js        # Config
├── .gitignore
├── README.md
└── index.html                # Root redirect
```

---

## 🎨 Tailwind Configuration Template

```javascript
// tailwind.config.js
module.exports = {
  content: ["./**/*.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: { 500: '#0073e6', 600: '#005bb3' },
        kyrgyz: { red: '#EE1C25', yellow: '#FFCE00' }
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'system-ui'],
        cyrillic: ['PT Sans', 'Roboto'],
        chinese: ['Noto Sans SC', 'sans-serif']
      }
    }
  }
}
```

---

## 🌐 Language Switcher Snippet

```html
<div class="language-switcher flex items-center space-x-2">
  <a href="/ru/" class="lang-link hover:text-primary-600">РУ</a>
  <span class="text-gray-400">|</span>
  <a href="/en/" class="lang-link hover:text-primary-600">EN</a>
  <span class="text-gray-400">|</span>
  <a href="/zh/" class="lang-link hover:text-primary-600">中文</a>
</div>
```

---

## 🔤 Font Loading

```html
<!-- In <head> -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Noto+Sans+SC:wght@400;500;700&display=swap" rel="stylesheet">
```

---

## 🔍 SEO Hreflang Template

```html
<!-- Add to <head> of each page -->
<html lang="ru">
<head>
  <link rel="alternate" hreflang="ru" href="https://osh-western.kg/ru/index.html" />
  <link rel="alternate" hreflang="en" href="https://osh-western.kg/en/index.html" />
  <link rel="alternate" hreflang="zh" href="https://osh-western.kg/zh/index.html" />
  <link rel="alternate" hreflang="x-default" href="https://osh-western.kg/ru/index.html" />
</head>
```

---

## 🎯 Core Pages Required

### Minimum Viable Website

1. **Homepage** (`index.html`)
   - Hero with university name
   - Stats section
   - Program highlights
   - CTA section

2. **About** (`about.html`)
   - Mission & vision
   - History
   - Accreditation
   - Leadership

3. **Academics** (`academics.html`)
   - Program listings
   - Faculties/departments
   - Degree types

4. **Admissions** (`admissions.html`)
   - Requirements
   - Application process
   - Deadlines
   - Tuition fees

5. **Contact** (`contact.html`)
   - Contact form
   - Location & map
   - Office hours
   - Social media

### Additional Pages (Phase 2)

- Faculty profiles
- Student life
- Research
- News/events
- International students
- Alumni

---

## 🎨 Common Tailwind Patterns from Reference

### Navigation
```html
<nav class="bg-white shadow-lg fixed w-full top-0 z-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Navigation content -->
  </div>
</nav>
```

### Hero Section
```html
<section class="pt-24 pb-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <h1 class="text-4xl md:text-6xl font-bold mb-6">Title</h1>
    <!-- Hero content -->
  </div>
</section>
```

### Content Cards
```html
<div class="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition">
  <!-- Card content -->
</div>
```

### Footer
```html
<footer class="bg-gray-900 text-gray-300 py-12">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid md:grid-cols-4 gap-8">
      <!-- Footer columns -->
    </div>
  </div>
</footer>
```

---

## 📝 Content Localization Checklist

### For Each Page

- [ ] Create RU version in `/ru/`
- [ ] Create EN version in `/en/`
- [ ] Create ZH version in `/zh/`
- [ ] Add hreflang tags
- [ ] Set correct `lang` attribute
- [ ] Translate all text content
- [ ] Translate alt text for images
- [ ] Translate meta tags (title, description)
- [ ] Test layout with all languages
- [ ] Verify no text overflow

---

## 🧪 Testing Checklist

### Multilingual
- [ ] All pages load in RU/EN/ZH
- [ ] Language switcher works
- [ ] Fonts render correctly
- [ ] No layout breaks

### Responsive
- [ ] Mobile (320px - 767px)
- [ ] Tablet (768px - 1023px)
- [ ] Desktop (1024px+)

### Browsers
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

### Performance
- [ ] Lighthouse score 90+
- [ ] Load time < 3s
- [ ] Fonts optimized
- [ ] Images optimized

---

## 🚀 Deployment Options

### Netlify (Recommended)
```bash
npm install -g netlify-cli
netlify init
netlify deploy --prod
```

### Vercel
```bash
npm install -g vercel
vercel
```

### GitHub Pages
1. Push to GitHub
2. Settings → Pages → Enable
3. Select branch and root

---

## 📊 Key Metrics to Track

- Page views by language
- Popular pages
- Application conversions
- Bounce rate
- Load time
- Mobile vs desktop traffic

---

## 🎯 Brand Guidelines

### Colors
- **Primary Blue**: `#0073e6`
- **Accent Orange**: `#ff6b35`
- **Kyrgyz Red**: `#EE1C25` (use sparingly)
- **Kyrgyz Yellow**: `#FFCE00` (use sparingly)

### Typography
- **Headings**: Bold, large (4xl-6xl)
- **Body**: Regular, readable (base-lg)
- **CTA Buttons**: Semibold, clear

### Spacing
- **Sections**: `py-12 md:py-16 lg:py-20`
- **Container**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- **Grid Gap**: `gap-8` or `gap-12`

---

## 🔧 Maintenance Tasks

### Weekly
- [ ] Check for broken links
- [ ] Review analytics
- [ ] Update news/events

### Monthly
- [ ] Update dependencies
- [ ] Performance audit
- [ ] Content review
- [ ] Backup data

### Quarterly
- [ ] Security audit
- [ ] SEO review
- [ ] User feedback analysis
- [ ] Feature planning

---

## 📚 Resources

- **Full Architecture**: `/docs/architecture.md` (836 lines)
- **Project README**: `/README.md` (357 lines)
- **Reference Repo**: https://github.com/nodeloc/edu
- **Tailwind Docs**: https://tailwindcss.com/docs
- **Font Awesome**: https://fontawesome.com/icons

---

## 🎓 Key Terms Translations

| English | Russian | Chinese |
|---------|---------|---------|
| University | Университет | 大学 |
| Faculty | Факультет | 学院 |
| Bachelor's | Бакалавр | 学士 |
| Master's | Магистр | 硕士 |
| Admission | Прием | 招生 |
| Contact | Контакты | 联系 |
| About | О нас | 关于 |

---

## ⚡ Next Steps

1. ✅ **Architecture documented** (Complete)
2. **Setup project structure**
   - Create directories (ru, en, zh, js, images)
   - Initialize npm and Tailwind
   - Configure tailwind.config.js
3. **Create base templates**
   - Navigation component
   - Footer component
   - Page template structure
4. **Content creation**
   - Write/translate content
   - Add images
   - Implement forms
5. **Testing & optimization**
6. **Launch**

---

**For detailed information, always refer to `/docs/architecture.md`**
