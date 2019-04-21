const Joi = require('joi');
const TIQalumnischema = 
{
    firstname : Joi.string().min(3).required(),
    lastname : Joi.string().min(3).required(),
    birth_date : Joi.string().regex(/[0-3][0-9]\-[0-1][0-9]\-[1-2][0-9][0-9][0-9]/).required(),
    clubs : Joi.array().required(),
    email : Joi.string().regex(/[a-z0-9\.\-]+\@student\.guc\.edu\.eg$/).required(),
    password : Joi.string().min(8).required(),
    house :  Joi.string(),
    bio : Joi.string(),
    type : Joi.string(),
    din : Joi.string().regex(/[0-3][0-9]\-[0-1][0-9]\-[1-2][0-9][0-9][0-9]/).required(),
    dor : Joi.string().regex(/[0-3][0-9]\-[0-1][0-9]\-[1-2][0-9][0-9][0-9]/).required(),
    score: Joi.number()

};
module.exports=TIQalumnischema;
