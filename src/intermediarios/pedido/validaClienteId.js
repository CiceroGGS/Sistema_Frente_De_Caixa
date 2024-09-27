const knex = require("../../conexao");

const validaIdPedido = async (req, res, next) => {

    const { cliente_id } = req.body;

    try {

        const buscaCliente = await knex("clientes").where({ id: cliente_id }).first();

        if (!buscaCliente) {
            return res.status(400).json({ mensagem: "O ID do Cliente informado não existe." })
        }

        next();

    } catch (error) {
        return res.status(500).json({ mensagem: `Ocorreu um erro interno do servidor: ${error.message}` });
    }
}


module.exports = validaIdPedido;