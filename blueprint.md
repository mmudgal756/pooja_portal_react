# Puja Portal

## Overview

Puja Portal is a web application designed to provide a seamless experience for users to book pooja services and order poojan samagri. The application will have a clean and serene user interface, reflecting the spiritual nature of the services offered.

## Features

### Core Features:
- **Header:** A fixed header with the application logo and a user profile dropdown menu that includes the username and a logout option.
- **Service Display:** A central content area to showcase available pooja services (like Satyanarayan Katha, Mundan, Janeu) and samagri (like Havan materials, Agarbatti, Dhoop Batti).
- **Footer:** A fixed footer displaying copyright information.
- **Samagri Ordering:** A system that allows users to order various poojan samagri.
- **Pandit Ji Booking:** A feature for booking Pandit Ji for different pooja services.
- **Service Details:** Detailed information and options for each pooja service.

### Style Guidelines:
- **Primary Color:** Light sky blue (#87CEEB)
- **Background Color:** Off-white (#F0F8FF)
- **Accent Color:** Soft lavender (#E6E6FA)
- **Font:** 'PT Sans'
- **Iconography:** Relevant and consistent icons for pooja items and services.
- **Layout:** A clean, spacious, and user-friendly layout.
- **Animations:** Subtle animations to enhance user interactions.

## Project Plan

### Phase 1: Project Setup & Basic Layout
1.  **Install Dependencies:**
    *   `@mui/material`, `@emotion/react`, `@emotion/styled` for UI components.
    *   `react-router-dom` for navigation.
    *   `firebase` for backend services.
2.  **Project Structure:**
    *   Create directories for components, pages, firebase configuration, styles, and assets.
3.  **Basic Layout:**
    *   Implement the main `App` component with a header, footer, and a content area.
    *   Set up basic routing.
4.  **Styling & Theming:**
    *   Create a Material-UI theme with the specified color palette and typography.
    *   Integrate the 'PT Sans' font.

### Phase 2: Core Feature Implementation
1.  **Header:**
    *   Add the logo.
    *   Implement the user profile dropdown (placeholder functionality).
2.  **Homepage:**
    *   Create a homepage to display a grid of available services and products.
    *   Use placeholder data initially.
3.  **Firebase Integration:**
    *   Set up Firebase for authentication and database.
    *   Create a `firebase.js` configuration file.

### Phase 3: Advanced Features & Refinement
1.  **Authentication:**
    *   Implement user login and registration using Firebase Authentication.
2.  **Service & Samagri Pages:**
    *   Create dedicated pages for services and samagri.
    *   Fetch data from Firestore.
3.  **Booking & Ordering:**
    *   Implement the booking and ordering functionality.
4.  **Testing & Deployment:**
    *   Write tests for the components.
    *   Prepare the application for deployment.
