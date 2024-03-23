const express = require('express')
const router = express.Router()
const controller = require('../controllers/productController')
const multer = require("multer")

const diskStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log(file);
        cb(null, 'uploads/products')
    },
    filename: function (req, file, cb) {
        const ext = file.mimetype.split('/')[1];
        const filename = `products-${Date.now()}.${ext}`
        cb(null,filename)
    }
})
const upload = multer({ storage: diskStorage ,
fileFilter: (req,file,cb)=>{
    const filetype = file.mimetype.split('/')[0];
    if(filetype === "image"){
        return cb(null,true);
    }
    else{
        return cb("error , Image Only",false);
    }
}})



router.route('/product')
.post(upload.single('Image'),controller.createProduct)
.get(controller.getAllProducts)
//idk
router.route('/product/:id')
.delete(controller.deleteProduct)
.get(controller.getOneProduct)
.patch(controller.updateProduct);
module.exports=router