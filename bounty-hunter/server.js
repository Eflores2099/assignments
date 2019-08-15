// const express =require('express')
// const app = express()
// const morgan = require('morgan')
// const mongoose = require('mongoose')


// app.use(express.json())
// app.use(morgan("dev"))

// mongoose.connect("mongodb:/localhost:7000/bounty", {useNewUrlParser: true}, ()=> {
//     console.log("Connected to the Data Base")
// })



// app.use("/bounty", require('./routes/bountyRoutes.js'))

// app.use((err, req, res, next) => {
//     console.error(err)
//     return res.send({errMsg: err.message})
// })






// app.listen(7000, () => {
//     console.log("Server is running on Port 7000")
// })

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')
const PORT = process.env.PORT || 7000

// ... For Heroku: other imports 
const path = require("path")

// Middleware
app.use(express.json())
app.use(morgan('dev'))
// ... For Heroku: other app.use middleware 
app.use(express.static(path.join(__dirname, "client", "build")))


// Routes
app.use("/bounty/v1", require ('./routes/bountyRoutes.js'))

// DB Connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/bountyhunter", { useNewUrlParser: true }, () => { 
    console.log('[o] Connected to the DB')
})

// ... For Heroku
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
})

// Listener
app.listen(PORT, () => {
    console.log(`[+] Server is running on port ${PORT}`)
})
