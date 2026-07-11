#  AI CRM Notification System

A modern **AI-powered CRM Notification System** built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**. The system provides a centralized dashboard for monitoring CRM activities, managing notifications, and improving communication between teams through an intuitive and responsive user interface.

---

# 📖 Project Overview

The **AI CRM Notification System** is designed to help organizations efficiently manage notifications, campaigns, and customer interactions. It provides a modern dashboard that displays important CRM insights while allowing users to manage notifications in a simple and organized manner.

This project follows a **full-stack MERN architecture**, where:

- **Frontend** is developed using React.js.
- **Backend** is built using Node.js and Express.js.
- **Database** is managed with MongoDB.
- Communication between frontend and backend is achieved using REST APIs.

---

# Features

##  Dashboard
- Modern CRM Dashboard
- Statistics Cards
- Notification Analytics Chart
- Recent Notifications Panel
- Activity Timeline
- Campaign / Pipeline Table
- Responsive Sidebar Navigation

---

## 🔔 Notification Module

- View Notifications
- Read / Unread Status
- Notification Categories
- Search Notifications
- Filter Notifications
- Mark Individual Notification as Read
- Mark All Notifications as Read
- Notification Bell with Unread Count

---

## Backend Features

- REST API
- CRUD Operations
- MongoDB Integration
- Notification Management
- Express Server

---

# System Architecture

The project follows a **Three-Tier Architecture**.

```text
                    +-----------------------+
                    |        End User       |
                    +-----------+-----------+
                                |
                                |
                     React Frontend (UI)
               Dashboard & Notifications
                                |
                         HTTP / REST API
                                |
                    +-----------+-----------+
                    |     Node.js + Express |
                    |      Backend API      |
                    +-----------+-----------+
                                |
                        Mongoose ODM
                                |
                    +-----------+-----------+
                    |       MongoDB         |
                    |      Database         |
                    +-----------------------+
```

---

#  System Workflow

```text
User
 │
 ▼
React Frontend
 │
 ▼
REST API Request
 │
 ▼
Express Server
 │
 ▼
Business Logic
 │
 ▼
MongoDB Database
 │
 ▼
API Response
 │
 ▼
React UI Updated
```

---

# Technology Stack

## Frontend

- React.js
- React Router DOM
- CSS3
- Recharts
- React Icons

---

## Backend

- Node.js
- Express.js

---

## Database

- MongoDB
- Mongoose

---

## Development Tools

- Visual Studio Code
- Git
- GitHub
- Postman

---

# Project Structure

```text
AI-CRM-Notification-System/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── data/
│   │   ├── styles/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

#  Installation

## Clone the Repository

```bash
git clone [https://github.com/<your-username>/AI-CRM-Notification-System.git](https://github.com/anishapriya0809-boop/AI-CRM-Notification-System.git)
```

Move into the project directory.

```bash
cd AI-CRM-Notification-System
```

---

# 📥 Install Dependencies

## Frontend

```bash
cd frontend
npm install
```

## Backend

```bash
cd backend
npm install
```

---

# Running the Application

## Start Backend Server

```bash
cd backend
npm run dev
```

or

```bash
npm start
```

---

## Start Frontend

```bash
cd frontend
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

Backend runs on:

```
http://localhost:5000
```
---

#  Application Modules

###  Dashboard
- Statistics Overview
- Analytics Chart
- Activity Panel
- Recent Notifications
- Campaign Pipeline

### 🔔 Notifications
- Notification Bell
- Notification List
- Search Bar
- Filters
- Mark as Read
- Mark All as Read
- Notification Categories

---

# 🤖 Future Enhancements

- AI-based Notification Prioritization
- Authentication & Authorization
- Role-Based Access Control
- Real-time Notifications (WebSockets)
- Email & SMS Notifications
- Push Notifications
- Dark Mode
- Advanced CRM Analytics
- Predictive Customer Insights

---

# 👥 Team Members

| Name | Role |
|------|------|
| **Anisha Priya** | Frontend (React UI) |
| **Shruti Kumari** | Backend (Node.js, Express.js & MongoDB) |
| **Kaushika Vats** | Backend |

---


---
