const Joi = require("joi");
module.exports = {
  registerSchema: {
    body: Joi.object()
      .required()
      .keys({
        userName: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        rePassword: Joi.ref("password"),
        age: Joi.number().required(),
        role: Joi.string(),
        verifiy: Joi.boolean(),
      }),
  },
  loginSchema: {
    body: Joi.object().required().keys({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    }),
  },
};
