const express = require("express");
const rotas = express.Router();

const cadastrarPedido = require("../controladores/pedido/cadastrarPedido.js");
const listarPedidos = require('../controladores/pedido/listarPedidos.js');

const validarSchema = require("../intermediarios/validarSchema.js");
const schemaPedido = require("../schema/pedido/schemaPedido.js");

const validaProdutoId = require("../intermediarios/pedido/validaProdutoId.js");
const validarListaPedido = require("../intermediarios/pedido/validaListarPedidos");
const validarPedidosId = require("../intermediarios/pedido/validaClienteId.js");

rotas.post('/pedido', validarSchema(schemaPedido), validarPedidosId, validaProdutoId, cadastrarPedido);
rotas.get('/pedido', validarListaPedido, listarPedidos);


module.exports = rotas;