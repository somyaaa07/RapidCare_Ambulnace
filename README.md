# 🚑 RapidCare Ambulance Services — Landing Page

A premium, fully responsive ambulance service landing page built with **React.js** and **Tailwind CSS**.

---

## 🎨 Tech Stack

- **React 18** (Vite + functional components)
- **Tailwind CSS v3** (utility-first styling)
- **DM Sans** — Google Fonts (premium typography)

---

## 📁 Project Structure

```
rapidcare/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    └── components/
        ├── Navbar.jsx          # Sticky navbar with mobile menu
        ├── Hero.jsx            # Full-screen hero with overlay + CTAs
        ├── Welcome.jsx         # About section (2-column layout)
        ├── Services.jsx        # 4 service cards with hover animation
        ├── Fleet.jsx           # 6-card fleet grid with overlay effect
        ├── WhyUs.jsx           # 6 feature points on navy background
        ├── Testimonials.jsx    # 3 customer review cards
        ├── CTA.jsx             # Emergency call-to-action section
        ├── Footer.jsx          # 4-column footer
        └── FloatingButtons.jsx # Floating call + WhatsApp buttons
```

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production

```bash
npm run build
```

### 4. Preview Production Build

```bash
npm run preview
```

---

## 🎯 Features

- ✅ **Sticky Navbar** with smooth scroll links + mobile hamburger menu
- ✅ **Hero Section** with full-screen background, gradient overlay, and animated badge
- ✅ **Welcome / About** with floating stat badges and feature grid
- ✅ **Services** — 4 cards with image zoom on hover
- ✅ **Fleet** — 6-card grid with overlay reveal on hover
- ✅ **Why Choose Us** — 6 points on dark navy background
- ✅ **Testimonials** — 3 review cards with star ratings
- ✅ **CTA Section** — Emergency dispatch with animated pulse badge
- ✅ **Footer** — 4-column with links, contact, and social icons
- ✅ **Floating Buttons** — Pulsing call button (left) + WhatsApp (right)
- ✅ **Smooth scroll**, **CSS animations**, **hover micro-interactions**
- ✅ **Fully responsive** — mobile, tablet, desktop

---

## 🎨 Color Palette

| Name        | Hex       |
|-------------|-----------|
| Red         | `#E11D2E` |
| Navy Dark   | `#0B1F3A` |
| Navy Darker | `#060f1e` |
| White       | `#ffffff` |
| Light Gray  | `#f7f8fa` |

---

## 📞 Customize

Replace all phone numbers and WhatsApp links with your real numbers:

- Search for `tel:+911234567890` → replace with your number
- Search for `wa.me/911234567890` → replace with your WhatsApp number
- Update company name, address, and email in `Footer.jsx`

---

## 📸 Images

All images are sourced from **Unsplash** via URL. To use your own:
1. Replace the `src` URLs in each component with your image paths
2. Place images in `public/images/` and reference as `/images/your-image.jpg`
