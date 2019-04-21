    
const Joi = require('joi')
module.exports = {
    createValidation :request =>{
        const createSchema ={
            debateLiveTitle: Joi.string().required()
            // numberOfResponses: Joi.number(),
            // forResponses: Joi.array(),
            // againstResponses:Joi.array()

        }
        return Joi.validate(request, createSchema)
    },
    
    updateValidation: request => {
        const updateSchema = {
            debateLiveTitle: Joi.string(),
            date: Joi.string(),
            numberOfResponses: Joi.number(),
            forResponses: Joi.array(),
            againstResponses:Joi.array()
        }

        return Joi.validate(request, updateSchema)

    },
    createValidation: request => {
        const createSchema = {
            debateLiveTitle: Joi.string().required(),
            date: Joi.string(),
            numberOfResponses: Joi.number(),
            forResponses: Joi.array(),
            againstResponses:Joi.array()
        }

        return Joi.validate(request, createSchema)
    }
    
     
}