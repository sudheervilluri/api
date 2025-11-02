const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const connectDB = require('./config/database');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/products', require('./routes/productRoutes'));

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
