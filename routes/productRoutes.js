const express = require('express')
const router = express.Router()
const controller = require('../controllers/productController')

router.route('/product')
.post(controller.createProduct)


module.exports=router