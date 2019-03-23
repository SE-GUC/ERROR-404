const Joi = require('joi')
module.exports = {
    createValidation: request => {
         const createSchema = {
                title: Joi.string().required(),
                description: Joi.string().required(),
                author: Joi.string().required(),
                date: Joi.string().required()
        
            }
       
        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            title: Joi.string(),
            description: Joi.string(),
            author: Joi.string(),
            date: Joi.string(),
            comments:Joi.array()
            
        }

        return Joi.validate(request, updateSchema)

    }
     
}