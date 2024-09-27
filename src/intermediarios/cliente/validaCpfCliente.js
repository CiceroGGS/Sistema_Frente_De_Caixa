const knex = require("../../conexao");

const validaCpfCliente = async (req, res, next) => {
    const { cpf } = req.body;

    try {

        const buscaCPF = await knex("clientes").where({ cpf });

        if (buscaCPF) {
            return res.status(400).json({ mensagem: "O CPF informado já possui cadastro" });
        }

        next();

    } catch (error) {
        return res.status(500).json({ mensagem: "Ocorreu um erro interno no servidor" });
    }
}


module.exports = validaCpfCliente;