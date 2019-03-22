const Joi = require('joi')

updateValidation: request =>{
    const updateAdminSchema = {
   
   // birth_date : Joi.string().regex(/[0-3][0-9]\-[0-1][0-2]\-[1-2][0-9][0-9][0-9]/),
    clubs : Joi.array(),
    house :  Joi.string(),
    score : Joi.number(),
    type : Joi.string(),
    din : Joi.string(),
    dor : Joi.string()   


}
return Joi.validate(request, updateAdminSchema)


}

