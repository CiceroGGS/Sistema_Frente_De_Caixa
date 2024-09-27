const knex = require('../../conexao');

const validaProdutoId = async (req, res, next) => {
    const {
        cliente_id,
        pedido_produtos
    } = req.body;

    try {
        const cliente = await knex('clientes').where({ id: cliente_id }).first();
        if (!cliente) {
            return res.status(404).json({ mensagem: 'Cliente não encontrado.' })
        };

        for (let p of pedido_produtos) {
            const produto = await knex('produtos').where({ id: p.produto_id }).first();

            if (!produto) {
                return res.status(404).json({ mensagem: 'Produto não encontrado.' });
            };

            if (produto.quantidade_estoque < p.quantidade_produto) {
                return res.status(400).json({ mensagem: 'Quantidade estoque insuficiente.' });
            };
        };

        req.cliente = cliente;

        next();

    } catch (error) {
        return res.status(500).json({ mensagem: error.message });
    }
};


module.exports = validaProdutoId;