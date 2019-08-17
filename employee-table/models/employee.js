const mongoose = require ('mongoose')
const Schema = mongoose.Schema

//Schema defines what the data should look like.
const employeeSchema = new Schema({

    employeeNumber: {
        type: String
    },

    firstName : {
        type:String
        // required: true
    },
    lastName: {
        type: String
        // required: true
    },
    email: {
        type: String
        // required: true
    },
    phoneNumber: String,
        type: String
        // required: true
})

//arg1 a string representation of what the collection will be called for each item
//arg2 which schema should this collection be tied to
module.exports = mongoose.model("Employee", employeeSchema)