const mongoose = require('mongoose')

const wishlistSchema = new mongoose.Schema({
    id:{
        type:Number,
        require:true,
    },
    title:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    category:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    rating:{
        type:Object,
        require:true
    },
    userId:{
        type:String,
        require:true
    }
})

const wishllists = mongoose.model("wishllists",wishlistSchema)

module.exports = wishllists