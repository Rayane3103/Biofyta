const mongoose = require('mongoose')
require('dotenv').config()

const Connectdb =async ()=>{
    try {
        await mongoose.connection(process.env.DATABASE_URL)
        console.log('connected successfully to db')
    } catch (error) {
        console.log('error connecting with database')
    }
}

module.exports= Connectdb