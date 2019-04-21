const Joi = require("joi");

module.exports = {
  registerValidation: request => {
    const registerAlumniSchema = {
      type: Joi.string(),
      firstName: Joi.string()
        .min(3)
        .required(),
      lastName: Joi.string()
        .min(3)
        .required(),
      birthDate: Joi.string().required(),
      // .regex(/[0-3][0-9]\-[0-1][0-2]\-[1-2][0-9][0-9][0-9]/).required(),
      bio: Joi.string(),
      email: Joi.string()
        .regex(/[a-z0-9\.\-]+\@student\.guc\.edu\.eg$/)
        .required(),
      password: Joi.string()
        .min(8)
        .required(),

      house: Joi.string(),
      din: Joi.string().required(),
      dor: Joi.string().required(),
      clubs: Joi.array()
    };
    return Joi.validate(request, registerAlumniSchema);
  },
  loginValidation: request => {
    const loginSchema = {
      email: Joi.string()
        .email()
        .required(),
      password: Joi.string().required()
    };
    return Joi.validate(request, loginSchema);
  },

  updateValidation: request => {
    const updateAlumniSchema = {
      firstName: Joi.string().min(3),
      lastName: Joi.string().min(3),
      birthDate: Joi.string(),
      // .regex(/[0-3][0-9]\-[0-1][0-2]\-[1-2][0-9][0-9][0-9]/),
      bio: Joi.string(),

      password: Joi.string().min(8),
      din: Joi.string(),
      dor: Joi.string(),
      clubs: Joi.array()

      // firstname : Joi.string().min(3),
      // lastname : Joi.string().min(3),
      // birth_date : Joi.string().regex(/[0-3][0-9]\-[0-1][0-2]\-[1-2][0-9][0-9][0-9]/),
      // clubs : Joi.array().required(),
      // password : Joi.string().min(8),
      // bio : Joi.string(),

      // din : Joi.string().regex(/[0-3][0-9]\-[0-1][0-9]\-[1-2][0-9][0-9][0-9]/),
      // dor : Joi.string().regex(/[0-3][0-9]\-[0-1][0-9]\-[1-2][0-9][0-9][0-9]/),
    };
    return Joi.validate(request, updateAlumniSchema);
  }
};
