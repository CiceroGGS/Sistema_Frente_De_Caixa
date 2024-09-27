const joi = require('joi');

const schemaProdutos = joi.object({
    descricao: joi.string().required().messages({
        'any.required': 'Campo descrição é obrigatorio',
        'string.empty': 'Campo descrição não pode ser vazio',
    }),
    quantidade_estoque: joi.number().required().min(0).messages({
        'any.required': 'Campo quantidade_estoque é obrigatorio',
        'string.empty': 'Campo quantidade_estoque não pode ser vazio',
        'number.base': 'Campo quantidade_estoque deve ser preenchido corretamente com quantidade',
        'number.min': 'Quantidade em estoque não pode ser menor que 0'
    }),
    valor: joi.number().required().min(1).messages({
        'any.required': 'Campo valor é obrigatorio',
        'string.empty': 'Campo valor não pode ser vazio',
        'number.base': 'Campo valor deve ser preenchido corretamente',
        'number.min': 'O valor do produto não pode ser 0 ou menor'
    }),
    categoria_id: joi.number().required().min(0).messages({
        'any.required': 'Campo categoria_id é obrigatorio',
        'string.empty': 'Campo categoria_id não pode ser vazio',
        'number.base': 'Campo categoria_id deve ser preenchido corretamente',
        'number.min': 'Id de categoria inválido'
    }),
    produto_imagem: joi.string().allow("").messages({
        "string.empty": "O campo pode ser vazio",
      })
});

module.exports = schemaProdutos;