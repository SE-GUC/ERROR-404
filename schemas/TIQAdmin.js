const Joi = require('joi');
const TIQadminschema = 
{
    firstName : Joi.string().min(3).required(),
    lastName : Joi.string().min(3).required(),
    birthDate : Joi.string().regex(/[0-3][0-9]\-[0-1][0-9]\-[1-2][0-9][0-9][0-9]/).required(),
    clubs : Joi.array().required(),
    email : Joi.string().regex(/[a-z0-9\.\-]+\@student\.guc\.edu\.eg$/).required(),
    password : Joi.string().min(8).required(),
    type : Joi.string().regex(/TIQadmin/).required(),
    house : Joi.string(),
    score : Joi.string(),
    din : Joi.string(),
    dor : Joi.string(),
    bio : Joi.string(),

};
module.exports=TIQadminschema;
