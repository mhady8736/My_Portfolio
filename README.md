# Mohamed AbdEl Hady — Frontend Developer Portfolio

<div align="center">

  ![Portfolio Banner](public/logo.jpg)

  **Crafting fast, responsive, and user-centered web applications with modern frontend engineering.**

  [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
  [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  [![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

  [**Live Demo**](https://mhady8736.github.io/portfolio) • [**LinkedIn**](https://www.linkedin.com/in/mohamed-abdel-hady-8164a12a2) • [**WhatsApp**](https://wa.me/201145367954) • [**Email**](mailto:mhady8736@gmail.com)

</div>

---

## 📖 Overview

A production-grade, editorial personal portfolio built for **Mohamed AbdEl Hady** (Front-End Developer & Software Engineering student at Borg Al Arab Technological University).

Designed with a high-contrast architectural aesthetic, typography hierarchy using **Inter**, and zero fabricated claims. Every section reflects verified real-world internships (DEPI), academic achievements (GPA 3.80 / 4.00), and hands-on frontend web engineering.

---

## ✨ Key Features

- **🌓 Dual Mode Theme (Dark & Light)**: Instant, flicker-free switching between deep editorial dark mode (`#09090b`) and clean light mode, persisted via `localStorage`.
- **⚡ High Performance & Zero CLS**: Blazing fast bundle built with Vite and Tailwind CSS v4.
- **📱 Fully Responsive Architecture**: Mobile-first design adapting seamlessly from 320px mobile viewports to ultra-wide displays.
- **💼 Interactive Case Study Modals**: Deep-dive architectural breakdowns for featured projects (Overview, Problem, Engineering Approach, Key Features).
- **💬 Fixed Floating WhatsApp Action**: Quick-connect floating action button linking directly to WhatsApp with pre-filled conversational greeting.
- **📬 Real Contact Form Integration**: Asynchronous Formspree API integration with toast notifications and direct `mailto:` fallback.
- **♿ Web Accessibility (a11y)**: Semantic HTML5 document landmarks, visible focus rings, high-contrast ratios, and keyboard navigability.

---

## 🛠 Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React 19** | Modern functional components, custom hooks, and reactive state management |
| **Tailwind CSS v4** | Modern utility-first CSS styling, CSS variables, and fluid typography |
| **Vite** | Next-generation frontend build tooling and instant Hot Module Replacement (HMR) |
| **Lucide Icons** | Lightweight, accessible SVG icon library |
| **Formspree** | Serverless form handling and direct email notifications |

---

## 📂 Project Structure

```text
mohamed-portfolio/
├── public/
│   ├── logo.jpg             # Custom geometric brand logo
│   ├── portrait.jpg         # Personal portrait
│   └── projects/            # Project showcase previews
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Header navigation with brand logo & theme switch
│   │   ├── Hero.jsx            # Architectural hero section with portrait & CTAs
│   │   ├── About.jsx           # Engineering narrative & verified metadata
│   │   ├── Skills.jsx          # Technical capabilities & category filter tabs
│   │   ├── Projects.jsx        # Responsive side-by-side project grid
│   │   ├── ProjectCard.jsx     # Individual project card with case study triggers
│   │   ├── CaseStudyModal.jsx  # Accessible modal for technical breakdowns
│   │   ├── Timeline.jsx        # Career trajectory, internships & education
│   │   ├── Contact.jsx         # Direct contact inquiry form & social channels
│   │   ├── Footer.jsx          # Live local time clock & copyright signature
│   │   ├── WhatsAppButton.jsx  # Floating WhatsApp button with interactive tooltip
│   │   ├── Toast.jsx           # Feedback notification banner
│   │   └── Icons.jsx           # Custom SVG brand icons (GitHub, LinkedIn, WhatsApp)
│   ├── data/
│   │   └── portfolioData.js    # Centralized portfolio content & configuration
│   ├── App.jsx                 # Root application component
│   ├── main.jsx                # React application entrypoint
│   └── index.css               # Tailwind CSS v4 & theme definitions
├── index.html                  # HTML5 entrypoint
├── package.json                # Project dependencies and npm scripts
├── vite.config.js              # Vite configuration
└── README.md                   # Documentation
```

---

## 🚀 Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mhady8736/mohamed-portfolio.git
   cd mohamed-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173/`.

4. **Build for production:**
   ```bash
   npm run build
   ```
   The compiled production output will be generated inside the `dist/` directory.

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)
1. Push this repository to your GitHub account.
2. Sign in to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your `mohamed-portfolio` repository.
4. Keep the default settings (Framework Preset: **Vite**) and click **Deploy**.
5. Every time you push updates to GitHub (`git push`), Vercel will automatically redeploy the site!

---

## 👨‍💻 Author

**Mohamed AbdEl Hady**
- **Role**: Front-End Developer
- **Education**: B.Sc. Software Engineering, Borg Al Arab Technological University (GPA: 3.80 / 4.00)
- **Internship**: Digital Egypt Pioneers Initiative (DEPI)
- **GitHub**: [@mhady8736](https://github.com/mhady8736)
- **LinkedIn**: [Mohamed Abdel Hady](https://www.linkedin.com/in/mohamed-abdel-hady-8164a12a2)
- **WhatsApp**: [+20 114 536 7954](https://wa.me/201145367954)
- **Email**: [mhady8736@gmail.com](mailto:mhady8736@gmail.com)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
