const knex = require("../../conexao");

const listarCategorias = async (req, res) => {
  const query = await knex("categorias").select("*").from("categorias");

  res.status(200).json(query);
};


module.exports = listarCategorias;

