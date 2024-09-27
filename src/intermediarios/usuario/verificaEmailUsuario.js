const knex = require("../../conexao");

const verificaEmail = async (req, res, next) => {

    const { email } = req.body;

    try {

        const buscaUsuario = await knex('usuarios').select('*').where({ email }).first();

        if (buscaUsuario) {
            return res.status(409).json({ mensagem: 'O email informado já foi utilizado.' });
        }

        next();

    } catch (error) {
        return res.status(500).json({ mensagem: "Ocorreu um erro interno no servidor" });
    }
}

module.exports = verificaEmail