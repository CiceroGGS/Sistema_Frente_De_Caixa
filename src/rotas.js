const express = require("express");

const listarCategorias = require("./controladores/categoria/listarCategorias.js");
const validaIdCategoria = require("./intermediarios/categoria/validaCategoria");

const autenticaUsuario = require("./intermediarios/usuario/autenticacaoUsuario.js");
const cadastrarUsuario = require("./controladores/usuario/cadastrarUsuario.js");
const loginUsuario = require("./controladores/usuario/loginUsuario.js");
const detalharUsuario = require("./controladores/usuario/detalharUsuario.js");
const atualizarUsuario = require("./controladores/usuario/atualizarUsuario.js");

const validarSchema = require("./intermediarios/validarSchema");
const schemaCadastrar = require("./Schema/usuario/schemaCadastro.js");
const verificaEmail = require("./intermediarios/usuario/verificaEmailUsuario.js");
const schemaLogin = require("./Schema/usuario/schemaLogin");
const verificaCamposLogin = require("./intermediarios/usuario/verificaLoginUsuario.js");

const cadastrarCliente = require("./controladores/cliente/cadastrarCliente");
const detalharCliente = require("./controladores/cliente/detalharCliente");
const listaCliente = require("./controladores/cliente/listarCliente.js");
const editarCliente = require("./controladores/cliente/editarCliente");
const validaIdCliente = require("./intermediarios/cliente/validaId");
const verificaEmailCliente = require("./intermediarios/cliente/verificarEmailCliente");
const verificarCpfCliente = require("./intermediarios/cliente/verificarCpfCliente");
const validaEditarCliente = require("./intermediarios/cliente/editarCliente")
const schemaCadastroCliente = require("./Schema/cliente/schemaCadastroCliente");

const excluirProduto = require("./controladores/produto/excluirProduto");
const verificarProdutoExclusao = require("./intermediarios/produto/verificarProdutoExclusao"); const existeProduto = require("./intermediarios/produto/existeProdutoPeloId");
const detalharProduto = require("./controladores/produto/detalharProduto");
const listarProdutos = require("./controladores/produto/listarprodutos.js");
const intermediarioListarProdutos = require("./intermediarios/produto/listarProduto.js");
const editarProduto = require("./controladores/produto/editarProduto.js");
const intermediarioEditarProduto = require("./intermediarios/produto/editarProduto.js");
const cadastrarProduto = require("./controladores/produto/cadastrar");
const schemaProduto = require('./Schema/produto/schemaProduto');

const validaId = require("./intermediarios/cliente/validaId");
const schemaPedido = require("./Schema/pedido/schemaPedido");
const intermediarioCadastrarPedido = require('./intermediarios/pedido/intermediarioCadastrarPedido.js');

const cadastrarPedido = require("./controladores/pedido/cadastrarPedido.js");
const listarPedidos = require('./controladores/pedido/listarPedidos.js');
const intermediarioListarPedidos = require("./intermediarios/pedido/listarPedidos.js");
const intermediarioDetalharProdutoId = require("./intermediarios/produto/detalharProduto.js");

const rotas = express.Router();

rotas.post('/login', validarSchema(schemaLogin), verificaCamposLogin, loginUsuario);
rotas.get('/categoria', listarCategorias);

rotas.use(autenticaUsuario);

rotas.post('/usuario', validarSchema(schemaCadastrar), verificaEmail, cadastrarUsuario);
rotas.get('/usuario', detalharUsuario);
rotas.put('/usuario', validarSchema(schemaCadastrar), verificaEmail, atualizarUsuario);

rotas.post('/cliente', validarSchema(schemaCadastroCliente), verificaEmailCliente, verificarCpfCliente, cadastrarCliente);
rotas.put('/cliente/:id', validarSchema(schemaCadastroCliente), validaId, validaEditarCliente, editarCliente);
rotas.get('/cliente/:id', validaIdCliente, detalharCliente);
rotas.get('/cliente', listaCliente);

rotas.post('/produto', validarSchema(schemaProduto), validaIdCategoria, cadastrarProduto);
rotas.put('/produto/:id', validarSchema(schemaProduto), intermediarioEditarProduto, editarProduto);
rotas.get('/produto/:id', intermediarioDetalharProdutoId, detalharProduto);
rotas.delete('/produto/:id', existeProduto, excluirProduto);
rotas.get('/produto', intermediarioListarProdutos, listarProdutos);

rotas.post('/pedido', validarSchema(schemaPedido), intermediarioCadastrarPedido, cadastrarPedido);
rotas.get('/pedido', intermediarioListarPedidos, listarPedidos);

module.exports = rotas;
