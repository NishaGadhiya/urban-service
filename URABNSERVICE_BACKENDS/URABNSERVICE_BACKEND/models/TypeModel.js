const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const typeSchema = new Schema({
    name:{
        type:String
    }
})

module.exports = mongoose.model('Type',typeSchema)
