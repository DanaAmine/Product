const express = require('express');
const {register,login}=require('../controllers/auth');
const {renderAuth} = require('../controllers/product');
const router = express.Router();
router.route('/register').post(register);
router.route('/login').post(login);
router.route("/").get(renderAuth);

module.exports = router;