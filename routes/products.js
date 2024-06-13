const express = require("express");
const {
    getAllProducts_home,
    getAllProducts_create,
    createProduct,
    renderAbout,
} = require("../controllers/product");

const router = express.Router();

// Get all products (for home page)
//! router.get("/", getAllProducts_home);
router.route("/").get(getAllProducts_home);

//! router.get("/create", getAllProducts_create);
router.route("/create").get(getAllProducts_create);

// Create a new product (for create-product page)
//! router.post("/create", createProduct);
router.route("/create").post(createProduct);

//! router.get("/about", renderAbout);
router.route("/about").get(renderAbout);

module.exports = router;
