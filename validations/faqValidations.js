

const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            question: Joi.string().min(3).max(5000).required(),
            answer: Joi.string().min(3).max(5000).required()
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            question: Joi.string().min(3).max(5000),
            answer: Joi.string().min(3).max(5000)
        }

        return Joi.validate(request, updateSchema)
    }, 
}