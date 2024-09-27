const Joi = require("joi");

const schemaCadastroCliente = Joi.object({
  nome: Joi.string().required().messages({
    "any.required": "O campo nome é obrigatório",
    "string.empty": "O campo nome é obrigatório",
    "string.base": "O campo nome deve ser formato de texto",
  }),
  email: Joi.string().email().required().messages({
    "string.email": "O campo email precisa ter um formato válido",
    "any.required": "O campo email é obrigatório",
    "string.empty": "O campo email é obrigatório",
    "string.base": "Formato inválido, deve ser tipo texto",
  }),
  cpf: Joi.string().required().length(11).regex(/^\d+$/).messages({
    "any.required": "Campo CPF é obrigatório",
    "string.empty": "Campo CPF não pode ser vazio",
    "string.length": "O campo CPF deve conter 11 dígitos e deve conter apenas números",
    "string.pattern.base": "O CPF deve conter apenas números",
    "string.base": "Formato inválido, deve ser tipo texto",
  }),
  cep: Joi.string().length(8).regex(/^\d+$/).allow("").messages({
    "string.length": "O CEP deve conter exatamente 8 dígitos e deve conter apenas números",
    "string.pattern.base": "O CEP deve conter apenas números",
    "string.base": "Formato inválido, deve ser tipo texto",
  }),
  rua: Joi.string().allow("").messages({
    "string.empty": "O campo Rua não pode ser vazio",
    "string.base": "Formato inválido, deve ser tipo texto",
  }),
  numero: Joi.string().allow("").messages({
    "string.empty": "O campo numero não pode ser vazio",
    "string.base": "Formato inválido, deve ser tipo texto",
  }),
  bairro: Joi.string().allow("").messages({
    "string.empty": "O campo bairro não pode ser vazio",
    "string.base": "Formato inválido, deve ser tipo texto",
  }),
  cidade: Joi.string().allow("").messages({
    "string.empty": "O campo cidade não pode ser vazio",
    "string.base": "Formato inválido, deve ser tipo texto",
  }),
  estado: Joi.string().allow("").messages({
    "string.empty": "O campo estado não pode ser vazio",
    "string.base": "Formato inválido, deve ser tipo texto",
  }),

});

module.exports = schemaCadastroCliente;
