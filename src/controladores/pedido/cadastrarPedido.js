const knex = require('../../conexao');
const { calcularValorPedido, inserirPedidoNoBanco, inserirProdutosDoPedido, enviarEmail } = require('../../utils/funcoes_controlador_cadastrar_pedidos/funcoes');

const cadastrarPedido = async (req, res) => {
    const { cliente_id, observacao, pedido_produtos, email } = req.body;

    try {
        const produtosNaCesta = await knex('produtos').whereIn('id', pedido_produtos.map(item => item.produto_id));
        const { valorPedido, resposta } = await calcularValorPedido(pedido_produtos, produtosNaCesta);
        const pedidoId = await inserirPedidoNoBanco(cliente_id, valorPedido, observacao);
        const { id } = pedidoId[0];
        await inserirProdutosDoPedido(resposta, id);

        await enviarEmail(email, observacao);

        return res.status(201).json({ mensagem: 'Pedido cadastrado.' });

    } catch (error) {
        console.log(error);

        return res.status(500).json({ mensagem: `Ocorreu um erro ${error.message}` });
    }
};


module.exports = cadastrarPedido;
