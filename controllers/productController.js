const Product = require('../models/product')


const createProduct = async (req,res)=>{
    try{const {productName,
        scName,
        arName, 
        price, 
        indication,
        contreIndication,
        description,
        stock,
        image,
        propriete,
        modeUtilisation,
        precaution,
        isPromotion,
        promotionPrice,} = req.body
    
    const newProduct = new Product({

    productName,
    scName,
    arName, 
    price, 
    indication,
    contreIndication,
    description,
    stock,
    image,
    propriete,
    modeUtilisation,
    precaution,
    isPromotion,
    promotionPrice,

    })
    await newProduct.save()
    res.status(201).json({ success: true, message: 'Product added successfully', product: newProduct });
}catch (error) {
    
    console.error('Error adding product:', error);
    
}}





module.exports = {
    createProduct
  };