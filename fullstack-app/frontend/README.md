# Frontend - React Application

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file from `.env.example`:
```bash
cp .env.example .env
```

3. Update `.env` with your API URL (default: http://localhost:5001/api)

4. Start the development server:
```bash
npm start
```

The application will open at `http://localhost:3000`

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Runs the test suite
- `npm eject` - Ejects from Create React App (one-way operation)

## Features

- User Management (CRUD)
- Product Management (CRUD)
- Responsive Design
- React Router for navigation
- Axios for API calls
- Error handling
- Loading states

## Project Structure

```
frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/      # Reusable components
│   ├── pages/           # Page components
│   ├── services/        # API services
│   ├── App.js           # Main app component
│   ├── App.css          # App styles
│   ├── index.js         # Entry point
│   └── index.css        # Global styles
└── package.json
```

## API Integration

The app connects to the backend API at the URL specified in `.env`. Make sure the backend server is running before starting the frontend.
