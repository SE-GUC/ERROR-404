const Joi = require('joi');
const TIQdisciplesschema = 
{
    firstname : Joi.string().min(3).required(),
    lastname : Joi.string().min(3).required(),
    birth_date : Joi.date().format('DD-MM-YYYY').required(),
    clubs : Joi.array().required().options(["TIQ"]),
    email : Joi.string().regex(/example\@\example\.com$/).required(),
    password : Joi.string().min(8).required(),
    type : Joi.options("disciples").required()
 
};
module.exports=TIQdisciplesschema;