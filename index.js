const express = require('express')
const Connectdb = require('./database/db')
const bodyParser = require('body-parser')
const productRouter = require('./routes/productRoutes')
const corse = require('cors')
require('dotenv').config()

const app = express()

Connectdb()
app.use(corse())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/api',productRouter)

const port = process.env.PORT || 8000
app.listen(port,()=>{
    console.log(`Listening to ${port}`)
})