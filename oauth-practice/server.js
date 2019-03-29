const express = require('express')
const app = express()
// Sets up the ability to use a .env file for private environment variables (SECRET)
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 7000

// Middlewares for every request
app.use(express.json())
app.use(morgan('dev'))


// DB Connect
mongoose.connect('mongodb://localhost:27017/auth-lessons', {useNewUrlParser: true}, () => {
    console.log("[o] Connected to the DB")
})


// Routes
app.use("/auth", require('./routes/authRoutes.js'))



// Global Server Error Handler
app.use((err, req, res, next) => {
    console.error(err)
    return res.send({errMsg: err.message})
})

// Server setup
app.listen(PORT, () => {
    console.log(`[+] Server is running on Port ${PORT}`)
})