const mongoose = require('mongoose')
const Schema = mongoose.Schema


// Create the schema
const userSchema = new Schema({
   
    type: {
        type: String,
      
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
       
    },
    score: {
        type: Number
       
    },
    din: {
        type: String
       
    },
    dor: {
        type: String
       
    },
    clubs: {
        type: String, 
        required: true
    },
    // notification: {
    //     type: [String]
    // }
})

module.exports = User = mongoose.model('users', userSchema)



// //User model

// class User {
//     constructor(type,firstName,lastName,birthDate,bio,email,password,house,score,din,dor,clubs){
//         this.type=type;
//         this.firstName=firstName;
//         this.lastName=lastName;
//         this.birthDate=birthDate;
//         this.bio=bio;
//         this.email=email;
//         this.password=password;
//         this.house=house;
//         this.score=score;
//         this.din=din;
//         this.dor=dor;
//         this.clubs=clubs;
//         this.id=uuid.v4();
//     };
// };


