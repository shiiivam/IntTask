const Joi = require("@hapi/joi");

const registerValidation = (data) => {
  const schema = Joi.object({
    fullName: Joi.string().min(3).required(),
    username: Joi.string().min(4).required(),
    email: Joi.string().min(4).required().email(),
    password: Joi.string().min(3).required(),
  });
  return schema.validate(data);
};

module.exports.registerValidation = registerValidation;