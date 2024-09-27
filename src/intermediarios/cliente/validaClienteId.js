const knex = require("../../conexao");

const validaClienteId = async (req, res, next) => {
    const { id } = req.params;

    const stringId = id.toString();

    if (isNaN(id) || stringId.includes(".")) {
        return res
            .status(400)
            .json({ mensagem: 'O Id precisa ser um número válido' });
    }

    try {

        const cliente = await knex("clientes").where({ id }).first();

        if (!cliente) {
            return res
                .status(404)
                .json({ mensagem: 'Não existe cliente cadastrado com o ID informado.' })
        }

        next();

    } catch (error) {
        return res.status(500).json({ mensagem: `Ocorreu um erro interno: ${error.message}` })
    }
}


module.exports = validaClienteId;