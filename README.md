# World Atlas Explorer

![React](https://img.shields.io/badge/react-19-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

A modern, highly interactive web application built with **React** and **Tailwind CSS**. It allows users to explore detailed information about every country in the world, marvel at the Seven Wonders of the World, analyze the Top 10 Global Economies, and explore a Live HD World Map. The application utilizes the **REST Countries API** for dynamic data fetching.

> **Live Demo:** [https://world-atlas-tan.vercel.app/](https://world-atlas-tan.vercel.app/)

---

## ✨ Features

- **Comprehensive Country Data:** Search, filter, and view deep encyclopedic data for any country including GDP, borders, currencies, timezones, coat of arms, IDs, demonyms, and multiple map links.
- **REST Countries API Integration:** Dynamic and real-time data fetching using the REST Countries API, processed through optimized Axios network requests.
- **Seven Wonders Showcase:** Detailed nested pages covering history, fast facts, and stunning HD imagery for the modern Seven Wonders.
- **Top 10 Economies Dashboard:** Stay updated with the world's most powerful economies on the About page.
- **Live HD World Map:** A dedicated route offering an interactive, high-definition satellite worldview.
- **Glassmorphism UI:** Stunning custom design using glowing conic-gradient borders, backdrop-blur aesthetics, and heavily customized webkit scrollbars.
- **Smooth Animations:** Fully animated page transitions, list reveals, and hover effects powered by `framer-motion`.
- **Robust Error Handling:** Integrated global toast notifications using `react-hot-toast` for API success/failure states.
- **Fully Responsive:** Tailored mobile-first experiences with edge-to-edge layouts, floating back buttons, and off-canvas mobile menus.

---

## Technologies Used

- **Frontend Framework:** React 19 (Vite + SWC)
- **Styling:** Tailwind CSS & Custom CSS
- **Routing:** React Router v7
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **HTTP Client:** Axios
- **Notifications:** React Hot Toast
- **API Source:** [REST Countries API](https://restcountries.com/)

---

## Folder Structure

```text
World-Atlas/
├── public/                 # Static assets (images, fonts, etc.)
├── src/
│   ├── API/                # Axios routing and Local JSON data (wondersData, CountryData, Footerapi, postApi)
│   ├── Components/
│   │   ├── Layout/         # Core structural components (AppLayout, CountryDetails, CountryCard, AboutCard, GlobeComponent, WonderCard)
│   │   └── UI/             # Reusable UI elements (Header, Footer, HeroSection, SearchFilter, LoadingFallback, ErrorPage, etc.)
│   ├── Pages/              # Primary route pages (Home, About, Country, Contact, WonderDetails, MapPage)
│   ├── utils/              # Utility functions (generatePagination, helloAudio)
│   ├── App.css             # Global custom CSS / WebKit Overrides
│   ├── App.jsx             # React Router configuration
│   └── main.jsx            # Application entry point
├── index.html              # HTML template
├── eslint.config.js        # ESLint configuration
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── vite.config.js          # Vite build configuration
├── vercel.json             # Vercel deployment configuration
└── package.json            # Project dependencies and scripts
```

---

## Installation & Project Setup

This project leverages modern tooling for a fast, optimized development experience:
- **Vite & SWC:** Provides extremely fast Hot Module Replacement (HMR) and optimized build processes.
- **Tailwind CSS & PostCSS:** Utility-first styling with automatic vendor prefixing.
- **ESLint:** Configured to enforce code quality and catch potential errors early.
- **Vercel Integration:** Ready for seamless cloud deployment via `vercel.json`.

Follow these steps to get the project running locally on your machine:

**1. Clone the repository**
```bash
git clone <repository-url>
cd World-Atlas
```

**2. Install dependencies**
```bash
npm install
# or
yarn install
```

**3. Start the development server**
```bash
npm run dev
# or
yarn dev
```

**4. Open in browser**
Navigate to `http://localhost:5173` (or the port provided in your terminal) to explore the app.

---

## Usage

- **Home:** Gives a quick overview and showcases the Seven Wonders of the World.
- **About:** Displays the Top 10 World Economies with up-to-date data.
- **Country:** A massive database allowing sorting by region and deep text filtering for all nations. Click any card to drill down into its details.
- **Live Map:** Check the full HD satellite view of the earth.
- **Contact:** Send a message or inquiry via the integrated contact form.

---
