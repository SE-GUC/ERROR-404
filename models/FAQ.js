// const uuid = require('uuid')
// class FAQ {
//     constructor(question, answer,) {
//         this.id = uuid.v4();
//         this.question = question;
//         this.answer = answer;
       
//     };
// }


// module.exports = FAQ


const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create the schema
const FAQsSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    }
})

module.exports = FAQ = mongoose.model('faqs', FAQsSchema)