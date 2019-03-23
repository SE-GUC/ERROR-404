const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            question: Joi.string().min(2).max(500).required(),
            user: Joi.number().min(1).max(3000).required(),
        }

        return Joi.validate(request, createSchema)
    },

    
}