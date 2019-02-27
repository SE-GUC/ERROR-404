const Joi = require('joi');
const hubuserschema = 
{
    firstname : Joi.string().min(3).required(),
    lastname : Joi.string().min(3).required(),
    birth_date : Joi.date().format('DD-MM-YYYY').required(),
    clubs : Joi.array().required(),
    email : Joi.string().regex(/[a-z0-9\.\-]+\@student\.guc\.edu\.eg$/).required(),
    password : Joi.string().min(8).required(),
    type : Joi.options("External").required()

};
module.exports=hubuserschema;