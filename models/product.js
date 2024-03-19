const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    id: {type: String, required:true},
    name: {type: String, required:true},
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
    isPromotion:{type: Boolean, required:true},
    promotionPrice:{type: Number, required:false},
    
},{timestamps});

module.exports= mongoose.model('product', productSchema);