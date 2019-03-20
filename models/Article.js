const mongoose = require('mongoose')
const Schema = mongoose.Schema


const articleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    comments: {
        type: String, 
        required: true
    }
   
})

module.exports = User = mongoose.model('articles', articleSchema)
