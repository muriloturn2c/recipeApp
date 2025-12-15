# RecipeApp

[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8)](https://tailwindcss.com/)
[![Storybook](https://img.shields.io/badge/Storybook-Enabled-ff4785)](https://storybook.js.org/)

Single Page Application (SPA) built with **Next.js**, **TypeScript**, and **Tailwind CSS**. This application allows users to browse, search, and filter recipes with a premium, responsive "Financial Dashboard" aesthetic.

## 🚀 Features

- **Recipe Browser:** Interactive table with sortable columns and rich media.
- **Advanced Filtering:** Filter recipes by difficulty (Easy, Medium, Hard) via a dynamic Sidebar.
- **Search:** Real-time search functionality.
- **Detailed Views:** Comprehensive recipe pages with ingredients, step-by-step instructions, and ratings.
- **Internationalization:** Full support for English and Spanish (EN/ES).
- **Responsive Design:** Fully adaptive layout with mobile-optimized navigation.
- **Premium Aesthetics:** Glassmorphism design system, smooth animations, and modern typography.

## 🛠️ Tech Stack

- **Framework:** [Next.js 15+](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4, Lucide React (Icons), CSS Variables
- **State Management:** React Context API
- **Networking:** Axios
- **Font:** Outfit (Google Fonts)

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd recipe-web
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open the application:**
   Visit [http://localhost:3000](http://localhost:3000) in your browser.

## 🧪 Verification & Testing

The project is equipped with **Jest** and **React Testing Library**.

### Unit Tests
To run the test suite:
```bash
npm test
```

### Component Documentation (Storybook)
We use Storybook to document and visually test components in isolation.
```bash
npm run storybook
```

## 🏗️ Architecture

The project follows **SOLID** principles and a feature-based architecture:

- `src/app`: App Router pages and layouts.
- `src/components`: Reusable UI atoms and layout organisms.
- `src/features`: Feature-specific logic (Services, Components) for scalability.
- `src/context`: Global state management (RecipeContext, LanguageContext).
- `src/utils`: Utilities and translations.

## 📝 Decisions & Trade-offs

- **Client-Side Filtering:** We fetch all recipes (`limit=0`) initially. This allows for instant, lag-free filtering and searching on the client side, providing a superior UX compared to server-roundtrips for small datasets (< 1000 items).
- **Context API vs Redux:** Given the moderate complexity, Context API was chosen to avoid Redux boilerplate while maintaining clean state separation.
- **Tailwind v4:** Utilized the latest Tailwind features for a specialized CSS-variable based theme system.
