const express =require('express')
const app = express()
const morgan = require('morgan')


app.use(express.json())
app.use(morgan("dev"))





app.use("/bounty", require('./routes/bountyRoutes.js'))








app.listen(7000, () => {
    console.log("Server is running on Port 7000")
})