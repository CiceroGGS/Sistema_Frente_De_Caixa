const knex = require("../../conexao");

const editarProduto = async (req, res) => {

  const { id } = req.params;
  const { descricao, quantidade_estoque, valor, categoria_id } = req.body;

  try {

    const atualizarProdutoNoBanco = async (id, descricao, quantidade_estoque, valor, categoria_id) => {
      await knex('produtos')
        .where({ id })
        .update({
          descricao,
          quantidade_estoque,
          valor,
          categoria_id
        });
    };

    await atualizarProdutoNoBanco(id, descricao, quantidade_estoque, valor, categoria_id);

    return res.status(204).send();

  } catch (error) {
    return res
      .status(500)
      .json({ mensagem: `Ocorreu um erro interno ${error.message}` });
  }
};


module.exports = editarProduto;