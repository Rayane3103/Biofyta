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


const deleteProduct = async (req, res) => {
    try {
        const productId = req.params.id;

        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }

        await Product.findByIdAndDelete(productId);

        res.status(200).json({ success: true, message: 'Product deleted successfully' });
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};





module.exports = {
    createProduct,
    deleteProduct
  };