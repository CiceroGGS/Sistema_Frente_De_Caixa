const knex = require("../../conexao");
const bcript = require("bcryptjs");
const jwt = require("jsonwebtoken");

const cadastrarUsuario = async (req, res) => {
    const { nome, email, senha } = req.body;

    try {

        const senhaCriptografada = await bcript.hash(senha, 10);

        const usuarioCadastrado = await knex("usuarios")
            .insert({ nome, email, senha: senhaCriptografada })
            .returning("*");

        return res.status(201).json(usuarioCadastrado);

    } catch (error) {
        return res.status(500).json({ mensagem: `Ocorreu ums erro interno` });
    }
}


module.exports = cadastrarUsuario;

