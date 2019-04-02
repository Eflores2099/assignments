const express = require('express')
const app = express()
require('dotenv').config()
const mongoose =require('mongoose')
const morgan =require('morgan')
const expressJwt =require('express-jwt')
const PORT =process.env.PORT || 7000

// middlewares that fire on every request
app.use(express.json())
app.use(morgan('dev'))

// DB Connect
mongoose.connect("mongodb://localhost:27017/raddish", {useNewUrlParser: true}, () => {
    console.log("[+] Connected to the DB")
})

// routes



// Global Error Handler

app.use((err, req, res, next) => {
    console.error(err)
    return res.send({errMsg: err.message})
})


// Server listen

app.listen(PORT, () => {
    console.log(`[o] Server is running on Port ${PORT}`)
})