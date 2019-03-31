const mongoose = require('mongoose')
const Schema = mongoose.Schema

const chatBarSchema = new Schema({
    debateLiveTitle: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    numberOfResponses: {
        type: Number,
        required:false
    },
    forResponses: {
        type: [String]
       
    },
    againstResponses: {
        type: [String]
       
    }

   
})

module.exports = Chatbar = mongoose.model('chatbars', chatBarSchema)
