const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const contentSchema = new Schema ({
    date:{
        type : Date , 
        default: Date.now 
    },
    type:{
        type:String ,
        required :true 
    },
    description : {
        type:String , 
        required:true 
    }
})





module.exports = Content = mongoose.model('content', contentSchema)

