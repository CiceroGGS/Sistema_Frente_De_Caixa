const knex = require("../../conexao");

const cadastrarProduto = async (req, res) => {
  const { descricao, quantidade_estoque, valor, categoria_id } = req.body;
  try {
    let produto = await knex("produtos")
      .insert({ descricao, quantidade_estoque, valor, categoria_id })
      .returning("*");

    return res.status(201).json(produto[0]);

  } catch (error) {
    return res
      .status(500)
      .json({ mensagem: `Ocorreu um erro interno ${error.message}` });
  }
};


module.exports = cadastrarProduto;
