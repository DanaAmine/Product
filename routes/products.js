const express = require("express");
const {
    getAllProducts_home,
    getAllProducts_create,
    createProduct,
} = require("../controllers/product");

const router = express.Router();

// Get all products (for home page)
router.get("/", getAllProducts_home);

router.get("/create", getAllProducts_create);

// Create a new product (for create-product page)
router.post("/create", createProduct);

module.exports = router;
