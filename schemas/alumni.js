const Joi = require('joi');
const TIQalumnischema = 
{
    firstname : Joi.string().min(3).required(),
    lastname : Joi.string().min(3).required(),
    birth_date : Joi.date().format('DD-MM-YYYY').required(),
    clubs : Joi.array().required(),
    email : Joi.string().regex(/[a-z0-9\.\-]+\@student\.guc\.edu\.eg$/).required(),
    password : Joi.string().min(8).required(),
    house :  Joi.string().options("Pegasus","Orion","Neutral"),
    bio : Joi.description(string),
    type : Joi.options("TIQalumni"),
    din : Joi.date().format('DD-MM-YYYY').required(),
    dor : Joi.date().format('DD-MM-YYYY').required()
    

};
module.exports=TIQalumnischema;

