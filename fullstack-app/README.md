# Full Stack Application - React + Node.js

A complete full-stack web application with React frontend and Node.js/Express backend.

## 🚀 Tech Stack

### Frontend
- **React** - UI library
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **CSS3** - Styling

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variables

## 📁 Project Structure

```
fullstack-app/
├── backend/
│   ├── config/
│   │   └── database.js          # Database configuration
│   ├── controllers/
│   │   ├── userController.js    # User business logic
│   │   └── productController.js # Product business logic
│   ├── models/
│   │   ├── User.js              # User schema
│   │   └── Product.js           # Product schema
│   ├── routes/
│   │   ├── userRoutes.js        # User API routes
│   │   └── productRoutes.js     # Product API routes
│   ├── middleware/
│   │   └── auth.js              # Authentication middleware
│   ├── server.js                # Entry point
│   ├── package.json
│   ├── .env.example
│   └── README.md
│
└── frontend/
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── components/
    │   │   ├── UserCard.js      # User card component
    │   │   └── ProductCard.js   # Product card component
    │   ├── pages/
    │   │   ├── Home.js          # Home page
    │   │   ├── Users.js         # Users list page
    │   │   ├── UserDetail.js    # User detail page
    │   │   ├── Products.js      # Products list page
    │   │   └── ProductDetail.js # Product detail page
    │   ├── services/
    │   │   └── api.js           # API service layer
    │   ├── App.js               # Main app component
    │   ├── App.css              # App styles
    │   ├── index.js             # Entry point
    │   └── index.css            # Global styles
    ├── package.json
    ├── .env.example
    └── README.md
```

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```bash
cp .env.example .env
```

4. Update `.env` with your configuration:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/myapp
NODE_ENV=development
JWT_SECRET=your_jwt_secret_key_here
```

5. Start the server:
```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start
```

Backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```bash
cp .env.example .env
```

4. Update `.env` if needed:
```env
REACT_APP_API_URL=http://localhost:5000/api
```

5. Start the development server:
```bash
npm start
```

Frontend will run on `http://localhost:3000`

## 📡 API Endpoints

### Users API
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create new user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

### Products API
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `POST /api/products` - Create new product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product

## 🎯 Features

### User Management
- ✅ View all users
- ✅ View user details
- ✅ Create new users
- ✅ Update user information
- ✅ Delete users

### Product Management
- ✅ View all products
- ✅ View product details
- ✅ Create new products
- ✅ Update product information
- ✅ Delete products
- ✅ Product images support

### Additional Features
- ✅ RESTful API architecture
- ✅ Error handling
- ✅ Loading states
- ✅ Responsive design
- ✅ Form validation
- ✅ Confirmation dialogs
- ✅ API service layer
- ✅ Environment configuration

## 🧪 Testing

### Backend
```bash
cd backend
npm test
```

### Frontend
```bash
cd frontend
npm test
```

## 📦 Building for Production

### Backend
```bash
cd backend
npm start
```

### Frontend
```bash
cd frontend
npm run build
```

The build folder will contain optimized production files.

## 🔐 Environment Variables

### Backend (.env)
- `PORT` - Server port (default: 5000)
- `MONGODB_URI` - MongoDB connection string
- `NODE_ENV` - Environment (development/production)
- `JWT_SECRET` - Secret key for JWT tokens

### Frontend (.env)
- `REACT_APP_API_URL` - Backend API URL

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👥 Authors

Your Name

## 🙏 Acknowledgments

- React documentation
- Express.js documentation
- MongoDB documentation
- Node.js community
