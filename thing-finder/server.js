const express = require('express')
const app = express()

app.use(express.json())




app.listen(5800,() => {
    console.log("The server is running on port 5800")
})