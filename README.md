# 👑 SUHAIMA COLIVING PG — Premium Managed Co-Living

[![Live Website](https://img.shields.io/badge/Live%20Website-suhaimacolivingpg.com-DAA520?style=for-the-badge&logo=googlechrome&logoColor=black)](https://suhaimacolivingpg.com/)
[![React Version](https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.0.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.2.2-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.38-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![ESLint](https://img.shields.io/badge/ESLint-0%20Errors%20|%200%20Warnings-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)

> **Official Website**: [https://suhaimacolivingpg.com/](https://suhaimacolivingpg.com/)  
> **Location**: Gollahalli Main Road, Near My Nest Apartment, Electronic City Phase 1, Bangalore 560100  
> **Contact / Booking Hotline**: [+91 91872 00607](https://wa.me/919187200607) | [suhaimacolivingpg@gmail.com](mailto:suhaimacolivingpg@gmail.com)

---

## 📖 Table of Contents
- [Executive Overview](#-executive-overview)
- [Live Deployment & Contact Info](#-live-deployment--contact-info)
- [Key Features & Engineering Highlights](#-key-features--engineering-highlights)
- [Brand Identity & Design System](#-brand-identity--design-system)
- [Project Architecture](#-project-architecture)
- [Room Inventory & Tariffs](#-room-inventory--tariffs)
- [Weekly Culinary Menu](#-weekly-culinary-menu)
- [Tech Stack](#-tech-stack)
- [Getting Started & Local Development](#-getting-started--local-development)
- [Quality Assurance & Verification](#-quality-assurance--verification)
- [Contributing & Maintenance](#-contributing--maintenance)

---

## 🌟 Executive Overview

**SUHAIMA COLIVING PG** is an ultra-modern, luxury co-living property engineered specifically for software engineers, IT executives, and corporate professionals working in **Electronic City, Bangalore**.

The platform provides a high-performance web experience featuring real-time room filtering, 360° interactive room previews, live daily meal schedules, instant WhatsApp booking dispatches, and transparent institutional tenancy policies.

---

## 🌐 Live Deployment & Contact Info

| Attribute | Details |
|---|---|
| **Production URL** | [https://suhaimacolivingpg.com/](https://suhaimacolivingpg.com/) |
| **Location** | Gollahalli Main Road, near My Nest Apartment, Electronic City, Bangalore 560100 |
| **GPS Coordinates** | `12°49'58.8"N, 77°39'25.1"E` ([View on Google Maps](https://www.google.com/maps/place/12%C2%B049'58.8%22N+77%C2%B039'25.1%22E/@12.8329949,77.6543828,855m)) |
| **WhatsApp Manager** | [+91 91872 00607](https://wa.me/919187200607?text=Hi%20SUHAIMA%20COLIVE%20PG) |
| **Support Email** | [suhaimacolivingpg@gmail.com](mailto:suhaimacolivingpg@gmail.com) |
| **Visiting Hours** | 09:00 AM – 09:00 PM Daily |

---

## 🚀 Key Features & Engineering Highlights

### 1. ⚡ Modular Home Architecture
- Refactored from a monolithic 764-line file into **7 self-contained, high-performance components** in `src/components/home/`:
  - `HeroSection.jsx` — Cinematic parallax hero with brand gradients, trust badges, and live statistics.
  - `HowItWorksSection.jsx` — 4-step interactive reservation roadmap.
  - `HomeAmenitiesSection.jsx` — 9-card bento grid of lifestyle inclusions.
  - `HomeRoomsSection.jsx` — Isolated `useMemo` multi-parameter filter state (Type, Price, AC, Availability).
  - `TestimonialsSection.jsx` — Swiper carousel showcasing verified resident reviews.
  - `FaqSection.jsx` — Smooth accordion with isolated animation state.
  - `HomeCtaSection.jsx` — Direct WhatsApp booking conversion banner.

### 2. 🍽️ Executive Dining with Dynamic Live Meal Status
- **Real-Time Meal Window Detector**: Automatically syncs with current local time:
  - *Breakfast*: 8:00 AM – 9:30 AM
  - *Lunch*: 1:00 PM – 2:30 PM
  - *Dinner*: 8:00 PM – 9:30 PM
- **Live Now Badge**: Pulses with a glowing fire icon when meal service is active.
- **Weekday Navigator**: Filter by any day or full week with a one-click shortcut to *Today's Menu*.
- **Dish Chips & Sunday Feast**: Individual dish pills with Ken Burns photo zoom and special feast highlights.

### 3. 🛋️ Modern Rooms with 360° Previews & Booking Modal
- **Visual Switcher**: Interactive thumbnail carousel with scale transitions.
- **Balanced Hierarchy**: Refined typography and glassmorphic starting-from badges.
- **Dynamic Spec Pages**: Deep links `/room/:id` reading from centralized `src/data/roomsData.js`.
- **Integrated Booking Modal**: Collects resident name, phone, check-in date, and generates formatted WhatsApp reservation dispatches.

### 4. 🖼️ Visual Experience Gallery
- **Masonry Layout**: Dynamic category tabs (`All`, `Bedrooms`, `Common Area`, `Dining`, `Balcony`, `Leisure`).
- **Enhanced Lightbox**: Fullscreen HD lightbox preview with backdrop blur and keyboard/click dismissal.
- **Physical Tour Action**: Pre-filled visit scheduling directly to WhatsApp.

### 5. 📨 Interactive Contact Hub
- **Direct Communication Channels**: Dedicated cards for WhatsApp, Call Desk, Email Support, Office Hours, and Google Maps.
- **Glassmorphic Inquiry Form**: Includes quick room chips (*Single Private*, *Double Sharing*, etc.), real-time validation, and automated WhatsApp dispatch.
- **Dark Mode Google Map**: Embedded interactive map with custom dark filter and animated bouncing pin.

### 6. 📜 Transparent Legal Policies
- **Privacy Policy** (`/privacy-policy`): Full disclosure on police tenant verification KYC, biometric data storage, 24/7 CCTV surveillance guarantees, and 90-day data expungement.
- **Terms of Service** (`/terms-of-service`): Transparent rent cycles (1st–5th), quiet hours (11:00 PM – 6:30 AM), guest guidelines, and maintenance SLAs.
- **Refund Policy** (`/refund-policy`): Visual 4-step move-out roadmap, 30-day notice rules, 24-hour token cancellation window, and 7–10 working day electronic NEFT settlement SLA.

---

## 🎨 Brand Identity & Design System

The visual design is grounded in an **Executive Obsidian & Metallic Gold** aesthetic:

```css
/* Core Brand Tokens */
--color-bg-primary: #0A0C10;     /* Deep Obsidian Black */
--color-bg-secondary: #161B22;   /* Card Surface */
--color-gold-primary: #DAA520;   /* Classic Gold */
--color-gold-light: #FFD700;     /* Metallic Highlight */
--color-gold-dark: #B8860B;      /* Bronze Shadow */
--color-text-main: #FFFFFF;      /* Pure White */
--color-text-muted: #94A3B8;     /* Slate Muted */
```

- **Brand Emblem**: Architectural "S" monogram interwoven with high-rise building silhouettes and a luxury crown dome canopy.
- **Vector Favicon**: Pixel-perfect scalable SVG at [`public/favicon.svg`](public/favicon.svg).
- **Reusable Brand Component**: [`BrandLogo.jsx`](src/components/common/BrandLogo.jsx) with interactive hover tilt and glow.

---

## 📁 Project Architecture

```text
pg/
├── index.html                   # Entry HTML with OpenGraph & SEO tags
├── vite.config.js               # Vite 8 config with Tailwind v4 plugin
├── eslint.config.js             # ESLint 9 configuration with React rules
├── package.json                 # Dependencies and npm scripts
├── public/
│   ├── favicon.svg              # Scalable gold architectural "S" icon
│   └── logo.jpg                 # 8K rendered luxury brand emblem
└── src/
    ├── main.jsx                 # Application entry point
    ├── App.jsx                  # React Router setup & global scroll restores
    ├── index.css                # Tailwind CSS imports & custom styles
    ├── assets/                  # High-res photography (rooms, food, common areas)
    ├── data/
    │   ├── menuData.js          # Weekly 7-day culinary menu data
    │   └── roomsData.js         # Centralized room inventory, pricing, & helper functions
    ├── components/
    │   ├── common/
    │   │   ├── BrandLogo.jsx    # Reusable SVG logo & animated typography
    │   │   ├── BookingModal.jsx # WhatsApp room inquiry modal
    │   │   ├── FilterBar.jsx    # Room filter controls
    │   │   ├── LocationMap.jsx  # Interactive map component
    │   │   └── RoomCard.jsx     # Animated room card
    │   ├── home/
    │   │   ├── HeroSection.jsx
    │   │   ├── HowItWorksSection.jsx
    │   │   ├── HomeAmenitiesSection.jsx
    │   │   ├── HomeRoomsSection.jsx
    │   │   ├── TestimonialsSection.jsx
    │   │   ├── FaqSection.jsx
    │   │   └── HomeCtaSection.jsx
    │   ├── shared/
    │   │   ├── Navbar.jsx       # Fixed header with mobile drawer & BrandLogo
    │   │   ├── Footer.jsx       # Global footer with links & BrandLogo
    │   │   └── SectionHeader.jsx# Reusable title with gold accent divider
    │   └── ui/                  # Radix UI primitive components (button, dialog, card, etc.)
    └── pages/
        ├── Home.jsx             # Modular Home composition
        ├── Rooms.jsx            # All rooms showcase with 360° indicators
        ├── RoomDetails.jsx      # Dynamic room spec page (:id)
        ├── Menu.jsx             # Executive Dining & live meal schedule
        ├── Gallery.jsx          # Masonry visual gallery with lightbox
        ├── Amenities.jsx        # Complete amenities bento grid
        ├── Contact.jsx          # Interactive contact hub with WhatsApp routing
        ├── PrivacyPolicy.jsx    # Responsive privacy agreement
        ├── TermsOfService.jsx   # Resident terms of stay
        └── RefundPolicy.jsx     # Security deposit & refund protocols
```

---

## 🛏️ Room Inventory & Tariffs

| Room Type | Sharing | Monthly Rent | Security Deposit | Key Highlights |
|---|---|---|---|---|
| **Executive Studio Suite** | Single Private | **₹18,000** | ₹25,000 | AC, Private Balcony, King Bed, Workstation |
| **Twin Sharing Suite** | Double Sharing | **₹11,000** | ₹15,000 | AC / Non-AC options, Orthopaedic Mattress, 2x Wardrobe |
| **Classic Sharing** | Triple Sharing | **₹8,500** | ₹10,000 | High-speed WiFi, Attached Bath, Individual Study Desks |
| **Premium Private Room** | Single Private | **₹16,000** | ₹20,000 | Non-AC, Large Window, Peaceful Garden View |

*All room rents include: 3 Daily Meals, High-Speed WiFi, Daily Housekeeping, Water, and Common Area Maintenance.*

---

## 🍲 Weekly Culinary Menu

Prepared using **100% commercial RO purified water** with strictly separate cookware for vegetarian and non-vegetarian menus:

| Day | Breakfast (8:00–9:30 AM) | Lunch (1:00–2:30 PM) | Dinner (8:00–9:30 PM) |
|---|---|---|---|
| **Monday** | Plain Dosa, Masala Dosa, Chutney | Steamed Rice, Sambar, Papad | Rice, Fresh Rotis, Dal, Sabji |
| **Tuesday** | Poori, Sagu, Veg Kurma | Steamed Rice, Dal Tadka, Sabji | Rice, Chole Bhature |
| **Wednesday** | Poha, Upma, Semiya | Rice, Sambar, Crisp Papad | Egg Rice / Veg Rice, Roti, Egg/Veg Gravy |
| **Thursday** | Steamed Idly, Sambar, Chutney | Rice, Dal Fry, Seasonal Sabji | Rice, Rasam, Satin Rajma, Rotis |
| **Friday** | Soft Chapati, Veg Gravy, Sabji | Rice, Sambar, Papad | Rice, Rotis, Egg Masala / Mushroom Masala |
| **Saturday** | Uttappam, Onion Dosa, Chutney | Steamed Rice, Dal, Papad | Veg Biryani, Raita, Sweet Treat / Jeera Rice |
| **Sunday** | Pasta, Hakka Noodles, Pongal | Steamed Rice, Sambar, Sabji, Papad | **Sunday Feast**: Chicken Biryani, Mushroom Biryani, Paneer Butter Masala, Rotis |

---

## 🛠️ Tech Stack

- **Core Framework**: [React 19](https://react.dev/) + [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Motion & Animations**: [Framer Motion 12](https://www.framer.com/motion/)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Carousels & Sliders**: [Swiper 12](https://swiperjs.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) primitives
- **Icons**: [React Icons (FontAwesome)](https://react-icons.github.io/react-icons/) + [Lucide React](https://lucide.dev/)
- **Code Quality**: [ESLint 9](https://eslint.org/) with Flat Config

---

## 💻 Getting Started & Local Development

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0 or higher recommended)
- `npm` or `pnpm` or `yarn`

### 1. Clone the Repository
```bash
git clone https://github.com/Satyam6201/SUHAIMA-COLIVE-PG-Website.git
cd SUHAIMA-COLIVE-PG-Website
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
The application will spin up at `http://localhost:5173/`.

### 4. Run Lint Audit
```bash
npm run lint
```
*Current status: 0 errors, 0 warnings.*

### 5. Build for Production
```bash
npm run build
```
Creates an optimized production bundle inside the `dist/` directory.

### 6. Preview Production Build
```bash
npm run preview
```

---

## 🧪 Quality Assurance & Verification

- **Lint Status**: Clean code audit passing ESLint 9 with zero errors and zero warnings.
- **Hooks Compliance**: Fully compliant with React 19 rules (zero state-in-effect issues, zero rules-of-hooks violations).
- **Responsive Testing**: Tested across iPhone, iPad, Android mobile, and 4K desktop breakpoints.
- **Production Build**: 100% successful compilation under Vite 8 with code splitting and optimized assets.

---

## 📄 License & Attribution

All rights reserved © 2026 **SUHAIMA COLIVING PG**.  
Designed and built for modern co-living in Bangalore. For inquiries, visit [https://suhaimacolivingpg.com/](https://suhaimacolivingpg.com/).
