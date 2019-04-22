const Joi = require("joi");

module.exports = {
  //register schema for use except alumni
  registerValidation: request => {
    const registerSchema = {
      type: Joi.string(),
      firstName: Joi.string()
        .min(3)
        .required(),
      lastName: Joi.string()
        .min(3)
        .required(),
      birthDate: Joi.string().required(),
      bio: Joi.string(),
      email: Joi.string()
        .regex(/[a-z0-9\.\-]+\@student\.guc\.edu\.eg$/)
        .required(),
      password: Joi.string()
        .min(8)
        .required(),
      house: Joi.string(),
      din: Joi.string(),
      dor: Joi.string(),
      clubs: Joi.array()
    };
    return Joi.validate(request, registerSchema);
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
    const updateUserSchema = {
      firstName: Joi.string().min(3),
      lastName: Joi.string().min(3),
      birthDate: Joi.string(),
      password: Joi.string().min(8),
      bio: Joi.string(),
      clubs: Joi.array()
    };
    return Joi.validate(request, updateUserSchema);
  },
  updateUserValidation: request => {
    const updateUserSchema = {
      // type: Joi.string(),
      firstName: Joi.string().min(3),
      lastName: Joi.string().min(3),
      birthDate: Joi.string().regex(
        /[0-3][0-9]\-[0-1][0-2]\-[1-2][0-9][0-9][0-9]/
      ),
      bio: Joi.string(),
      // password: Joi.string().min(8),

      dor: Joi.string(),
      din: Joi.string(),
      clubs: Joi.array()
    };
    return Joi.validate(request, updateUserSchema);
  }
};
