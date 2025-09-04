# Puja Portal Blueprint

## Overview

Puja Portal is a web application that provides a one-stop solution for all pooja needs. Users can browse and book various pooja services, as well as purchase pooja samagri (items) with an integrated shopping cart. The application also includes an admin panel for managing products and Anushtan.

## Design and Features

### Layout

*   **Sticky Footer:** The application features a sticky footer that remains at the bottom of the page, regardless of the content height.
*   **Full-Width Header and Footer:** The header and footer span the entire width of the screen, providing a clean and modern look.
*   **Centered Content:** The main content of each page is centered within a container, ensuring a consistent and readable layout.

### Pages

*   **Home:** The home page features a hero section with a welcoming image and a clear call to action. It also showcases a selection of featured services to engage users.
*   **Puja Services:** The Puja Services page (formerly Services) displays a list of available pooja services with images and descriptions.
*   **Our Products (Samagri):** The Our Products page showcases a variety of pooja items that users can purchase.
*   **Login & Signup:** Basic login and signup pages are included for user authentication.
*   **Admin:** A dedicated admin panel for managing the application's content.

### E-commerce

*   **Add to Cart:** Users can add products to their shopping cart from the "Our Products" page. If the same product is added again, its quantity is increased.
*   **Shopping Cart:** A shopping cart drawer displays the items added to the cart, the total price, and allows for item removal.
*   **Quantity Management:** Users can increase or decrease the quantity of each item directly within the shopping cart. If an item's quantity is reduced to zero, it is automatically removed from the cart.
*   **Checkout:** A checkout button is available in the shopping cart, leading to a future checkout process.

### Admin Panel

*   **Role-Based Access:** The admin panel is only accessible to users with the "Admin" role. The link to the admin panel is conditionally rendered in the header based on the user's role.
*   **Tabbed Interface:** The admin panel uses a tabbed interface to switch between managing products and Anushtan.
*   **CRUD Operations:** The admin panel provides full CRUD (Create, Read, Update, Delete) functionality for both products and Anushtan. Anushtan are managed as a special category of products.
*   **Reusable Components:** The admin panel is built with reusable components, including a generic table (`AdminTable`) and a generic dialog for creating and editing items (`AdminDialog`).

### Backend Integration

*   **API Service:** The application fetches product data from a backend API. The admin panel uses specific API endpoints to fetch products by category:
    *   Products: `http://localhost:3000/api/products/category/Products`
    *   Anushtan: `http://localhost:3000/api/products/category/Anuthans`
*   **Environment Variables:** The API base URL is stored in a `.env` file for easy configuration.
*   **Product Service:** A dedicated `ProductsService.js` handles all API requests related to products, promoting a clean and organized codebase.
*   **Error Handling:** The application includes error handling for API requests and displays a user-friendly message if an error occurs.
*   **Loading State:** A loading indicator is displayed while the application is fetching data from the API, providing a better user experience.

### Styling

*   **Component Library:** The application uses Material-UI for its components, providing a consistent and modern design.
*   **Color Scheme:** The primary color is a deep purple, creating a sense of spirituality and tranquility.
*   **Typography:** The application uses a clean and readable font, with clear headings and a consistent hierarchy.

## Current Request Plan

This plan has been completed.
