const mongoose = require('mongoose')
const Schema = mongoose.Schema


const todoSchema = new Schema({
    title: {
        type: String,
        required: true,
        
    },
    description : String,
    isCompleted: {
        type : Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.export = mongoose.model("Todo", todoSchema)