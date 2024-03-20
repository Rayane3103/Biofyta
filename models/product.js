const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    
    productName: {type: String, required:true},
    scName: {type: String, required:true},
    arName: {type: String, required:true},
    price: {type: Number, required:true},
    indication: {type: Array, required:true},
    contreIndication: {type: Array, required:true},
    description: {type: String, required:true},
    stock:{type: Number, required:true},
    image: {type: String, required:true},
    propriete: {type: String, required:true},
    modeUtilisation: {type: String, required:true},
    precaution: {type: String, required:true},
    isPromotion:{type: Boolean, default: false},
    promotionPrice:{type: Number, required:false},
    
},{timestamps: true});

module.exports= mongoose.model('product', productSchema);