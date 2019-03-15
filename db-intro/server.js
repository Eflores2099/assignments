const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan =require("morgan")



// middlewares
app.use(express.json())  
app.use(morgan('dev'))


// routes

app.use("/todo", require('./routes/todoRoutes.js'))


// DB Connection
mongoose.connect("mongodb://localhost:27017/first-db", {useNewUrlParser: true}), () => { 
    console.log('Connected to the DB')
}
// Server Setup
app.listen(7000, () => {
    console.log('Server is running on Port 7000')
})