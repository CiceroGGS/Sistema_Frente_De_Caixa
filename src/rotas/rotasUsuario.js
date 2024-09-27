const express = require("express");
const rotas = express.Router();

const verificaLogin = require("../intermediarios/usuario/verificaLoginUsuario.js");
const autenticaUsuario = require("../intermediarios/usuario/autenticacaoUsuario.js");
const verificaEmail = require("../intermediarios/usuario/verificaEmailUsuario.js");

const cadastrarUsuario = require("../controladores/usuario/cadastrarUsuario.js");
const loginUsuario = require("../controladores/usuario/loginUsuario.js");
const detalharUsuario = require("../controladores/usuario/detalharUsuario.js");
const atualizarUsuario = require("../controladores/usuario/atualizarUsuario.js");

const validarSchema = require("../intermediarios/validarSchema.js");
const schemaLogin = require("../schema/usuario/schemaLogin");
const schemaCadastrar = require("../schema/usuario/schemaCadastro.js");

rotas.post('/usuario', validarSchema(schemaCadastrar), verificaEmail, cadastrarUsuario);
rotas.post('/login', validarSchema(schemaLogin), verificaLogin, loginUsuario);

rotas.use(autenticaUsuario);

rotas.put('/usuario', validarSchema(schemaCadastrar), verificaEmail, atualizarUsuario);
rotas.get('/usuario', detalharUsuario);


module.exports = rotas;
