const Joi = require('joi');
module.exports  =
{ parentValidation : request =>
    {
            const parentSchema = 
            {
                type : Joi.string().regex(/parent/).required(),
                firstName : Joi.string().min(3).required(),
                lastName : Joi.string().min(3).required(),
                birthDate : Joi.string(),
                bio : Joi.string(),
              
                email : Joi.string().regex(/[a-z0-9\.\_\-]+\@[a-z]+\.com$/).required(),
                password : Joi.string().min(8).required(),
               
                house : Joi.string(),
                score : Joi.string(),
                din : Joi.string(),
                dor : Joi.string(),
                clubs : Joi.array(),
               
                
            }
        return Joi.validate(request, parentSchema)
    }        
    

};


