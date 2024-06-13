const Product = require("../models/product");

// Get all products (for home page)
const getAllProducts_home = async (req, res) => {
    try {
        const products = await Product.find();
        res.render("index", { products });
    } catch (err) {
        console.error(err);
        res.status(500).send("Error retrieving products");
    }
};

const renderAbout = (req, res) => {
    res.render("about");
};

const getAllProducts_create = async (req, res) => {
    try {
        const products = await Product.find();
        res.render("create-product");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error retrieving create page");
    }
};

// Create a new product (for create-product page)
const createProduct = async (req, res) => {
    const { name, description, price, image } = req.body;

    const newProduct = new Product({ name, description, price, image });

    try {
        await newProduct.save();
        res.redirect("/"); // Redirect to home page after successful creation
    } catch (err) {
        console.error(err);
        res.status(400).send("Error creating product");
    }
};

module.exports = {
    getAllProducts_home,
    getAllProducts_create,
    createProduct,
    renderAbout,
};
