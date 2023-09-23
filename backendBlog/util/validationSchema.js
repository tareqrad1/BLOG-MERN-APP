const Joi = require('joi');

const schema = Joi.object({
    firstName: Joi.string().required().messages({
        'string.empty': `First Name cannot be an empty field`,
    }),
    lastName: Joi.string().required().messages({
        'string.empty': `Last Name cannot be an empty field`,
    }),
    email: Joi.string().trim().lowercase().email({tlds: { allow: ['com', 'net'] }}).required().messages({
        'string.empty': `Email cannot be an empty field`,
        'string.email': ` Email must be a valid email address`
    }),
    password: Joi.string().min(6).max(20).required().label('password').regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/).messages({
        "string.empty": "Password cannot be an empty field",
        "string.min": "Password Must have at least 6 characters",
        "string.max": "Password Must have at maxima 20 characters",
        "string.pattern.base": "Must have a Strong Password", //regex
    }),
    confirmPassword: Joi.any().equal(Joi.ref('password')).required().messages({ 
        'any.only': 'Confirm password does not match' 
    }),
})

module.exports = {
    schema,
};