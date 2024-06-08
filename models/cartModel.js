const mongoose = require('mongoose')

const cartItemsSchema = new mongoose.Schema({
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
    image:{
        type:String,
        require:true
    },
    quantity:{
        type:Number,
        require:true
    },
    totalPrice:{
        type:Number,
        require:true
    },
    userId:{
        type:String,
        require:true
    }
})

const cartItems = mongoose.model("cartItems",cartItemsSchema)

module.exports = cartItems