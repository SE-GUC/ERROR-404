
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