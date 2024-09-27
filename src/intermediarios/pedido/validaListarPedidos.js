const knex = require('../../conexao');

const validarListaPedido = async (req, res, next) => {
    const { cliente_id } = req.query;

    try {
        let cliente = null;

        if (cliente_id) {
            cliente = await knex('clientes').where({ id: cliente_id }).first();

            if (!cliente) {
                return res.status(404).json({ mensagem: 'Cliente não encontrado' });
            };
        };

        let query = knex('pedidos')
            .select('pedidos.id as pedido.id',
                'pedidos.valor_total as pedido.valor_total',
                'pedidos.observacao as pedido.observacao',
                'pedidos.cliente_id as pedido.cliente_id',
                'pedido_produtos.id as pedido_produtos.id',
                'pedido_produtos.quantidade_produto as pedido_produtos.quantidade_produto',
                'pedido_produtos.valor_produto as pedido_produtos.valor_produto',
                'pedido_produtos.produto_id as pedido_produtos.produto_id')
            .leftJoin('pedido_produtos', 'pedidos.id', 'pedido_produtos.pedido_id')
            .orderBy('pedidos.id');

        if (cliente_id) {
            query = query.where('pedidos.cliente_id', cliente_id);
        };

        const linhas = await query;

        const resposta = [];

        let pedidoAtual = null;

        for (let linha of linhas) {
            if (!pedidoAtual || linha['pedido.id'] !== pedidoAtual.id) {
                pedidoAtual = {
                    id: linha['pedido.id'],
                    valor_total: linha['pedido.valor_total'],
                    observacao: linha['pedido.observacao'],
                    cliente_id: linha['pedido.cliente_id'],
                    pedido_produtos: [],
                };
                resposta.push({ pedido: pedidoAtual });
            };

            pedidoAtual.pedido_produtos.push({
                id: linha['pedido_produtos.id'],
                quantidade_produto: linha['pedido_produtos.quantidade_produto'],
                valor_produto: linha['pedido_produtos.valor_produto'],
                produto_id: linha['pedido_produtos.produto_id'],
            });

        };

        req.pedidos = resposta;

        next();

    } catch (error) {
        return res.status(500).json({ mensagem: error.message });

    };
};

module.exports = validarListaPedido;
