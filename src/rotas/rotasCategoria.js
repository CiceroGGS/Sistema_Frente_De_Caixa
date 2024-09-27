const express = require("express");
const rotas = express.Router();

const listarCategorias = require("../controladores/categoria/listarCategorias.js");

rotas.get('/categoria', listarCategorias);


module.exports = rotas;