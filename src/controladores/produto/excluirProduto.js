const knex = require("../../conexao");

const excluirProduto = async (req, res) => {
    const { id } = req.params;

    try {

        await knex("produtos").where("id", id).del();

        return res.status(200).json({ mensagem: 'Produto deletado com sucesso.' });

    } catch (error) {
        return res.status(500).json({ mensagem: `Ocorreu um erro interno ${error.message}` });
    }
};

module.exports = excluirProduto;
