const express = require('express')
const mongoose = require('mongoose')
const userroutes=require('./routes/userRoutes')
const dotenv = require('dotenv').config()
const app = express()
const port = 8000;
app.use(express.json())




mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("DB Connected");
    })
    .catch((error) => {
        console.log(error)
    })


app.use('/api',userroutes)

app.listen(port, () => {
    console.log("Server is running on", port)
})