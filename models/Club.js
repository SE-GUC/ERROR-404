    
const mongoose = require('mongoose')
const Schema = mongoose.Schema


const clubSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
   
})

module.exports = Club = mongoose.model('clubs', clubSchema)