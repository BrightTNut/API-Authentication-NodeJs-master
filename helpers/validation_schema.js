const Joi = require('@hapi/joi')

const authSchema = Joi.object({
  phone: Joi.number().phone().required(),
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().min(2).required(),
})

module.exports = {
  authSchema,
}
