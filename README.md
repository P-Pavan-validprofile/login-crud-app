# Login & Student CRUD Application

A full-stack web application that implements secure user authentication and a student management system using JWT-based authorization.

---

## 📌 Overview

This project allows users to register and log in securely. After authentication, users can manage student records by performing Create, Read, Update, and Delete (CRUD) operations. All sensitive routes are protected using JSON Web Tokens (JWT).

---

## 🚀 Features

### 🔐 Authentication
- User Registration
- User Login
- Password hashing using bcrypt
- JWT-based authentication
- Protected routes
- Logout functionality

### 🧑‍🎓 Student Management
- Add student details (Name, Email, Verification Status)
- View list of students
- Update student information
- Delete student records
- Access restricted to authenticated users only

---

## 🛠 Tech Stack

### Frontend
- React
- React Router DOM
- Axios
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- Bcrypt.js

---

## 📁 Project Structure

```text
login-crud-app/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   ├── server.js
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── services/
│   │   ├── App.js
│   │   └── styles.css
│   └── package.json
├── .gitignore
└── README.md
