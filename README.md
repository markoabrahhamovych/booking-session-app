# Booking Session App

A modern booking session application built with **Next.js 15**, **React 19**, **TypeScript**, and **Tailwind CSS**.

---

## 🚀 Getting Started

### ✅ Prerequisites

Make sure you have installed:

- **Node.js** v18 or higher
- **npm**, **yarn**, or **pnpm**
- **Git** (optional)

Check versions:

```bash
node -v
npm -v
```

---

### 📦 Installation

Clone the repository:

```bash
git clone <your-repo-url>
cd booking-session-app
```

Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

---

### 🛠 Environment Setup

Create a `.env.local` file in the project root:

```bash
touch .env.local
```

Add your environment variables (example):

```
NEXT_PUBLIC_API_URL=https://your-api-url.com
```

> ✅ `.env.local` is ignored by Git.

---

### ▶️ Run the Project

Start development server:

```bash
npm run dev
```

Open in browser:

```
http://localhost:3000
```

---

### 🏗 Build for Production

```bash
npm run build
npm start
```

---

### ✅ Lint & Formatting

Check lint:

```bash
npm run lint
```

Fix automatically:

```bash
npm run lint:fix
```

---

### 🌀 Tailwind Setup

Tailwind is pre-configured.
Make sure your CSS includes:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

### 📚 Tech Stack

| Tool                         | Purpose         |
| ---------------------------- | --------------- |
| Next.js 15                   | App framework   |
| React 19                     | UI library      |
| TypeScript                   | Types           |
| Tailwind CSS                 | Styling         |
| date-fns                     | Date utils      |
| ESLint + Prettier            | Code formatting |
| react-slick / slick-carousel | Slider UI       |

---

### 📂 Recommended Structure

```
src/
 ├─ app/ or pages/
 ├─ components/
 ├─ hooks/
 ├─ utils/
 ├─ styles/
 └─ assets/
```

---

### 🎯 Project Scripts

| Command            | Action                  |
| ------------------ | ----------------------- |
| `npm run dev`      | Run development server  |
| `npm run build`    | Build production bundle |
| `npm start`        | Start production server |
| `npm run lint`     | Lint code               |
| `npm run lint:fix` | Fix lint issues         |

---

### ✅ Now You're Ready!

Start coding and enjoy developing your booking session platform! ✨

If you need help deploying to **Vercel**, customizing ESLint/Prettier, or adding CI/CD — just ask! 🚀
