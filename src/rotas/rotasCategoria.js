const express = require("express");
const rotas = express.Router();

const listarCategorias = require("../controladores/categoria/listarCategorias.js");

rotas.get('/categoria', (req, res, next) => {

    next();

}, listarCategorias);


module.exports = rotas;