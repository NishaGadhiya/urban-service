const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serviceproviderSchema = new Schema({
    name:{
        type:String
    },

    email:{
        type:String,
        unique:true
    },

    password:{
        type:String
    },

    contact:{
        type:Number,
        unique:true
    },

    role:{
        type:Schema.Types.ObjectId,
        ref:'Role'
    }
})

module.exports = mongoose.model('ServiceProvider',serviceproviderSchema)