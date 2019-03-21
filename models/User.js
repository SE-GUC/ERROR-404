const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    type: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    birthDate: {
        type: String,
        required: true
    },
    bio: {
        type: String, 
        required: true
    },
    email: {
        type: String, 
        required: true
    },
    password: {
        type: String, 
        required: true
    },
    house: {
        type: String, 
        required: true
    },
    score: {
        type: Number, 
        required: true
    },
    din: {
        type: String, 
        required: true
    },
    dor: {
        type: String, 
        required: true
    },
    clubs: {
        type: [String], 
        required: true
    },
})

module.exports = User = mongoose.model('users', articleSchema)