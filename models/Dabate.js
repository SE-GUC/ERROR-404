const mongoose = require('mongoose');

const debateSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    title : String ,
    category : String,
    date  : Date,
    description : String,
    info : String
}) 
module.exports = Debate = mongoose.model('Debate',debateSchema)