# Subscription Management System API

## Introduction
Subscription Management System API that handles real users, real money, and real business logic. This service authenticates users using JWTs, connects to a MongoDB database, defines models and schemas with Mongoose, and provides a scalable architecture for seamless communication with frontend clients.

## Tech Stack
- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **Upstash Workflows** (for email reminders)
- **Arcjet** (for advanced rate limiting & bot protection)

## Features
- **Advanced Rate Limiting & Bot Protection** with Arcjet to secure the entire application.
- **Database Modeling**: Define models and relationships using MongoDB & Mongoose.
- **JWT Authentication**: Manage user registration, login, and secure endpoints.
- **Subscription Management**: CRUD operations for subscriptions with automatic renewal reminders.
- **Global Error Handling**: Centralized middleware for input validation and unified error responses.
- **Logging Mechanisms**: Built-in request logging for debugging and monitoring.
- **Email Reminders**: Automate smart email reminders via Upstash Workflows.
- **Modular Code Architecture**: Well-organized folders and reusable components for maintainability.


##  Folder Structure
```
├── controllers       # Request handlers and business logic
├── models            # Mongoose schemas & models
├── routes            # Express route definitions
├── middlewares       # Custom middleware (auth, error handling, rate limiting)
├── workflows         # Upstash Workflow functions for email reminders
├── config            # Environment configuration
└── utils             # Helper functions & utilities
```


