const knex = require("../../conexao");

const detalharProduto = async (req, res) => {
  const { id } = req.params;

  try {

    const produtoDetalhado = await knex("produtos").where({ id });

    return res.status(200).json(produtoDetalhado);

  } catch (error) {
    return res.status(500).json({ mensagem: `Ocorreu um erro interno do servidor: ${error.message}` });
  }
}

module.exports = detalharProduto;