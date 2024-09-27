const knex = require("../../conexao");

const detalharCliente = async (req, res) => {

    const { id } = req.params;

    try {

        const cliente = await knex("clientes").where({ id }).first();

        return res.status(200).json(cliente);

    } catch (error) {
        return res.status(500).json({ mensagem: `Ocorreu um erro interno: ${error.message}` });
    }
};


module.exports = detalharCliente;