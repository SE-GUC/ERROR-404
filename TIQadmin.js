const Joi = require('joi');
const TIQadminschema = 
{
    firstname : Joi.string().min(3).required(),
    lastname : Joi.string().min(3).required(),
    birth_date : Joi.date().format('DD-MM-YYYY').required(),
    clubs : Joi.array().required(),
    email : Joi.string().regex(/example\.@\.example\..com$/).required(),
    password : Joi.string().min(8).required(),

}