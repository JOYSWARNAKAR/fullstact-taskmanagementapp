# Full-Stack Task Management App

A comprehensive task management application built with the MERN stack. Organize, track, and manage your tasks efficiently with user authentication, priority levels, and status tracking.

---

## 🌟 Features

- **User Authentication**: Secure login and registration with JWT tokens
- **Task Management**: Create, read, update, and delete tasks
- **Task Status Tracking**: Mark tasks as pending, in progress, or completed
- **Priority Levels**: Assign low, medium, or high priority to tasks
- **User-Specific Tasks**: Each user sees only their own tasks
- **Input Validation**: Client and server-side validation for data integrity
- **Error Handling**: Comprehensive error handling and user-friendly messages
- **Rate Limiting**: Protected endpoints with rate limiting for security
- **Responsive Design**: Mobile-friendly frontend interface

---

## 🛠️ Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **Helmet** - Security headers
- **express-rate-limit** - Rate limiting middleware
- **express-validator** - Input validation

### Frontend
- **React 19** - UI library
- **Vite** - Next-generation frontend build tool
- **React Router** - Client-side routing
- **date-fns** - Date utility library
- **CSS** - Styling

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** or **yarn** package manager
- **MongoDB** (local installation or MongoDB Atlas cloud account)

---

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd fullstact-taskmanagementapp
```

### 2. Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Create a .env file
cp .env.example .env  # (if available, otherwise create manually)
```

### 3. Frontend Setup

```bash
cd ../frontend

# Install dependencies
npm install
```

---

## 🔑 Environment Variables

### Backend (.env)

Create a `.env` file in the `backend` directory with the following variables:

```env
PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/task_management_db
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRE=7d
NODE_ENV=development
```

**Configuration Details:**
- `PORT`: Server port (default: 5000)
- `MONGODB_URI`: MongoDB connection string (use MongoDB Atlas for cloud or local MongoDB)
- `JWT_SECRET`: Secret key for signing JWT tokens (use a strong, random string)
- `JWT_EXPIRE`: Token expiration time (e.g., 7d for 7 days)
- `NODE_ENV`: Environment mode (development or production)

### Frontend (.env or vite configuration)

The frontend uses the API base URL from `src/utils/constants.jsx`:

```javascript
export const API_BASE_URL = 'https://fullstact-taskmanagementapp.onrender.com';
```

Update this URL to match your backend server address during development.

---

## 🎯 Running the Application

### Development Mode

**Terminal 1 - Backend Server:**
```bash
cd backend
npm run dev
```

The backend server will start on `http://localhost:5000`

**Terminal 2 - Frontend Server:**
```bash
cd frontend
npm run dev
```

The frontend will be available on `http://localhost:5173` (default Vite port)

### Production Build

**Build Frontend:**
```bash
cd frontend
npm run build
```

**Start Backend (Production):**
```bash
cd backend
npm start
```

---

## 📁 Project Structure

```
fullstact-taskmanagementapp/
├── backend/
│   ├── controllers/
│   │   ├── authController.js      # Authentication logic
│   │   └── taskController.js      # Task CRUD operations
│   ├── middleware/
│   │   ├── auth.js                # JWT authentication middleware
│   │   ├── errorHandler.js        # Error handling middleware
│   │   └── validation.js          # Input validation middleware
│   ├── models/
│   │   ├── User.js                # User schema
│   │   └── Task.js                # Task schema
│   ├── routes/
│   │   ├── auth.js                # Authentication endpoints
│   │   ├── tasks.js               # Task management endpoints
│   │   └── users.js               # User endpoints
│   ├── utils/
│   │   └── helpers.js             # Utility functions
│   ├── scripts/
│   │   └── seed.js                # Database seeding script
│   ├── server.js                  # Express app configuration
│   ├── package.json               # Backend dependencies
│   └── .env                       # Environment variables
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Auth/              # Login & Register components
│   │   │   ├── Common/            # Reusable components (Spinner, Error)
│   │   │   ├── Layout/            # Header, Footer, Layout
│   │   │   └── Tasks/             # Task-related components
│   │   ├── contexts/
│   │   │   └── AuthContext.jsx    # Authentication context
│   │   ├── services/
│   │   │   ├── api.jsx            # API client
│   │   │   ├── authService.jsx    # Auth API calls
│   │   │   └── taskService.jsx    # Task API calls
│   │   ├── utils/
│   │   │   └── constants.jsx      # App constants
│   │   ├── App.jsx                # Main app component
│   │   ├── main.jsx               # Entry point
│   │   └── index.css              # Global styles
│   ├── public/                    # Static assets
│   ├── package.json               # Frontend dependencies
│   ├── vite.config.js             # Vite configuration
│   └── index.html                 # HTML template
│
└── README.md                      # Project documentation
```

---

## 🔌 API Endpoints

### Authentication Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | User login |
| POST | `/api/auth/logout` | User logout |

### Task Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tasks` | Get all tasks for the user |
| POST | `/api/tasks` | Create a new task |
| GET | `/api/tasks/:id` | Get a specific task |
| PUT | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |

### User Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users/profile` | Get user profile |
| PUT | `/api/users/profile` | Update user profile |

---

## 💾 Database Seeding

To populate your database with sample data:

```bash
cd backend
npm run seed
```

This will run the seed script and create sample users and tasks.

---

## 🔒 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: Bcryptjs for secure password storage
- **Helmet**: Security headers to protect against common vulnerabilities
- **Rate Limiting**: Prevents brute force attacks
- **CORS**: Controlled cross-origin requests
- **Input Validation**: Server-side validation using express-validator

---

## 🧪 Testing

Run tests using:

```bash
cd backend
npm test
```

---

## 📱 Features in Detail

### Task Status
- **Pending**: Task is awaiting action
- **In Progress**: Task is currently being worked on
- **Completed**: Task has been finished

### Task Priority
- **Low**: Non-urgent tasks
- **Medium**: Standard priority tasks
- **High**: Urgent, high-priority tasks

---

## 🐛 Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running locally or check your MongoDB Atlas connection string
- Verify the `MONGODB_URI` in your `.env` file

### CORS Errors
- Check the frontend's `API_BASE_URL` in `src/utils/constants.jsx`
- Ensure the backend CORS configuration allows the frontend URL

### Port Already in Use
- Change the `PORT` in backend `.env` file
- For frontend, Vite will automatically use the next available port

---

## 📝 License

This project is licensed under the ISC License.

---

## 👨‍💻 Author

**Joy Swarnkar**

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork this project and submit pull requests for any improvements.

---

## 📞 Support

For issues and questions, please open an issue in the repository.

---

**Happy Task Managing! 🎉**

