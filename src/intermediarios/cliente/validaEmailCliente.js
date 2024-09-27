const knex = require("../../conexao");

const verificaEmailCliente = async (req, res, next) => {
    const { email } = req.body;

    try {

        const query = await knex("clientes").where({ email });

        if (query.length > 0) {
            return res.status(400).json({ mensagem: "O email informado já possui cadastro" });
        }

        next();

    } catch (error) {
        return res.status(500).json({ mensagem: "Ocorreu um erro interno no servidor" });
    }
}


module.exports = verificaEmailCliente;