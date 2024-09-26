const knex = require("../../conexao");

const editarProduto = async (req, res) => {
  const { id } = req.params;
  const { descricao, quantidade_estoque, valor, categoria_id } = req.body;

  try {

    await atualizarProdutoNoBanco(id, descricao, quantidade_estoque, valor, categoria_id);

    if (req.file) {
      await atualizarImagemDoProduto(id, req.file)
    }

    return res.status(204).send();

  } catch (error) {
    return res
      .status(500)
      .json({ mensagem: `Ocorreu um erro interno ${error.message}` });
  }
};

module.exports = editarProduto;