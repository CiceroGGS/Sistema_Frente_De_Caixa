const knex = require("../../conexao");

const validaProdutoId = async (req, res, next) => {
  const { id } = req.params;

  try {

    if (id.includes(".") || isNaN(id)) {
      return res.status(400).json({ mensagem: "O ID informado é inválido" });
    }

    const buscaIdProduto = await knex("produtos").where({ id }).first();

    if (!buscaIdProduto) {
      return res.status(404).json({ mensagem: "O ID do Produto informado não existe." });
    }

    next();

  } catch (error) {
    return res.status(500).json({ mensagem: `Ocorreu um erro interno do servidor: ${error.message}` });
  }
}


module.exports = validaProdutoId;