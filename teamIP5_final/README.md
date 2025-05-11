# Global Bites

A full-stack restaurant web application that blends food, culture, and technology. Global Bites is designed to let users explore international cuisines, order dishes, and learn about the cultural background behind each meal.

---

## 🤝 Team Members

- Alex Stoner – astoner@iastate.edu
- Batuhan Sonmez – bsonmez@iastate.edu

---

## Tech Stack

### Frontend
- React.js
- React Router
- Axios
- Bootstrap & Custom CSS
- Leaflet.js (for interactive maps)

### Backend
- Node.js with Express
- MongoDB Atlas (NoSQL)
- Mongoose (ODM)

---

## Core Features

- Menu with Cart & Checkout
- Interactive World Map (cuisine regions)
- Reviews & Star Ratings
- User Login/Sign-up
- Order History
- Admin Edit View

---

## Folder Structure

- /frontend → React frontend code (components, pages, routes) 
- /backend → Node.js/Express backend (routes, models, server) 
- /Documents → Planning documents, proposal, and wireframes

---

## Team Roles

### Alex
- Menu and Additional Info pages
- Review & Rating system
- Backend integration (menu & reviews)
- React update for static pages

### Batuhan
- Login & Signup pages
- Edit View (admin)
- Cart functionality
- Order History
- Checkout process
- Confirmation page
- Wireframing

## Mini Assignment 2

 ### Alex
 - Created the Menu, Explore, and Review Pages. I established the structure of the pages, and created the calls made to the backend that will allow the page to function to add the cards to the page. Each page has navigation to the other pages to the other pages through a navigation bar. We use react routing to move from page to page. Continuously updated the CSS file to establish a visually appealing project.
 - We will have a MongoDB that will pull information from it, such as the menu items, explore page information, author page, and the reviews that are used. The reviews page with be able to send POST requests and all of them will have GET requests. The data will be held in JSON files.
 - The menu page will hold the JSON files, and use GET requests to pull the name, description, price, special_fact, image, cuisine. Explore page will hold information about the cuisine such as the name, history and cliamte. Reviews will hold all of the reviews with the name, review and rating all available. Users will send POST and GET requests to the review page.


Thank you for exploring Global Bites!
