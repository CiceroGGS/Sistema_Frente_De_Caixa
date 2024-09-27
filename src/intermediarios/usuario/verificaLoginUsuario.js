const knex = require('../../conexao');
const bcrypt = require('bcryptjs');

const verificaLogin = async (req, res, next) => {
    const { email, senha } = req.body;

    try {

        const buscaUsuario = await knex('usuarios').select('*').where({ email }).first();

        if (!buscaUsuario) {
            return res.status(404).json({ mensagem: 'Email ou senha inválidos' });
        }

        const verificaSenhaHash = await bcrypt.compare(senha, buscaUsuario.senha);

        if (!verificaSenhaHash) {
            return res.status(403).json({ mensagem: 'Email ou senha inválidos' });
        };

        req.usuario = buscaUsuario;

        next();

    } catch (error) {
        return res.status(500).json({ mensagem: error.message });
    }
};


module.exports = verificaLogin;