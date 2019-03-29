const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bountySchema = newSchema({
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
    }
})

module.exports = mongoose.model("BountyData", bountySchema)