# 🏡 J.S.N Raju Seniors' Space

> A warm, modern website for J.S.N Raju Seniors' Space — an old age home focused on comfort, community and care.

[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.0+-61dafb.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0+-646cff.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0+-38bdf8.svg)](https://tailwindcss.com/)

Built with a clean, responsive design and lightweight, maintainable TypeScript code.

---

## 📸 Preview

<img width="1723" alt="Homepage Hero Section" src="https://github.com/user-attachments/assets/041f2fc8-8596-4089-9bf9-660f6e101008" />

<img width="1728" alt="Features Section" src="https://github.com/user-attachments/assets/763c9111-ebed-4149-a9bb-67edbacf96a6" />

---

## ✨ Features

- 🎨 **Modern Design** — Clean, accessible interface with smooth animations
- 📱 **Fully Responsive** — Optimized for mobile, tablet, and desktop
- ⚡ **Lightning Fast** — Built with Vite for optimal performance
- 🎬 **Rich Media** — Video hero section and interactive gallery
- 🗺️ **Interactive Maps** — Leaflet integration for location display
- 📧 **Contact Forms** — EmailJS integration for seamless communication
- ♿ **Accessible** — WCAG compliant with semantic HTML

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **TypeScript** | Strong typing and enhanced developer experience |
| **React 18** | Modern UI patterns and component architecture |
| **Vite** | Fast development and optimized production builds |
| **Tailwind CSS** | Utility-first responsive styling |
| **Framer Motion** | Subtle, performant UI animations |
| **React Player** | Optimized hero/video playback |
| **react-intersection-observer** | On-scroll reveal animations |
| **lucide-react** | Lightweight, customizable SVG icons |
| **EmailJS** | Serverless contact form handling |
| **Leaflet** | Optional interactive maps |

---

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.tsx      # Navigation bar
│   ├── Hero.tsx        # Hero section with video
│   ├── Gallery.tsx     # Image gallery
│   ├── Slider.tsx      # Content slider
│   ├── Documents.tsx   # Document viewer
│   ├── Map.tsx         # Location map
│   └── Features.tsx    # Features section
├── index.css           # Tailwind entry + custom styles
├── main.tsx            # Application entry point
└── App.tsx             # Main app component

public/
└── assets/             # Static assets
    ├── images/         # Image files
    ├── videos/         # Video files
    └── pdfs/           # PDF documents
```

---

## 🚀 Quick Start

### Prerequisites

- Node.js 16.x or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AjaySurya-018/My-Personal-Business-Website.git
   cd My-Personal-Business-Website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

---

## 🌐 Deployment

### Option 1: Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/AjaySurya-018/My-Personal-Business-Website)

1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy!

### Option 2: Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/AjaySurya-018/My-Personal-Business-Website)

1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy!

### Option 3: GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |
| `npm run type-check` | Run TypeScript type checking |

---

## 🙏 Acknowledgments

- Design inspiration from modern care facility websites
- Icons by [Lucide](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

---

<div align="center">
  Made with ❤️ for J.S.N Raju Seniors' Space
</div>
