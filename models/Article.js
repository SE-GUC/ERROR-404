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
        type: [{
            username:String ,
            comment:String
        }], 
        required: true
    }
   
})

module.exports = Article = mongoose.model('articles', articleSchema)
