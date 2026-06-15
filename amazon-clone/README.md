# Amazon Clone

A responsive Amazon-style e-commerce storefront built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- **Responsive design** — works on desktop, tablet, and mobile
- **Product catalog** — browse products with images, prices, ratings, and Prime badges
- **Category filtering** — click categories to filter products
- **Search** — real-time search across product titles
- **Shopping cart** — add/remove items, adjust quantities, view subtotal
- **Hero banner** — auto-rotating promotional carousel
- **Deal of the Day** section
- **Amazon-style UI** — dark header, yellow CTAs, star ratings, Prime badges

## Tech Stack

- **React 18** with hooks
- **TypeScript** for type safety
- **Vite** for fast development and optimized builds
- **Tailwind CSS** for utility-first styling

## Getting Started

```bash
cd amazon-clone
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```
amazon-clone/
├── src/
│   ├── components/
│   │   ├── Header.tsx        # Navigation, search, cart icon
│   │   ├── HeroBanner.tsx    # Rotating promotional carousel
│   │   ├── CategoryGrid.tsx  # Category filter cards
│   │   ├── ProductCard.tsx   # Individual product display
│   │   ├── StarRating.tsx    # Star rating component
│   │   ├── Cart.tsx          # Slide-out shopping cart
│   │   └── Footer.tsx        # Site footer with links
│   ├── App.tsx               # Main app with state management
│   ├── data.ts               # Product & category mock data
│   ├── types.ts              # TypeScript interfaces
│   ├── main.tsx              # Entry point
│   └── index.css             # Tailwind imports & base styles
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
└── index.html
```
