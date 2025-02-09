const { default: mongoose } = require('mongoose');
const monggose = require('mongoose');
const Schema = mongoose.Schema;

const subcategorySchema = new Schema({
    name:{
        type:String
    },

    category:{
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }
})

module.exports = mongoose.model("SubCategory",subcategorySchema);