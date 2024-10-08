const express = require("express");
const rotas = express.Router();

const autenticaUsuario = require("../intermediarios/usuario/autenticacaoUsuario.js");

const cadastrarPedido = require("../controladores/pedido/cadastrarPedido.js");
const listarPedidos = require('../controladores/pedido/listarPedidos.js');

const validaProdutoId = require("../intermediarios/pedido/validaProdutoId.js");
const validarListaPedido = require("../intermediarios/pedido/validaListarPedidos");
const validarPedidosId = require("../intermediarios/pedido/validaClienteId.js");

const validarSchema = require("../intermediarios/validarSchema.js");
const schemaPedido = require("../schema/pedido/schemaPedido.js");

rotas.use('/pedido', autenticaUsuario);

rotas.post('/pedido', validarSchema(schemaPedido), validarPedidosId, validaProdutoId, cadastrarPedido);
rotas.get('/pedido', validarListaPedido, listarPedidos);


module.exports = rotas;