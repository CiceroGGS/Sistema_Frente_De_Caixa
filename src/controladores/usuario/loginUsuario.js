const knex = require("../../conexao");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');

const loginUsuario = async (req, res) => {

    const { email, senha } = req.body

    try {

        const usuario = await knex("usuarios").where({ email }).first();

        const verificaSenha = await bcrypt.compare(senha, usuario.senha);

        if (!verificaSenha) {
            return res.status(400).json({ erro: "Ocorreu um erro" });
        }

        const token = jwt.sign(
            { id: usuario.id },
            process.env.SENHA_JWT,
            { expiresIn: "1d" }
        );

        return res.status(200).json({
            nome: usuario.nome,
            email: usuario.email,
            token
        });

    } catch (error) {
        return res.status(500).json({ mensagem: `Ocorreu um erro interno ${error.message}` });
    }
}


module.exports = loginUsuario;

