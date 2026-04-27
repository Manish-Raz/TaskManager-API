# Task Manager API

A simple **Task Manager REST API** built with **Node.js**, **Express.js**, and **MongoDB** that allows users to register, authenticate, and manage their tasks.

## Features

* User Registration
* User Login / Authentication
* Password Hashing using bcrypt
* Create Tasks
* Read Tasks
* Update Tasks
* Delete Tasks
* MongoDB Database Integration
* RESTful API structure
* Environment Variable Configuration using dotenv

---

## Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB**
* **Mongoose**
* **bcrypt**
* **dotenv**
* **Postman** (for API testing)

---

## Project Structure

```bash
task-manager/
│
│   └── db.js              # MongoDB connection setup
│
├── models/
│   ├── User.js               # User schema/model
│   └── Task.js               # Task schema/model
│
├── routes/
│   ├── userRoutes.js         # User routes
│   └── taskRoutes.js         # Task routes
│
├── .env                      # Environment variables
├── .gitignore                     
├── package.json
├── package-lock.json
├── index.js                 # Main server file
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/task-manager.git
```

Move into project folder:

```bash
cd task-manager
```

Install dependencies:

```bash
npm install
```

---

## Environment Variables

Create a `.env` file in root directory:

```env
PORT=8000
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Example:

```env
PORT=8000
MONGODB_URL=mongodb://127.0.0.1:27017/task-manager
JWT_SECRET=mysecretkey
```

---

## Run Project

Start server:

```bash
npm start
```

or using nodemon:

```bash
npm run dev
```

Server will run on:

```bash
http://localhost:8000
```

---

## API Endpoints

### Base Route

```http
GET /
```

Response:

```json
{
  "message": "Task Manager API is working!"
}
```

---

### User Routes

#### Register User

```http
POST /users/register
```

Body:

```json
{
  "name": "John",
  "email": "john@gmail.com",
  "password": "123456"
}
```

---

#### Login User

```http
POST /users/login
```

Body:

```json
{
  "email": "john@gmail.com",
  "password": "123456"
}
```

---

### Task Routes

#### Create Task

```http
POST /tasks
```

Body:

```json
{
  "title": "Complete project",
  "description": "Finish task manager API"
}
```

---

#### Get All Tasks

```http
GET /tasks
```

---

#### Update Task

```http
PUT /tasks/:id
```

---

#### Delete Task

```http
DELETE /tasks/:id
```

---

## Testing

Use **Postman** to test API endpoints.

Example:

```http
POST http://localhost:8000/users/register
```

Body → raw → JSON:

```json
{
  "name": "Your Name",
  "email": "yourmail@gmail.com",
  "password": "12345678"
}
```

---

## Future Improvements

* JWT Authentication
* User-specific tasks
* Task priority
* Due dates
* Pagination
* Search / Filter tasks
* Deployment on Render / Railway / Vercel

---

## Author

Made by **Your Name**
