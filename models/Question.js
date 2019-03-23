const uuid = require('uuid')
class Question {
    constructor(question,answer,user){
        this.question = question
        this.answer = answer
        this.user = user
        this.id = uuid.v4()
    }
}
module.exports = Question

const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create the schema
const QuestionSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
    },
    user: {
        type: Number,
        required: true
    }
})

module.exports = Question = mongoose.model('questions', QuestionSchema)