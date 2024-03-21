const express = require('express')
const router = express.Router()
const controller = require('../controllers/productController')

router.route('/product')
.post(controller.createProduct)

router.delete('/product/:id', productController.deleteProduct);
module.exports=router