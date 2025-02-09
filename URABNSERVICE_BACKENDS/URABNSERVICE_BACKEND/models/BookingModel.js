const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookingSchema = new Schema({
    service:{
        type:Schema.Types.ObjectId,
        ref:"Service"
    },
    serviceprovider:{
        type:Schema.Types.ObjectId,
        ref:'ServiceProvider'
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    status:{
        type:String,
        default: "pending"
    },
    total:{
        type:Number
    },
    address:{
        type:Schema.Types.ObjectId,
        ref:'Address',
        default:null
    }
})


module.exports = mongoose.model('Booking',bookingSchema); 