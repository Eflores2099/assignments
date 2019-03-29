const mongoose = require('mongoose')
const Schema = mongoose.Schema

const songSchema = new Schema({
    songName: {
        type: String,
    },
})



moduile.exports = mongoose.model("Song",songSchema)