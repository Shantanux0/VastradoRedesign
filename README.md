# 🪷 Vastrado - Premium Indian Fashion E-Commerce

A modern, cinematic redesign of Vastrado's e-commerce platform, celebrating authentic Indian heritage through contemporary web design.

[![Live Demo](https://img.shields.io/badge/demo-live-success)](http://192.168.29.128:5174/)
[![Built with React](https://img.shields.io/badge/React-18.3-blue)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6)](https://www.typescriptlang.org/)

## ✨ Features

### 🎨 Design Philosophy
- **Cinematic Experience**: Smooth transitions, elegant animations, and parallax effects
- **Indian Heritage**: Color palette inspired by traditional textiles (terracotta, gold, cream)
- **Premium Aesthetics**: Sophisticated typography with Cormorant Garamond serif and Outfit sans-serif
- **Mobile-First**: Fully responsive design with touch-optimized interactions

### 🛍️ Core Functionality
- **Interactive Shop**: Product filtering, hover effects, and smooth transitions
- **Collections Gallery**: Curated collections with hover-to-color reveals
- **Search Modal**: Real-time product search with demo data
- **Shopping Cart**: Fully functional cart sidebar with quantity controls
- **User Profile**: Comprehensive account dashboard with orders, addresses, and settings
- **Brand Story**: Immersive storytelling with parallax sections

### 🎯 Interactive Elements
- **Animated Hamburger Menu**: Smooth morphing navigation with brand showcase
- **Scroll-to-Top Button**: Minimalist design with subtle animations
- **Search Integration**: Quick access from both desktop and mobile
- **Profile Navigation**: Tabbed interface for account management

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Shantanux0/VastradoRedesign.git

# Navigate to project directory
cd VastradoRedesign

# Install dependencies
npm install

# Start development server
npm run dev

# For network access (local + IP)
npm run dev -- --host
```

The application will be available at:
- Local: `http://localhost:5173`
- Network: `http://[your-ip]:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## 🏗️ Tech Stack

### Core
- **React 18.3** - UI framework
- **TypeScript 5.6** - Type safety
- **Vite 6.0** - Build tool & dev server
- **React Router DOM** - Client-side routing

### Styling & Animation
- **Vanilla CSS** - Custom design system with CSS variables
- **Framer Motion** - Animation library
- **Lenis** - Smooth scrolling

### Icons & UI
- **Lucide React** - Icon library

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   └── Navbar.tsx          # Main navigation with scroll effects
│   ├── modals/
│   │   ├── SearchModal.tsx     # Product search interface
│   │   ├── CartSidebar.tsx     # Shopping cart sidebar
│   │   └── ProfileModal.tsx    # User profile modal
│   ├── sections/
│   │   ├── Hero.tsx            # Landing hero section
│   │   ├── Categories.tsx      # Product categories
│   │   ├── FeaturedProducts.tsx
│   │   ├── FabricTexture.tsx   # Parallax section
│   │   ├── EverydayLife.tsx    # Lifestyle section
│   │   ├── BrandStory.tsx      # Heritage story
│   │   └── Footer.tsx
│   ├── Hamburger.tsx           # Animated menu icon
│   ├── ScrollToTop.tsx         # Auto scroll on route change
│   └── ScrollToTopButton.tsx   # Manual scroll button
├── pages/
│   ├── Home.tsx                # Landing page
│   ├── Shop.tsx                # Product catalog
│   ├── Collections.tsx         # Curated collections
│   ├── Story.tsx               # Brand story page
│   └── Profile.tsx             # User account dashboard
├── assets/                     # Images and static files
├── index.css                   # Global styles & design system
├── App.tsx                     # Main app component
└── main.tsx                    # Entry point
```

## 🎨 Design System

### Color Palette
```css
--color-bg: #F5F2EB      /* Warm paper / Raw Silk */
--color-text: #3E3B36    /* Deep Earthy Gray */
--color-accent: #6B4E3D  /* Terracotta/Brick */
--color-gold: #A89F91    /* Muted Gold/Beige */
```

### Typography
- **Headings**: Cormorant Garamond (serif)
- **Body**: Outfit (sans-serif)

### Animations
- Smooth page transitions
- Hover effects on products
- Parallax scrolling
- Staggered entrance animations
- Micro-interactions throughout

## 📱 Pages

1. **Home** - Hero, categories, featured products, fabric texture, lifestyle, story
2. **Shop All** - Filterable product catalog
3. **Collections** - Curated product collections with hover effects
4. **Story** - Brand heritage and values
5. **Profile** - User dashboard with orders, addresses, settings

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Key Features to Test
- Navbar scroll effects (transparent → solid background)
- Mobile menu with branded footer
- Search functionality
- Cart operations (add, remove, quantity)
- Profile tabs (orders, addresses, settings)
- Scroll-to-top button
- Collection hover effects (B&W → Color)

## 🌟 Highlights

- **Performance**: Optimized with Vite's lightning-fast HMR
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation
- **SEO**: Proper meta tags and structured content
- **Responsive**: Breakpoints at 768px with mobile-first approach
- **Smooth UX**: Lenis scroll, Framer Motion animations
- **Demo Mode**: Fully functional with realistic demo data

## 📄 License

This is a redesign project for educational and portfolio purposes.

## 👨‍💻 Developer

**Shantanu Kale**
- GitHub: [@Shantanux0](https://github.com/Shantanux0)

---

*Rooted in Tradition, Woven with Love* 🪷
