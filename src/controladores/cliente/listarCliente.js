const knex = require("../../conexao");

const listarClientes = async (req, res) => {

    try {

        const listaClientes = await knex("clientes").select("*");

        return res.status(200).json(listaClientes);

    } catch (error) {
        return res.status(500).json({ mensagem: `Ocorreu um erro interno do servidor: ${error.message}` });
    }
}


module.exports = listarClientes;