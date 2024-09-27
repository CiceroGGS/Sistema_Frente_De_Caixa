const bcript = require("bcryptjs");
const knex = require("../../conexao");

const atualizarUsuario = async (req, res) => {

    const { nome, email, senha } = req.body;
    const { id } = req.usuario

    try {

        const senhaCriptografada = await bcript.hash(senha, 10);

        await knex("usuarios").update({ nome, email, senha: senhaCriptografada }).where({ id });

        return res.status(200).json({ mensagem: "Usuário atualizado com sucesso!" });

    } catch (error) {
        return res.status(500).json({ mensagem: `Ocorreu um erro interno ${error.message}` })
    }
}

module.exports = atualizarUsuario;
