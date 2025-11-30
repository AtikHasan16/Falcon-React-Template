# React Production Starter Template

> A professional, opinionated React starter template designed for speed, scalability, and developer experience.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-v19-blue)
![Vite](https://img.shields.io/badge/Vite-v5-purple)
![Tailwind](https://img.shields.io/badge/Tailwind-v4-cyan)

## 🚀 Overview

This template is not just a "Hello World". It's a robust foundation for building modern web applications. It comes pre-configured with a carefully selected stack of libraries and a folder structure that scales with your project.

### Key Features

- **⚡ Lightning Fast**: Powered by [Vite](https://vitejs.dev/) for instant server start and HMR.
- **🎨 Modern UI**: Built with [Tailwind CSS v4](https://tailwindcss.com/) and [DaisyUI v5](https://daisyui.com/) for rapid, beautiful UI development.
- **🔐 Auth Ready**: Includes a pre-built `AuthProvider` context and `AuthLayout` for handling user sessions.
- **🛣️ Smart Routing**: configured with [React Router v7](https://reactrouter.com/) featuring nested layouts and private route protection.
- **🔔 Notifications**: Integrated [React Hot Toast](https://react-hot-toast.com/) for beautiful toast notifications.
- **🌀 UX Enhancements**: Includes `react-spinners` for loading states and custom Error pages.

---

## 🛠️ Tech Stack & Dependencies

This project comes pre-installed with the following packages:

| Package               | Version | Purpose                        |
| --------------------- | ------- | ------------------------------ |
| `react` / `react-dom` | ^19.0.0 | Core UI library                |
| `vite`                | ^5.0.0  | Next-gen frontend tooling      |
| `react-router`        | ^7.0.0  | Client-side routing            |
| `tailwindcss`         | ^4.0.0  | Utility-first CSS framework    |
| `daisyui`             | ^5.0.0  | Component library for Tailwind |
| `axios`               | ^1.0.0  | Promise based HTTP client      |
| `react-hot-toast`     | ^2.0.0  | Toast notifications            |
| `react-spinners`      | ^0.17.0 | Loading spinners               |
| `react-icons`         | ^5.0.0  | Popular icon packs             |

---

## 📂 Project Structure

The project follows a feature-based and scalable architecture:

```
src/
├── Components/         # Reusable UI components
│   └── Shared/         # Global components (Navbar, Footer, Loading, Error)
├── Contexts/           # Global State Management
│   ├── Context/        # Context definitions (AuthContext)
│   └── Provider/       # Context providers (AuthProvider)
├── Firebase/           # Firebase configuration (if using Firebase)
├── Hooks/              # Custom React Hooks
├── Layouts/            # Page Layout Wrappers
│   ├── Auth/           # Layout for Login/Register pages
│   └── Home/           # Main application layout
├── Pages/              # Application Views
│   ├── Auth/           # Authentication pages (Login, Register)
│   └── Home/           # Landing page
├── Routers/            # Routing Configuration
│   ├── Private/        # Route guards (PrivateRouter, GuestRouter)
│   └── Router.jsx      # Main router object
├── assets/             # Static assets (images, fonts)
├── main.jsx            # Application Entry Point
└── index.css           # Global Styles (Tailwind imports)
```

---

## 🏁 Getting Started

### 1. Installation

After generating the project, navigate to the directory and install dependencies:

```bash
cd <your-project-name>
npm install
```

### 2. Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### 3. Building for Production

To create a production build:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

---

## 🧩 Customization Guide

### Authentication

The `AuthProvider.jsx` file (`src/Contexts/Provider/AuthProvider.jsx`) is set up with a placeholder context. Connect it to your backend or Firebase:

```javascript
// Example: src/Contexts/Provider/AuthProvider.jsx
const authInfo = {
  user: currentUser, // Replace with real user state
  loading: isLoading,
  signIn,
  logOut,
};
```

### Routing

Add new routes in `src/Routers/Router.jsx`. The router supports nested routes and layouts out of the box.

### Styling

Customize your theme in `src/index.css` or `tailwind.config.js` (if you add one, though v4 handles much via CSS). DaisyUI themes can be configured in `package.json` or CSS variables.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.
