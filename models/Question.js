

const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create the schema
const QuestionSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String

    },
    user: {   //id
        type: String,
        required: true
    }
})

module.exports = Question = mongoose.model('questions', QuestionSchema)
