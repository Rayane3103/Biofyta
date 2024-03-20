const mongoose = require('mongoose')
require('dotenv').config()

const Connectdb =async ()=>{
    try {
        await mongoose.connect('mongodb+srv://biofyta:biofyta123@biofyta.41qugja.mongodb.net/?retryWrites=true&w=majority&appName=biofyta')
        console.log('connected successfully to db')
    } catch (error) {
        console.error('error connecting with database ',error)
    }
}

module.exports= Connectdb