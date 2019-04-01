
const Joi = require('joi')

module.exports = {
  
    updateValidation: request => {
        const updateSchema = {
            answer: Joi.string().min(2).max(500).required()
        }

        return Joi.validate(request, updateSchema)
    }, 



    createValidation: request => {
        const createSchema = {
            question: Joi.string().min(2).max(500).required(),
            user: Joi.string().min(2).max(500).required(),
        }

        return Joi.validate(request, createSchema)
    },

    
}