const mongoose = require("mongoose")
const Schema = mongoose.Schema

const otpSchema = new Schema({
    otp:{
        type:String
    },
    email:{
        type:String
    },
    status:{
        type:Boolean
    },
    time: {
        type: Number,
        default: Date.now 
    }
})

module.exports = mongoose.model("Otp",otpSchema)