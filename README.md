# 🏢 SUHAIMA COLIVING PG — Premium Living Website

[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.0.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.2.2-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.38.0-black?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Swiper](https://img.shields.io/badge/Swiper-12.1.3-6332F6?style=for-the-badge&logo=swiper&logoColor=white)](https://swiperjs.com/)
[![License](https://img.shields.io/badge/License-Private-amber?style=for-the-badge)](#)

> **Suhaima Coliving PG** is a luxury coliving accommodation website tailored for working professionals and students in **Electronic City, Bangalore**. Built with a sleek dark aesthetic accented with luxury gold tones (`#0A0C10` and `#DAA520`), the website delivers an immersive web experience with interactive room tours, live weekly dining menus, filterable photo galleries, and instant WhatsApp booking integration.

---

## 📑 Table of Contents

- [✨ Key Features](#-key-features)
- [🛋️ Room Categories & Pricing](#️-room-categories--pricing)
- [🍽️ Dining Experience](#️-dining-experience)
- [⚡ World-Class Amenities](#-world-class-amenities)
- [💻 Tech Stack](#-tech-stack)
- [📁 Project Structure](#-project-structure)
- [🚀 Getting Started](#-getting-started)
- [🌐 Routes & Navigation](#-routes--navigation)
- [📍 Location & Contact](#-location--contact)
- [📜 Policies & Terms](#-policies--terms)

---

## ✨ Key Features

- **Luxury Gold & Obsidian UI**: Premium glassmorphism effects, custom ambient light glows, and fluid micro-animations powered by Tailwind CSS v4 and Framer Motion.
- **Dynamic Weekly Menu Tracker**: Full 7-day culinary schedule featuring breakfast, lunch, and dinner. Automatically highlights **"Serving Today"** with real-time day tracking and filter tabs.
- **Interactive Room Showcase**:
  - Multi-angle room photography switchers with 360° preview badges.
  - Dedicated room detail breakdown (`/room/:id`) with transparent security deposit and maintenance policies.
  - Interactive sharing and budget filter bar.
- **Responsive Masonry Gallery**: Filterable photo gallery with categories (Bedrooms, Lounge, Balcony, Work Zone, Facilities, Leisure Deck) and lightbox view.
- **Seamless WhatsApp & Direct Booking**: One-click deep-link WhatsApp booking with prefilled inquiry messages, phone calling, and interactive inquiry modals.
- **Resident Reviews & Testimonial Carousel**: Touch-friendly Swiper slider featuring verified resident reviews with rating stars and profile highlights.
- **Mobile-First Sticky Quick Action Bar**: Fixed floating bottom bar on mobile screens for instant calling, WhatsApp messaging, and emailing.
- **Interactive Google Maps Embed**: High-contrast dark-mode Google Map integration with directions link.

---

## 🛋️ Room Categories & Pricing

| Room Type | Sharing | Price (INR) | Key Features |
| :--- | :--- | :--- | :--- |
| **The Elite Single** | Single (Private) | **₹13,000 / mo** | Attached Balcony, Private Workstation, King Bed, Luxury Privacy |
| **Premium Double** | Double Sharing | **₹7,500 / mo** | Spacious Storage, Individual Desks, Twin Beds, Task Lighting |
| **Executive Triple** | Triple Sharing | **₹6,500 / mo** | Extra Storage, Lounge Access, High Ceilings, AC / Non-AC |

*Note: Fully furnished rooms with ergonomic setups, high-speed WiFi, daily housekeeping, and electricity calculated via sub-meter.*

---

## 🍽️ Dining Experience

Suhaima provides hygienic, home-style North and South Indian meals prepared with balanced nutrition:

- **Breakfast**: 8:00 AM – 9:30 AM *(Dosa, Poori Sagu, Poha, Idly Sambar, Oil Chapati, Uttappam, Pasta/Pongal)*
- **Lunch**: 1:00 PM – 2:30 PM *(Steamed Rice, Sambar, Dal, Sabji, Papad)*
- **Dinner**: 8:00 PM – 9:30 PM *(Rotis, Paneer/Mushroom Masala, Chole Bhature, Egg Curry, Chicken Biryani on Sundays)*
- **Live Day Highlight**: Automatic detection of today's menu on the `/menu` page.

---

## ⚡ World-Class Amenities

### Core Facilities
- 📶 **High-Speed WiFi**: Dual-band Gigabit internet with 99.9% uptime for WFH & streaming.
- 🍲 **Chef-Curated Meals**: Fresh home-style breakfast, lunch, and dinner served daily.
- 🛡️ **Fortified Security**: 24/7 CCTV surveillance, biometric entry, and secure premises.
- 🛋️ **Designer Lounges**: Air-conditioned common areas with comfortable seating and working zones.

### Standard Inclusions
- ⚡ **100% DG Power Backup** (No power cuts during work hours)
- 🏍️ **Dedicated Vehicle Parking** (Bikes and cars)
- 🧹 **Daily Housekeeping & Cleaning**
- 🪟 **Ventilated Rooms with Balconies**
- 📺 **Smart Entertainment & Lounge Areas**
- 🏋️ **Fitness Corner & Sky Deck Leisure Area**
- 💧 **RO Purified Drinking Water**
- ☕ **24/7 Self-Service Cafe Area**

---

## 💻 Tech Stack

### Frontend & Core
- **Framework**: [React 19](https://react.dev/) (`react`, `react-dom` v19.2.4)
- **Build Tool**: [Vite 8](https://vitejs.dev/) (`@vitejs/plugin-react` v6)
- **Routing**: [React Router v7](https://reactrouter.com/) (`react-router-dom` v7.14.1)

### Styling & Animation
- **CSS Framework**: [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite`
- **Animations**: [Framer Motion](https://www.framer.com/motion/) (`framer-motion` v12.38.0)
- **Sliders & Carousels**: [Swiper](https://swiperjs.com/) (`swiper` v12.1.3)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) (`react-icons/fa`) & [Lucide React](https://lucide.dev/)
- **CSS Utilities**: `clsx`, `tailwind-merge`

### UI Components
- **Radix UI Primitives**: Dialog, Select, Label, Slot
- **Material UI**: `@mui/material`, `@emotion/react`, `@emotion/styled`

---

## 📁 Project Structure

```text
pg/
├── public/                     # Static public assets (favicons, etc.)
├── src/
│   ├── assets/                 # Room images, meal pictures, balcony, lounge & roof photos
│   ├── components/
│   │   ├── common/             # Common reusable components
│   │   │   ├── AmenityIcon.jsx     # Amenity icon wrapper
│   │   │   ├── BookingModal.jsx    # Inquiry & reservation modal dialog
│   │   │   ├── FilterBar.jsx       # Room sharing & budget filter bar
│   │   │   ├── GalleryGrid.jsx     # Masonry layout grid
│   │   │   ├── LocationMap.jsx     # Map component wrapper
│   │   │   ├── RoomCard.jsx        # Room summary card
│   │   │   └── TestimonialCard.jsx # Resident review card
│   │   ├── shared/             # Layout & navigation components
│   │   │   ├── Navbar.jsx          # Glassmorphic header with navigation links
│   │   │   ├── Footer.jsx          # Footer with social links, contact info, and legal links
│   │   │   ├── MobileNav.jsx       # Mobile drawer navigation
│   │   │   ├── PageWrapper.jsx     # Framer Motion page transition wrapper
│   │   │   └── SectionHeader.jsx   # Section titles & subtitle headings
│   │   └── ui/                 # Atomic UI components (shadcn/ui inspired)
│   │       ├── badge.jsx
│   │       ├── button.jsx
│   │       ├── card.jsx
│   │       ├── dialog.jsx
│   │       ├── input.jsx
│   │       ├── label.jsx
│   │       ├── select.jsx
│   │       ├── skeleton.jsx
│   │       └── textarea.jsx
│   ├── data/
│   │   └── menuData.js         # 7-day culinary menu data (breakfast, lunch, dinner)
│   ├── lib/
│   │   └── utils.js            # Tailwind merge & clsx helper (`cn`)
│   ├── pages/                  # Page routes
│   │   ├── Home.jsx            # Landing page with hero, perks, rooms, reviews & FAQs
│   │   ├── Rooms.jsx           # Detailed room catalogs with 360 view & pricing
│   │   ├── RoomDetails.jsx     # Individual room detail view with cost breakdown
│   │   ├── Gallery.jsx         # HD photography gallery with category filters
│   │   ├── Amenities.jsx       # Bento-style amenities presentation
│   │   ├── Menu.jsx            # Interactive weekly food menu
│   │   ├── Contact.jsx         # Contact form, direct call/WhatsApp info, & embedded map
│   │   ├── PrivacyPolicy.jsx   # Tenant data collection & privacy terms
│   │   ├── TermsOfService.jsx  # Resident rules, conduct, and payment guidelines
│   │   └── RefundPolicy.jsx    # Deposit refund and notice period policies
│   ├── App.jsx                 # Main application routes & layout wrapper
│   ├── index.css               # Tailwind CSS imports, custom utilities, & animations
│   └── main.jsx                # React root entry point
├── eslint.config.js            # ESLint flat configuration
├── index.html                  # HTML entry point with metadata
├── package.json                # Dependencies, scripts, and project metadata
└── vite.config.js              # Vite configuration with React & Tailwind plugins
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (version **18.x** or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) / [pnpm](https://pnpm.io/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Satyam6201/SUHAIMA-COLIVE-PG-Website.git
   cd SUHAIMA-COLIVE-PG-Website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`.

### Production Build

To build the static files for production deployment:
```bash
npm run build
```

To preview the built production site locally:
```bash
npm run preview
```

### Linting
To check code quality and linting errors:
```bash
npm run lint
```

---

## 🌐 Routes & Navigation

| Route | Page Component | Description |
| :--- | :--- | :--- |
| `/` | `Home.jsx` | Main landing page: Hero, How It Works, Amenities preview, Rooms showcase, Testimonials, FAQ |
| `/rooms` | `Rooms.jsx` | Full catalog of single, double, and triple sharing rooms with interactive photo switchers |
| `/room/:id` | `RoomDetails.jsx` | Detailed single room view with amenities list, deposit details, and booking modal |
| `/gallery` | `Gallery.jsx` | High-definition image gallery with category filter buttons & lightbox |
| `/amenities` | `Amenities.jsx` | Bento-grid showcasing all standard and premium amenities |
| `/menu` | `Menu.jsx` | 7-day culinary menu schedule with meal filters and "Serving Today" tracker |
| `/contact` | `Contact.jsx` | Direct phone/WhatsApp links, inquiry contact form, and Google Map |
| `/privacy` | `PrivacyPolicy.jsx` | Legal privacy documentation and tenant verification details |
| `/terms` | `TermsOfService.jsx` | Community rules, payment terms, and resident code of conduct |
| `/refund` | `RefundPolicy.jsx` | Security deposit return policy and 30-day notice guidelines |

---

## 📍 Location & Contact

- **Property**: SUHAIMA COLIVING PG
- **Address**: Gollahalli Main Road, Near My Nest Apartment, Electronic City, Bangalore, Karnataka — 560100
- **Phone**: [+91 91872 00607](tel:+919187200607) / [+91 91872 00608](tel:+919187200608)
- **WhatsApp**: [+91 91872 00607](https://wa.me/919187200607?text=Hi%20I%20am%20interested%20in%20SUHAIMA%20COLIVE%20PG)
- **Email**: [suhaimacolivingpg@gmail.com](mailto:suhaimacolivingpg@gmail.com)
- **Office Hours**: 09:00 AM – 09:00 PM (Daily)
- **Google Maps**: [View on Google Maps](https://www.google.com/maps/place/12%C2%B049'58.8%22N+77%C2%B039'25.1%22E/@12.8329949,77.6543828,855m)

---

## 📜 Policies & Terms

- **Notice Period**: Mandatory 30-day advance notice before vacating.
- **Security Deposit**: Fully refundable via bank transfer within 7–10 working days after move-out clearance.
- **Rent Due Date**: 5th of every month (grace period until the 7th).
- **Electricity**: Billed per actual sub-meter consumption.
- **Community Conduct**: Decorum must be maintained; unauthorized visitors after 8:00 PM and smoking inside rooms are strictly prohibited.

---

## 👤 Author & Credits

- **Website Developed for**: [SUHAIMA COLIVING PG](https://github.com/Satyam6201/SUHAIMA-COLIVE-PG-Website)
- **Repository**: [Satyam6201/SUHAIMA-COLIVE-PG-Website](https://github.com/Satyam6201/SUHAIMA-COLIVE-PG-Website)
