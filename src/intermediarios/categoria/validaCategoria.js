const knex = require("../../conexao");

const validaCategoriaId = async (req, res, next) => {
    const { categoria_id } = req.body;

    try {
        const procuraCategoria = await knex("categorias").where({ id: categoria_id }).first();

        if (!procuraCategoria) {
            return res.status(404).json({ mensagem: `Categoria informada não encontrada.` });
        }

        next();

    } catch (error) {
        return res.status(500).json({ mensagem: `Ocorreu um erro interno: ${error.message}` })
    }
}

module.exports = validaCategoriaId;