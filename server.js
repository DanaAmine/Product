const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const connectDB = require('./db/connect');
require('dotenv').config();

const productRoutes = require('./routes/products');

const app = express();

// Set template engine to EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Use body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Use routes from products.js
app.use('/products', productRoutes);

app.use('*', (req, res, next) => {
    res.status(404).render('notFound');
});

// Start the server
const main = async () => {
  app.listen(3001, () => console.log('Server listening on port 3000'));
  await connectDB(process.env.MONGO_URL);
};
main();