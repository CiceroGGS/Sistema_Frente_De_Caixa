const express = require("express");
const rotas = express.Router();

const autenticaUsuario = require("../intermediarios/usuario/autenticacaoUsuario.js");

const cadastrarCliente = require("../controladores/cliente/cadastrarCliente");
const detalharCliente = require("../controladores/cliente/detalharCliente");
const listaCliente = require("../controladores/cliente/listarCliente.js");
const editarCliente = require("../controladores/cliente/editarCliente");

const validaEmailCliente = require("../intermediarios/cliente/validaEmailCliente.js");
const validaCpfCliente = require("../intermediarios/cliente/validaCpfCliente.js");
const validaEditarCliente = require("../intermediarios/cliente/validaEditarCliente.js");
const validaClienteId = require("../intermediarios/cliente/validaClienteId");

const validarSchema = require("../intermediarios/validarSchema");
const schemaCliente = require("../schema/cliente/schemaCliente.js");

rotas.use('/cliente', autenticaUsuario);

rotas.post('/cliente', validarSchema(schemaCliente), validaEmailCliente, validaCpfCliente, cadastrarCliente);
rotas.put('/cliente/:id', validarSchema(schemaCliente), validaClienteId, validaEditarCliente, editarCliente);
rotas.get('/cliente/:id', validaClienteId, detalharCliente);
rotas.get('/cliente', listaCliente);


module.exports = rotas;