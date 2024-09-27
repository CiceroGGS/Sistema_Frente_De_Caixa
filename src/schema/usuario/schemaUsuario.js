const joi = require("joi");

const schemaUsuario = joi.object({
    nome: joi.string().required().messages({
        'any.required': 'O campo nome é obrigatório',
        'string.empty': 'O campo nome é obrigatório',
        "string.base": "O campo nome deve ser formato de texto",
    }),

    email: joi.string().email().required().messages({
        'string.email': 'O campo email precisa ter um formato válido',
        'any.required': 'O campo email é obrigatório',
        'string.empty': 'O campo email é obrigatório',
        "string.base": "O campo email deve ser formato de texto",
    }),

    senha: joi.string().min(4).required().messages({
        'any.required': 'O campo senha é obrigatório',
        'string.empty': 'O campo senha é obrigatório',
        'string.min': 'A senha precisa conter, no mínimo, 4 caracteres',
        "string.base": "O campo email deve ser formato de texto",
    })
})


module.exports = schemaUsuario;