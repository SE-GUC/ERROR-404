
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create the schema
const NotificationShema = new Schema({
   
    user: {
        type: String, //id
        required: true
    },
    content: { //question id
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ['question', 'answer']
    }
    
})

module.exports = Notification= mongoose.model('notifications', NotificationShema)