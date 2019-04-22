const Joi = require('joi');
const parentSchema = 
{
    firstName : Joi.string().min(3).required(),
    lastName : Joi.string().min(3).required(),
    clubs : Joi.array(),
    email : Joi.string().regex(/[a-z0-9\.\_\-]+\@[a-z]+\.com$/).required(),
    password : Joi.string().min(8).required(),
    type : Joi.string().regex(/parent/).required(),
    house : Joi.string(),
    score : Joi.string(),
    din : Joi.string(),
    dor : Joi.string(),
    bio : Joi.string(),
    birthDate : Joi.string()
 
};
module.exports=parentSchema;

