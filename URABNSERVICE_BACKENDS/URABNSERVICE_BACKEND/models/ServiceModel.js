const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
   serviceName:{
        type:String
    },

    category:{
        type:Schema.Types.ObjectId,
        ref: 'Category'
    },

    subCategory:{
        type:Schema.Types.ObjectId,
        ref: 'SubCategory'
    },

    type:{
        type:Schema.Types.ObjectId,
        ref: 'Type'
    },

    fees:{
        type:Number
    },

    area:{
        type:String
    },

    city:{
        type:String
    },

    state:{
        type:String
    },

    serviceprovider:{
        type:Schema.Types.ObjectId,
        ref: 'ServiceProvider',
    },

    imageURL:{
        type:String
    }

})

module.exports = mongoose.model('Service',serviceSchema)