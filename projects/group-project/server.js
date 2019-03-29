const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

app.use(express.json())
app.use(morgan('dev'))





.catch(err => console.error(err))




app.listen(6500, () => {
    console.log(' Server is running on Port 6500')
})
