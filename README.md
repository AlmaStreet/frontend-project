# React Framework Practice

This repository contains a collection of example projects that showcase different approaches to building applications with React and related frameworks. It’s designed as a practice resource for comparing and exploring various React-based technologies.

## Repository Structure
```
.
├── README.md
├── my-app/                          # A basic Create React App project (vanilla React)
├── package-lock.json
├── package.json
├── public/                          # Public assets for the vanilla React app
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src/                             # Source code for the vanilla React app
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
├── test-expo/                       # Expo project for React Native apps (cross-platform)
│   └── my-app/                      
│       ├── README.md                # Expo-specific README and instructions
│       ├── app/                     # Expo Router entry files (_layout.tsx, index.tsx)
│       ├── app-example/             # Additional example app files (optional)
│       ├── app.json
│       ├── assets/
│       ├── expo-env.d.ts
│       ├── package-lock.json
│       ├── package.json
│       └── tsconfig.json
├── test-nextjs/                     # Next.js project for building web apps with SSR/SSG
│   └── my-app/
│       ├── README.md                # Next.js-specific README and instructions
│       ├── eslint.config.mjs
│       ├── next-env.d.ts
│       ├── next.config.ts
│       ├── package-lock.json
│       ├── package.json
│       ├── postcss.config.mjs
│       ├── public/
│       ├── src/                     # Next.js pages and components
│       └── tsconfig.json
└── test-react-router/               # React Router project (client-side routing example)
    └── my-react-router-app/
        ├── Dockerfile
        ├── README.md                # React Router-specific README and instructions
        ├── app/                     # Contains routing entry point (e.g., root.tsx)
        ├── package-lock.json
        ├── package.json
        ├── public/
        ├── react-router.config.ts   # (Optional) Route configuration for file-based routing
        ├── tsconfig.json
        └── vite.config.ts
```

## Projects Overview

### Vanilla React (Create React App)
- Location: 
    
    `src/` (with assets in `public/`)
- Description:

    A basic Create React App project that uses vanilla React. This project demonstrates simple component-based development with state management using React hooks.
- Usage:
    Run the development server using:
    ```
    npm start
    ```
    or build with:
    ```
    npm run build
    ```

### Next.js Project
- Location:

    `test-nextjs/my-app/`
- Description:

    This project uses Next.js to build a modern web application. It leverages file-based routing, server-side rendering (SSR), and static site generation (SSG) where appropriate.
- Usage:
    Follow the README in the test-nextjs/my-app/ folder for installation and run instructions. Typically:
    ```
    npm install
    npm run dev
    ```

### React Router Project
- Location:
    
    test-react-router/my-react-router-app/
- Description:

    A React project that demonstrates client-side routing using React Router. This example sets up routing with a custom configuration and uses Vite as the build tool.
- Usage:
    See the README in test-react-router/my-react-router-app/ for details on running the development server and building the project:
    ```
    npm install
    npm run dev
    ```

### Expo (React Native) Project
- Location:
    
    test-expo/my-app/
- Description:

    An Expo project demonstrating a cross-platform mobile application built with React Native and Expo Router. It includes an API form example and a simple interactive LightSwitch component.
- Usage:
    Check the README in test-expo/my-app/ for setup instructions. Typically, run the project using:
    ```
    npx expo start
    ```

## Which Framework to Use?

For Web Applications:

    Use Next.js or vanilla React. Next.js offers enhanced features like SSR and SSG along with file-based routing.
For Mobile Applications:

    Use React Native or Expo. Expo simplifies the development and deployment of mobile apps, and it supports cross-platform development (iOS, Android, and even web via React Native for Web).
For Client-Side Routing Practice:

    The React Router project demonstrates how to handle client-side routing without a framework that enforces file-based routing (like Next.js).

## Conclusion

This repository is a playground to compare and contrast different approaches within the React ecosystem. Whether you’re building a web app or a mobile app, each project demonstrates best practices and common patterns in modern React development.

Feel free to explore, experiment, and modify these projects to suit your learning or development needs!   