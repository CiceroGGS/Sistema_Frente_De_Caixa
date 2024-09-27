const knex = require("../../conexao");

const listarPedidos = async (req, res) => {
    const { cliente_id } = req.query;

    try {

        let resposta = [];
        let listarPedidos;
        let dadosPedido = "";

        if (cliente_id) {
            listarPedidos = await knex("pedidos").join("pedido_produtos", "pedidos.id", "=", "pedido_produtos.pedido_id").select("*").where({ cliente_id });

        } else {
            listarPedidos = await knex("pedidos").join("pedido_produtos", "pedidos.id", "=", "pedido_produtos.pedido_id").select("*");
        }

        for (let pedidos of listarPedidos) {

            if (!dadosPedido || pedidos.pedido_id !== dadosPedido.id) {

                dadosPedido = {
                    id: pedidos.pedido_id,
                    valor_total: pedidos.valor_total,
                    observacao: pedidos.observacao,
                    cliente_id: pedidos.cliente_id,
                    pedido_produtos: []
                }

                resposta.push({ pedido: dadosPedido });
            }

            dadosPedido.pedido_produtos.push({
                id: pedidos.produto_id,
                quantidade_produto: pedidos.quantidade_produto,
                valor_produto: pedidos.valor_produto,
                pedido_id: pedidos.pedido_id,
                produto_id: pedidos.produto_id
            });
        }

        return res.status(200).json(resposta);

    } catch (error) {
        return res.status(500).json({ mensagem: `Ocorreu um erro interno do servidor: ${error.message}` });
    }
}


module.exports = listarPedidos; 