const Joi = require('joi');
const TIQmemberschema = 
{
    firstname : Joi.string().min(3).required(),
    lastname : Joi.string().min(3).required(),
    birth_date : Joi.date().format('DD-MM-YYYY').required(),
    clubs : Joi.array().required(),
    email : Joi.string().regex(/example\@\student\.guc\.edu\.eg$/).required(),
    password : Joi.string().min(8).required(),
    house :  Joi.string().options("Pegasus","Orion","Neutral"),
    score : Joi.int().optional(),
    bio : Joi.description(string),
    type : Joi.options("TIQmember")   

};

module.exports= TIQmemberschema;


