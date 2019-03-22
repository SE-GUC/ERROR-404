const Joi = require ('joi')
module.exports={
    updateUserValidation: request =>{
        const updateUserSchema={
            
            type : Joi.string(),
            firstName : Joi.string().min(3),
            lastName : Joi.string().min(3),
            birthDate : Joi.string().regex(/[0-3][0-9]\-[0-1][0-2]\-[1-2][0-9][0-9][0-9]/),
            bio : Joi.string(),
            email : Joi.string().regex(/[a-z0-9\.\-]+\@student\.guc\.edu\.eg$/),
            password : Joi.string().min(8),
            house :  Joi.string(),
            score : Joi.number(),
            dor:Joi.string(),
            din:Joi.string(),
            clubs : Joi.array()
       }
       return Joi.validate(request,updateUserSchema)
    }
}
