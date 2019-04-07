    
const mongoose = require('mongoose')
const Schema = mongoose.Schema


const chatBarSchema = new Schema({
    debateLiveTitle: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: false
    },
    numberOfResponses: {
        type: Number,
        required: false
    },
    forResponses: {
        type: [String],
        required: false
    },
    againstResponses: {
        type: [String],
        required: false


    }
   
})

module.exports = Chatbar = mongoose.model('chatBars', chatBarSchema)