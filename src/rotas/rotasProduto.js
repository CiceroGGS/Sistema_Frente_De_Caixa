const express = require("express");
const rotas = express.Router();

const autenticaUsuario = require("../intermediarios/usuario/autenticacaoUsuario.js");

const cadastrarProduto = require("../controladores/produto/cadastrarProduto.js");
const excluirProduto = require("../controladores/produto/excluirProduto.js");
const detalharProduto = require("../controladores/produto/detalharProduto.js");
const listarProdutos = require("../controladores/produto/listarProdutos.js");
const editarProduto = require("../controladores/produto/editarProduto.js");

const validaListarProduto = require("../intermediarios/produto/validaListarProduto.js");
const validaDetalharProduto = require("../intermediarios/produto/validaDetalharProduto.js");
const validaProdutoId = require("../intermediarios/produto/validaProdutoId.js");
const validaCategoriaId = require("../intermediarios/categoria/validaCategoria.js");
const validaDeletarProduto = require("../intermediarios/produto/validaDeletarProduto.js");

const validarSchema = require("../intermediarios/validarSchema.js");
const schemaProduto = require('../schema/produto/schemaProduto.js');

rotas.use('/produto', autenticaUsuario);

rotas.post('/produto', validarSchema(schemaProduto), validaCategoriaId, cadastrarProduto);
rotas.put('/produto/:id', validaProdutoId, validarSchema(schemaProduto), validaCategoriaId, editarProduto);
rotas.get('/produto', validaListarProduto, listarProdutos);
rotas.get('/produto/:id', validaDetalharProduto, detalharProduto);
rotas.delete('/produto/:id', validaProdutoId, validaDeletarProduto, excluirProduto);


module.exports = rotas;