# 🎈 Decor Joy Gurgaon — Frontend

> **"Your Celebration. Our Creation."**  
> Gurugram's premier event and party decoration styling service, operating since 2021.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React Router](https://img.shields.io/badge/React_Router-7-CA4245?logo=reactrouter&logoColor=white)](https://reactrouter.com/)
[![TanStack Query](https://img.shields.io/badge/TanStack_Query-5-FF4154?logo=reactquery&logoColor=white)](https://tanstack.com/query)
[![Frontend Only](https://img.shields.io/badge/Scope-Frontend%20Only-orange)](/)

---

> ⚠️ **Note:** This repository contains **only the frontend** of the Decor Joy Gurgaon project.  
> The backend (Express.js + MongoDB Atlas) was developed separately and is **not included** here.  
> **Frontend developed by: Ansh Bhola**

---

## 👨‍💻 About This Project

This is the **React frontend** I built for **Decor Joy Gurgaon**, a real event decoration business in Gurugram, Haryana. The client needed a modern, mobile-first website to showcase their decoration portfolio, take event inquiries, and allow customers to browse and wishlist decoration packages.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React 19** | UI library |
| **Vite 8** | Build tool & dev server |
| **React Router v7** | Client-side routing & SSR-ready navigation |
| **TanStack Query v5** | Server state management, caching & refetching |
| **Axios** | HTTP client for API calls |
| **Vanilla CSS** | All custom styling (no Tailwind / Bootstrap) |
| **Playwright** | End-to-end testing |
| **Sentry** | Error monitoring |

---

## 📁 Project Structure

```
client/
├── src/
│   ├── pages/           # All route-level pages
│   │   ├── Home.jsx
│   │   ├── Shop.jsx
│   │   ├── Services.jsx
│   │   ├── Gallery.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── PlanMyEvent.jsx
│   │   ├── ProductDetail.jsx
│   │   └── LocalityPage.jsx
│   ├── components/      # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── GalleryCard.jsx
│   │   ├── PurposeForm.jsx
│   │   ├── WishlistModal.jsx
│   │   ├── SearchAutocomplete.jsx
│   │   ├── ProductQuickViewModal.jsx
│   │   ├── WhatsAppButton.jsx
│   │   ├── Toast.jsx
│   │   ├── SEO.jsx
│   │   └── ...more
│   ├── hooks/           # Custom React hooks
│   ├── services/        # Axios API service layer
│   ├── context/         # React context providers
│   ├── styles/          # Global & shared CSS
│   ├── utils/           # Helper utilities
│   ├── data/            # Static/seed data
│   └── App.jsx          # Root component & routes
├── public/              # Static assets
├── e2e/                 # Playwright E2E tests
├── index.html
├── vite.config.js
└── package.json
```

---

## 📱 Pages & Features

| Page | Description |
|---|---|
| **Home** | Hero section, featured services, testimonials, CTAs |
| **Shop** | Browse decoration packages with search & filters |
| **Product Detail** | Package details, image gallery, quick-view modal, wishlist |
| **Services** | All decoration service categories |
| **Gallery** | Event photo gallery with category filters |
| **Plan My Event** | Multi-step event inquiry form |
| **About** | Brand story, team, values |
| **Contact** | Contact form + WhatsApp integration |
| **Locality Pages** | SEO-optimized pages per Gurugram locality |

---

## ✨ Key Frontend Features

- 📱 **Mobile-first design** — Built for 360px+ screens, touch-friendly (44px+ tap targets)
- 🔍 **Search Autocomplete** — Live search across decoration packages
- ❤️ **Wishlist** — Save favourite packages via context + localStorage
- 💬 **WhatsApp Integration** — Floating WhatsApp CTA for direct inquiry
- 🍪 **Cookie Consent Banner** — GDPR-style consent flow
- ⚡ **SSR-ready** — Entry server (`entry-server.jsx`) + prerender script for SEO
- 🎯 **SEO Component** — Dynamic `<title>` and meta tags per page
- 🔔 **Toast Notifications** — Lightweight custom toast system
- 🛡️ **Sentry Error Monitoring** — Frontend error tracking integrated

---

## 🚀 Getting Started (Frontend Only)

### Prerequisites
- Node.js ≥ 20
- A running backend API (or mock API URL)

### Install & Run

```bash
# Clone the repo
git clone https://github.com/ansh2028/Decor-Site.git
cd Decor-Site/client

# Install dependencies
npm install

# Set up environment
cp .env.example .env
# Edit .env and set your API base URL

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

---

## 👨‍💻 Developed By

**Ansh Bhola** — Frontend Developer  
🔗 [GitHub: @ansh2028](https://github.com/ansh2028)

---

## 📍 About the Client

- **Brand**: Decor Joy Gurgaon
- **Operating Since**: 2021
- **Location**: 166GF, Sector 57, Housing Board Colony, Gurugram, Haryana
- **WhatsApp**: [+91 7015767715](https://wa.me/917015767715)
- **Email**: decorjoygurgaon@gmail.com
