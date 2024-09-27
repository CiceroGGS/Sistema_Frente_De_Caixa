const knex = require('../../conexao');

const validaDetalharProduto = async (req, res, next) => {
    const { id } = req.params;

    try {
        const buscarProduto = await knex('produtos').where({ id }).first();

        if (!buscarProduto) {
            return res.status(404).json({ mensagem: 'Produto não encontrado.' });
        };

        req.produto = buscarProduto;

        next();

    } catch (error) {
        return res.status(500).json({ mensagem: error.message });
    };
};

module.exports = validaDetalharProduto;
