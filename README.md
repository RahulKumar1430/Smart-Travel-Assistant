# 🚀 PastPort - AI-Powered Heritage Travel Platform

## 🌟 Project Overview
PastPort is an intelligent travel assistant that revolutionizes heritage tourism in India by combining AI-powered planning with seamless ticket booking. The platform addresses key pain points like long queues, lack of real-time information, and itinerary personalization for cultural sites.

## ✨ Key Features
- Instant E-Ticket Booking: Eliminates long queues with digital ticketing

- AI Trip Planner: Generates personalized itineraries based on user preferences

- Smart Chatbot: Provides real-time historical insights and navigation help

- Dynamic Pricing: Automatic rate calculation for Indian/foreign visitors

-Booking Management: User dashboard for all reservations

## 🛠️ Tech Stack

### Frontend Technologies
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![EJS](https://img.shields.io/badge/EJS-000000?style=for-the-badge&logo=ejs&logoColor=white)

### Backend Technologies
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)

### Database & Authentication
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)


## 🌍 Key Functionality
### For Travelers
- Personalized heritage site recommendations
- One-click ticket booking
- Dynamic pricing (Indian/Foreigner rates)
- Trip planning assistant

### For Administrators
- Booking management system
- User analytics dashboard
- Content management for sites
## 📂 Project Structure
## 📂 Project Structure

| Directory/File       | Description                                                                 |
|----------------------|-----------------------------------------------------------------------------|
| **models/**          | Contains all database models and schemas                                    |
| ├── user.js         | Heritage site data model (name, timing, pricing, location etc.)            |
| └── booking.js      | Booking transactions model (visitor details, tickets, payments etc.)       |
| **public/**         | Contains all client-side public assets                                     |
| ├── js/            | Client-side JavaScript files for interactive features                      |
| └── images/        | All static images used across the application                              |
| **views/**          | EJS templates for rendering dynamic pages                                  |
| ├── index.ejs      | Homepage with featured heritage sites and search functionality             |
| ├── booking.ejs    | Ticket booking interface with dynamic pricing calculator                   |
| ├── mybooking.ejs  | User dashboard to view/manage all bookings                                 |
| └── chatbot.ejs    | AI assistant interface for travel recommendations                          |
| **app.js**         | Main application server (Express setup, routes, middleware)               |
| **package.json**   | Project dependencies and configuration                                    |
