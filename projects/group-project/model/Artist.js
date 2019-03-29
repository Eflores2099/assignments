const mongoose = require('mongoose')
const Schema = mongoose.Schema

const artistSchema = new Schema({
    artistName: {
        type: String,
    },
})



moduile.exports = mongoose.model("Artist",artistSchema)