const Joi = require('joi');
const contentSchema = 
{
    date : Joi.date().format('DD-MM-YYYY').required(),
    type : Joi.options("debate", "event", "reqruitment"),
    description : Joi.description(string)    

};
module.exports = contentSchema;