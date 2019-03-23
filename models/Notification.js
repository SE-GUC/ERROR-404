// const uuid = require('uuid')

// class Notification {
//     constructor(idd,user,content,type) {
//         this.idd=idd;
//         this.user = user;
//         this.content=content;
//         this.type=type;
//         this.id = uuid.v4()

//     };
// }


// module.exports = Notification





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