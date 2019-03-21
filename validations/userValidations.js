const Joi = require ('joi')
module.exports={
    updateUserValidation: request =>{
        const updateUserSchema={
            
    firstname : Joi.string().min(3),
    lastname : Joi.string().min(3),
    birth_date : Joi.string().regex(/[0-3][0-9]\-[0-1][0-9]\-[1-2][0-9][0-9][0-9]/),
    clubs: Joi.array(),
    password : Joi.string().min(8),
    bio : Joi.string(),
     
    clubs : Joi.array(),
    house :  Joi.string(),
    score : Joi.number(),
    type : Joi.string(),
    din : Joi.string(),
    dor : Joi.string()   
       }
       return Joi.validate(request,updateUserSchema)
    }
}

// Question: hwa ezay afra2 maben TIQ admin and user fe el update
// Question : eh el far2 maben en ana 23ml required fe model w required fe model
// mongo ?
//