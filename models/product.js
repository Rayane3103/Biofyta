const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {type: String, required:true},
    scName: {type: String, required:true},
    arName: {type: String, required:true},
    price: {type: Number, required:true},
    indication: {type: Array, required:true},
    contreIndication: {type: Array, required:true},
    description: {type: String, required:true},
},{timestamps});

module.exports= mongoose.model('product', productSchema);