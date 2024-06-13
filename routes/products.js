const express = require('express');
const Product = require('../models/product');

const router = express.Router();

// Get all products (for home page)
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.render('index', { products });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving products');
  }
});


router.get('/create', async (req, res) => {
  try {
    const products = await Product.find();
    res.render('create-product');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving create page');
  }
});


// Create a new product (for create-product page)
router.post('/create', async (req, res) => {
  const { name, description, price, image } = req.body;

  const newProduct = new Product({ name, description, price, image });

  try {
    await newProduct.save();
    res.redirect('/'); // Redirect to home page after successful creation
  } catch (err) {
    console.error(err);
    res.status(400).send('Error creating product');
  }
});

module.exports = router;