const mongoose = require('mongoose')
const Schema = mongoose.Schema


// Schema defines what the data should look like.
const bountySchema = new Schema({
    firstName: {
        type: String,
        required:true
    },
    lastName: {
        type: String,
        required:true
    },
    isLiving: {
        type: Boolean,
        required: true
    },
    bountyAmount: {
        type: Number,
        default: 0
    },
    BountyType: {
        type: String,
        enum: ['Jedi', 'Sith'],
        required:true
    }
})

// argument 1 string representation of what the collection will be called for each item
// argument 2 which schema should this collection be tied to.

module.exports = mongoose.model("BountyData", bountySchema)