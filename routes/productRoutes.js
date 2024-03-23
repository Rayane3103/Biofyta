const express = require('express')
const router = express.Router()
const controller = require('../controllers/productController')





router.route('/product')
.post(controller.createProduct)
.get(controller.getAllProducts)

router.route('/product/:id')
.delete(controller.deleteProduct)
.get(controller.getOneProduct)
.patch(controller.updateProduct);
module.exports=router