const express =require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')


app.use(express.json())
app.use(morgan("dev"))

mongoose.connect("mongodb:/localhost:7000/bounty", {useNewUrlParser: true}, ()=> {
    console.log("Connected to the Data Base")
})



app.use("/bounty", require('./routes/bountyRoutes.js'))

app.use((err, req, res, next) => {
    console.error(err)
    return res.send({errMsg: err.message})
})






app.listen(7000, () => {
    console.log("Server is running on Port 7000")
})