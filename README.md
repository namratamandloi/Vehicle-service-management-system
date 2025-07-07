# 🚗 Vehicle Service Management System – VSMS

**Vehicle Service Management System (VSMS)** is a full-stack web application that allows users to register their vehicles, book service appointments, and track service history. Admins can view and manage all service requests and update their statuses. The system is built using Spring Boot for the backend and React (Vite + Bootstrap) for the frontend, using MySQL as the database and JWT token-based authentication for secure user access.

---

## 🚀 Tech Stack

### 🔧 Backend
- Java 17+
- Spring Boot
- Spring Security (JWT Authentication)
- Spring Data JPA (Hibernate)
- MySQL (Relational Database)
- Lombok
- ModelMapper

### 🎨 Frontend
- React.js (with Vite)
- React Bootstrap
- Axios

---

## 🔑 Key Features

### 👤 User Module
- Register/Login with JWT-secured authentication
- Book vehicle service appointments
- View current and past service history
- Upload profile and vehicle details

### 🛠️ Admin Module
- View and manage all service requests
- Update status (e.g., Pending, In Progress, Completed)
- Access user and booking information

### ✅ Additional
- JWT-secured REST APIs
- Role-based access (Admin / User)
- Fully responsive UI

---

## 🗂️ Folder Structure
VSMS/
├── backend/
│ └── src/main/java/com/socialfeed/
│ ├── config/
│ ├── controller/
│ ├── dto/
│ ├── entity/
│ ├── repository/
│ ├── service/
│ └── SocialFeedApplication.java
├── frontend/
│ └── src/
│ ├── components/
│ ├── services/
│ ├── pages/
│ └── App.jsx

## ⚙️ Setup Instructions
## 📌 Backend Setup (Spring Boot)

## 1.Navigate to the backend directory:

cd backend

application.properties
spring.datasource.url=jdbc:mysql://localhost:3306/socialfeed
spring.datasource.username=your_mysql_username
spring.datasource.password=your_mysql_password
spring.jpa.hibernate.ddl-auto=update
jwt.secret=your_jwt_secret

## Run the backend server:
./mvnw spring-boot:run

## Frontend Setup (React.js)
## Navigate to the frontend directory:
cd frontend

## Install dependencies:
npm install

## Start the development server:
npm run dev

![Screenshot 2025-07-07 130345](https://github.com/user-attachments/assets/071ce54d-2914-41d5-8b76-70f1791c9170)

![Screenshot 2025-07-07 130539](https://github.com/user-attachments/assets/f1e0f10f-7345-442d-ab70-5c5b94a8823a)

![Screenshot 2025-07-07 130625](https://github.com/user-attachments/assets/aec844c5-c358-4805-bb19-1101321dadfd)




