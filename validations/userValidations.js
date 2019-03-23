 const Joi = require('joi')

 module.exports = {
     //register schema for use except alumni
     registerValidation: request => {
        const registerSchema = {
            type : Joi.string(),
            firstName : Joi.string().min(3).required(),
            lastName : Joi.string().min(3).required(),
            birthDate : Joi.string().required(),
            // .regex(/[0-3][0-9]\-[0-1][0-2]\-[1-2][0-9][0-9][0-9]/).required(),
            bio : Joi.string(),
            email : Joi.string().regex(/[a-z0-9\.\-]+\@student\.guc\.edu\.eg$/).required(),
            password : Joi.string().min(8).required(),
            
            house :  Joi.string(),
            din:Joi.string(),
            dor:Joi.string(),
            clubs : Joi.array().required()
            
            
            
        }
        return Joi.validate(request, registerSchema)

        },

 loginValidation: request => {
    const loginSchema = {
        email: Joi.string().email().required(),
        password: Joi.string().required()
    }
    return Joi.validate(request, loginSchema)
},


updateValidation: request =>{
    const updateUserSchema = {
               
    firstName : Joi.string().min(3),
    lastName : Joi.string().min(3),
    birthDate : Joi.string(),   
    // .regex(/[0-3][0-9]\-[0-1][0-9]\-[1-2][0-9][0-9][0-9]/),
    clubs: Joi.array(),
    password : Joi.string().min(8),
    bio : Joi.string(),
     
    // house :  Joi.string(),
    // score : Joi.number(),
    // type : Joi.string(),
    // din : Joi.string(),
    // dor : Joi.string()   

}
return Joi.validate(request, updateUserSchema)


}

 }

