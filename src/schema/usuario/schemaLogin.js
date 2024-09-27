const joi = require('joi');

const schemaLogin = joi.object({
    email: joi.string().required().email().messages({
        'any.required': 'Campo email é obrigatorio',
        'string.empty': 'Campo email não pode ser vazio',
        'string.base': 'Formato de email inválido',
        'string.email': 'Formato de email inválido. Deve ser um endereço de email válido.',
    }),
    senha: joi.string().required().min(4).messages({
        'any.required': 'Campo senha obrigatorio',
        'string.empty': 'Campo senha deve ser preenchido',
        'string.min': 'A senha precisa conter, no mínimo, 4 caracteres',
        'string.base': 'Formato de senha inválido',
    })
});


module.exports = schemaLogin;