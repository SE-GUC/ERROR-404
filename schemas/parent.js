const Joi = require('joi');
const TIQparentsschema = 
{
    firstname : Joi.string().min(3).required(),
    lastname : Joi.string().min(3).required(),
    clubs : Joi.array().required().options(["TIQ"]),
    email : Joi.string().regex(/[a-z0-9\.\_\-]+\@[a-z]+\.com$/).required(),
    password : Joi.string().min(8).required(),
    type : Joi.options("parent").required()
 
};
module.exports=TIQparentschema;