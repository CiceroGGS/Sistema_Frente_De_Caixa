require("dotenv").config();

const express = require("express");
const app = express();

const rotasUsuario = require("./rotas/rotasUsuario");
const rotasCategoria = require("./rotas/rotasCategoria");
const rotasProduto = require("./rotas/rotasProduto");
const rotasCliente = require("./rotas/rotasCliente");
const rotasPedidos = require("./rotas/rotasPedido");

app.use(express.json());

app.use("/", rotasCategoria);
app.use("/", rotasUsuario);
app.use("/", rotasProduto);
app.use("/", rotasCliente);
app.use("/", rotasPedidos);


module.exports = app;