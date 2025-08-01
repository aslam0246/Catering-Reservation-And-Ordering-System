# Elite Catering - Premium Event Services

Elite Catering is a modern, responsive web application built with React and Tailwind CSS, designed to provide a seamless experience for clients to explore catering menus, make event reservations, and track their orders.

## Features

  * **Responsive Design**: The application is built with a mobile-first approach using Tailwind CSS, ensuring it looks great on all devices.
  * **Menu Browse**: Clients can browse a diverse menu of appetizers, main courses, desserts, beverages, and event packages.
  * **Shopping Cart**: An interactive cart allows users to add and manage menu items for delivery orders.
  * **Online Reservations**: A dedicated form enables clients to submit detailed reservation requests for various events like weddings, corporate gatherings, and private parties.
  * **Order Tracking**: Users can track the status of their catering orders and reservations using a unique tracking ID.
  * **About Us Section**: Provides information about the company's story, values, team, and achievements.
  * **Contact Page**: Displays multiple contact options, a contact form, and a map placeholder for the company's location.
  * **State Management**: The application uses React's Context API (`CateringContext`) to manage global state for the shopping cart, reservations, and orders.

## Technologies Used

  * **React**: A JavaScript library for building the user interface.
  * **React Router DOM**: For handling client-side routing and navigation between pages.
  * **Tailwind CSS**: A utility-first CSS framework for styling.
  * **Vite**: A fast build tool for the development server and production builds.
  * **Lucide React**: A library for beautiful and accessible open-source icons.
  * **PostCSS**: Used to transform CSS, specifically for Tailwind CSS and Autoprefixer.

## Project Structure

The project follows a standard React directory structure:

```
/catering
├── src/
│   ├── components/
│   │   ├── CartModal.jsx
│   │   ├── Footer.jsx
│   │   └── Header.jsx
│   ├── context/
│   │   └── CateringContext.jsx
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   ├── Menu.jsx
│   │   ├── OrderTracking.jsx
│   │   └── Reservation.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── tailwind.config.js
```

## Getting Started

### Prerequisites

  * Node.js (LTS version recommended)
  * npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone <your-repository-url>
    cd catering
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```

### Running the Development Server

To start the local development server and view the project in your browser, run:

```bash
npm run dev
```

Vite will provide a local URL (e.g., `http://localhost:5173`) that you can open in your browser.

### Building for Production

To create a production-ready build of the application, run:

```bash
npm run build
```

This command will generate a `dist` directory with the compiled and optimized files, ready for deployment.
