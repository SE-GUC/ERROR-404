 const Joi = require('joi')

 module.exports = {
     //register schema for use except alumni
    registerValidation: request => {
        const registerSchema = {
            firstname : Joi.string().min(3).required(),
            lastname : Joi.string().min(3).required(),
            birth_date : Joi.string().regex(/[0-3][0-9]\-[0-1][0-2]\-[1-2][0-9][0-9][0-9]/).required(),
           // clubs : Joi.array().required(),
            email : Joi.string().regex(/[a-z0-9\.\-]+\@student\.guc\.edu\.eg$/).required(),
            password : Joi.string().min(8).required(),
            house :  Joi.string(),
           
            bio : Joi.string(),
            type : Joi.string(),
            
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
        firstname : Joi.string().min(3),
        lastname : Joi.string().min(3),
        birth_date : Joi.string().regex(/[0-3][0-9]\-[0-1][0-2]\-[1-2][0-9][0-9][0-9]/),
       // clubs : Joi.array().required(),
        password : Joi.string().min(8),
        bio : Joi.string()

}
return Joi.validate(request, updateUserSchema)


}

 }

