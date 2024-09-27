const knex = require("../../conexao");

const validaEditarCliente = async (req, res, next) => {
    const { id } = req.params;
    const { email, cpf } = req.body;

    try {
        const query = await knex("clientes").where({ id }).first();

        if (query.email !== email || query.cpf !== cpf) {

            const queryEmail = await knex("clientes").where({ email });
            const queryCPF = await knex("clientes").where({ cpf });

            if (queryEmail.length > 0) {
                return res.status(400).json({ mensagem: "O email informado já possui cadastro" });
            }

            if (queryCPF.length > 0) {
                return res.status(400).json({ mensagem: "O cpf informado já possui cadastro" });
            }
        }

        next();

    } catch (error) {
        return res.status(500).json({ mensagem: "Ocorreu um erro interno no servidor" });
    }
}


module.exports = validaEditarCliente;