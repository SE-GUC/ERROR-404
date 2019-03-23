
const mongoose = require('mongoose')
const Schema = mongoose.Schema


// Create the schema
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
       
    },
    score: {
        type: String
       
    },
    din: {
        type: String
       
    },
    dor: {
        type: String
       
    },

    clubs: {
        type: [String], 
        required: true
    }
})


module.exports = User = mongoose.model('users', userSchema)

