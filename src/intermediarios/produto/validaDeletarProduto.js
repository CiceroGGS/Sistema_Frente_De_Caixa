const knex = require('../../conexao');

const validaDeletarProduto = async (req, res, next) => {

    const { id } = req.params;
    const { categoria_id } = req.body;

    try {
        const produto = await knex('produtos').where({ id }).first();

        if (!produto) {
            return res.status(404).json({ mensagem: 'Produto não cadastrado.' });
        };

        const produtoComPedido = await knex("pedido_produtos").where("produto_id", id);

        if (produtoComPedido.length > 0) {
            return res.status(400).json({ mensagem: "Não é possível remover o produto, pois existem pedidos relacionados a ele." });
        }

        const produtoCategoria = produto.categoria_id;

        if (produtoCategoria !== categoria_id) {
            return res.status(400).json({ mensagem: 'A categoria do produto não corresponde à categoria informada.' });
        }

        next();

    } catch (error) {
        return res.status(500).json({ mensagem: error.message });
    };
};


module.exports = validaDeletarProduto;
