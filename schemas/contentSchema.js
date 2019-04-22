const Joi = require('joi');
const contentSchema = 
{
    date : Joi.string().regex(/[0-3][0-9]\-[0-1][0-9]\-[1-2][0-9][0-9][0-9]/).required(),
    type : Joi.options("debate", "event", "reqruitment"),
    description : Joi.description(string)    

};
module.exports = contentSchema;