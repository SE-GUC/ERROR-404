// const uuid = require('uuid')
// class Question {
//     constructor(idd,question,answer,user){
//         this.idd=idd
//         this.question = question
//         this.answer = answer
//         this.user = user
//         this.id = uuid.v4()
//     }
// }
// module.exports = Question



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
