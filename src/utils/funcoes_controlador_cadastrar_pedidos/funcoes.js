const knex = require('../../conexao');
const nodemailer = require("nodemailer");

const calcularValorPedido = async (pedido_produtos, produtosNaCesta) => {
    let valorPedido = 0;
    const resposta = [];

    for (let cestaProduto of pedido_produtos) {
        const produto = produtosNaCesta.find(p => p.id === cestaProduto.produto_id);
        if (produto) {
            valorPedido += cestaProduto.quantidade_produto * produto.valor;
            resposta.push({
                produto_id: produto.id,
                quantidade_produto: cestaProduto.quantidade_produto,
                valor_produto: produto.valor
            });
        };
    };

    return { valorPedido, resposta };
};

const inserirPedidoNoBanco = async (cliente_id, valor_total, observacao) => {
    return await knex('pedidos').insert({ cliente_id, valor_total, observacao }).returning('id');
};

const inserirProdutosDoPedido = async (resposta, pedido_id) => {
    for (let index of resposta) {
        await knex('pedido_produtos').insert({ pedido_id, ...index });
        await knex('produtos').where({ id: index.produto_id }).decrement('quantidade_estoque', index.quantidade_produto);
    };
};

const enviarEmail = async (destinatario) => {

    let transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "10395966a5689e",
            pass: "0d2fa2f8e54252"
        }
    });

    let message = {
        from: "cicerog.silvestre@gmail.com",
        to: destinatario,
        subject: "Message title",
        text: "Plaintext version of the message",
        html: "<p>Seu pedido foi confirmado com sucesso!</p>"
    };

    await transport.sendMail(message, (error, info) => {
        if (error) {
            return console.log("Erro ao enviar e-mail: ", error);
        }
        console.log("E-mail enviado: ", info.response);
    });
}

module.exports = {
    calcularValorPedido,
    inserirPedidoNoBanco,
    inserirProdutosDoPedido,
    enviarEmail
};