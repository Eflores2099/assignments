const mongoose =require('mongoose')
const Schema =mongoose.Schema

const postSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    summary:String,
    imgUrl: {
        type: String,
        defaul: "http://images.clipartpanda.com/radish-clipart-toonvectors-4028-140.jpg",
    },
    votes: {
        type: Number,
        default:0
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    thread: {
        type: String,
        enum: ["recipes", "entertainment", "news", "sports", "culture", "science",  "arts", "celebrity", "awhcute", "hobbies", "politics", "music",],
        required: true
    },
    comments: [{
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        comment: {
            type: String,
            required: true
        },
        timeStamp: {
            type: Date,
            default: Date.now
        }
    }],
    timeStamp: {
        type:date,
        default: Date.now
    },
    tags: [{
        type: String,
        default: []
    }]
})

module.exports =mongoose.model("Post", postSchema)