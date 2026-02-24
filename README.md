# Chuks Kitchen – React + Vite UI (Static Design)

This project is a **static frontend UI implementation** for Chuks Kitchen authentication pages.
It focuses on layout, styling consistency, and reusable Tailwind CSS patterns.
No backend or authentication logic is implemented.

## 🔗 Links

- 🎨 **Figma Design:** [Truemind-UI-DESIGN](https://www.figma.com/design/EIq17AUkUFl4TTvzvqhgZW/Truemind-UI-DESIGN)
- 🌐 **Live Demo:** [chuks-kitchen](https://chuks-kitchen-food-ordering-app-vyl.vercel.app)

---

## 🧱 Project Overview

- Static design only (no API integration)
- Pages included:
  - Login
  - Signup
  - Welcome
  - Home
  - Explore
  - My-Orders
  - Account (showing food details, no account design included)
- Built with **React** and **React Router**
- Styled using **Tailwind CSS**
- Repeated UI patterns are extracted using Tailwind’s `@apply` directive

---

## 🎨 Styling Approach

- Tailwind CSS is used for all styling
- Reusable UI components (such as buttons and navigation items) are used to maintain consistency across the application
- Repeated styles (layout, form fields, buttons, etc.) are centralized using Tailwind’s `@apply` directive
- This keeps JSX clean and ensures consistent UI across pages

**Example:**

```css
@layer components {
  .form-group {
    @apply flex flex-col gap-2;
  }

  .input-wrapper {
    @apply border border-stroke rounded-sm px-4 py-3;
  }
}
```

## 📁 Pages & Routes

This is a static UI project, so routing is handled client-side only.

| Page    | Route      |
|---------|------------|
| Login   | `/login`   |
| Signup  | `/signup`  |
| Welcome  | `/welcome`  |
| Home    | `/home` |
| Explore | `/explore` |
| Account | `/account` |
| My-Orders | `/my-orders` |

---
> ⚠️ No authentication guards are implemented. All routes are publicly accessible.



## 🚀 Running the Project Locally

## 1️⃣ Clone the repository

```bash
git clone <repository-url>
cd <project-folder>
```
## 2️⃣ Install dependencies
```bash
# npm
npm install

# yarn
yarn install
```
## 3️⃣ Start the development server
```bash
# npm
npm run dev

#yarn
yarn dev
```
## 4️⃣ Open in the browser

Once the server starts, open:

http://localhost:5173

You can manually navigate to:

http://localhost:5173/login

http://localhost:5173/signup

http://localhost:5173/welcome

http://localhost:5173/home

http://localhost:5173/explore

http://localhost:5173/my-orders


## 🧪 Notes

This project is UI-focused

No form validation, API calls, or authentication logic

Primary navigation routes (navbar links and Login button) are functional

Other buttons and form inputs are non-functional and intended for design/demo purposes

Layout is responsive for mobile and desktop
