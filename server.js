const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const productRoutes = require('./routes/products');

const app = express();

// Connect to MongoDB database (replace with your connection string)
mongoose.connect('mongodb+srv://amineDana:amineDana@nodeexpressprojects.f6bx8nu.mongodb.net/?retryWrites=true&w=majority&appName=nodeExpressProjects')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB', err));

// Set template engine to EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Use body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Use routes from products.js
app.use('/products', productRoutes);

// Handle any other routes (optional - you can add custom error pages here)
app.get('*', (req, res) => {
  res.status(404).send('Page not found');
});

// Start the server
app.listen(3000, () => console.log('Server listening on port 3000'));