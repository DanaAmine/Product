const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const connectDB = require('./db/connect');
require('dotenv').config();
const cookieParcer = require('cookie-parser');
const jwt = require('jsonwebtoken');
const register_login_router = require('./routes/auth');
const auth = require('./middleware/authentication');
const refreshToken=require('./middleware/refreshToken');

const productRoutes = require('./routes/products');

const app = express();

app.use(express.json());
app.use(cookieParcer());

// Set template engine to EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Use body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/auth',register_login_router);
app.use(refreshToken);
// Use routes from products.js
app.use('/products', productRoutes);

app.use('*', (req, res, next) => {
    res.status(404).render('notFound');
});

// Start the server
const main = async () => {
  app.listen(3001, () => console.log('Server listening on port 3001'));
  await connectDB(process.env.MONGO_URL);
};
main();