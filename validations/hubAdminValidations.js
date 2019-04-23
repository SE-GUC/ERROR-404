const Joi = require('joi');
module.exports  =
{ 
    
    
    hubAdminValidation : request =>
    {
            const userSchema = 
            {
                type : Joi.string().regex(/admin/).required(),
                firstName : Joi.string().min(3).required(),
                lastName : Joi.string().min(3).required(),
                birthDate : Joi.string().regex(/[0-3][0-9]\-[0-1][0-9]\-[1-2][0-9][0-9][0-9]/).required(),
                bio : Joi.string(),
                email : Joi.string().regex(/admin@admin\.com$/).required(),
                password : Joi.string().regex(/admin/).required(),
                house : Joi.string(),
                din : Joi.string(),
                dor : Joi.string(),
                clubs : Joi.array()
            }
            return Joi.validate(request, userSchema)
    }        

};