# Maxine Gerhard — UX Engineering Portfolio

Personal portfolio website built to showcase frontend architecture, UI implementation, and UX design work.

**Live Site:** [mgerhard.com](https://mgerhard.com)

---

## Overview

This project serves as a central hub for my transition from frontend software engineering into UX engineering. The site is designed with a focus on clean visual hierarchy, accessible navigation, and maintainable component architecture.

## Tech Stack

- **Framework:** React + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router
- **Linting:** Oxlint
- **Hosting & CI/CD:** AWS Amplify

## Key Features & Focus Areas

- **Component-Driven Architecture:** Modular, reusable UI sections built with strict TypeScript typing.
- **Responsive Layout:** Adaptive grid layouts and navigation structured for clarity across desktop and mobile viewports.
- **Design-to-Code Execution:** Custom SVG integration, intentional spacing, and a cohesive color palette (`#2C3E50` primary).

## Getting Started

To run this project locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com
   cd portfolio
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## Deployment

This repository is connected to **AWS Amplify** for continuous deployment. Pushing updates to the main branch automatically triggers a Vite production build and deploys to [mgerhard.com](https://mgerhard.com).

## Project Structure

```text
src/
├── assets/        # Static images, patterns, and SVGs
├── components/    # Reusable UI components and navigation
├── pages/         # Route-level views
└── App.tsx        # Main application layout and routing
```
