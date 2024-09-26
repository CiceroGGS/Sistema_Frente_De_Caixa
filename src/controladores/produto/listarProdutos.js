const knex = require("../../conexao");

const listarProdutos = async (req, res) => {
    const { categoria_id } = req.query;

    try {

        const listaProdutos = await knex("produtos").select("*");

        if (categoria_id) {
            const filtraProdutos = await knex("produtos").where({ categoria_id });

            return res.status(200).json(filtraProdutos);
        }

        return res.status(200).json(listaProdutos);

    } catch (error) {
        return res.status(500).json({ mensagem: `Ocorreu um erro interno do servidor: ${error.message}` });
    }
}

module.exports = listarProdutos;