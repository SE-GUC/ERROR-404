const Joi = require('joi');
module.exports  =
{
    registerValidation :  request =>
{
            const discipleSchema = 
            {               type : Joi.string().regex(/disciple/).required(),
                            firstName : Joi.string().min(3).required(),
                            lastName : Joi.string().min(3).required(),
                            birthDate : Joi.string().regex(/[0-3][0-9]\-[0-1][0-2]\-[1-2][0-9][0-9][0-9]/).required(),
                            bio : Joi.string(),
                          
                            email : Joi.string().regex(/[a-z0-9\.\_\-]+\@[a-z]+\.com$/).required(),
                            password : Joi.string().min(8).required(),
                           
                            house : Joi.string(),
                           
                            din : Joi.string(),
                            dor : Joi.string(),
                            clubs : Joi.array().required()
                           
            }
            return Joi.validate(request, discipleSchema)
    }
};


