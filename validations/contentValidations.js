const Joi = require('joi')


module.exports = {
    createValidation: request => {
        const createSchema = {
            date: Joi.date(),
            description: Joi.string().required(),
            type :Joi.string().required()
            
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            date: Joi.date(),
            description: Joi.string(),
            type :Joi.string()
            
        }

        return Joi.validate(request, updateSchema)
    }, 
}