const knex = require('../../conexao');

const validaListarProduto = async (req, res, next) => {
    const { categoria_id } = req.query;

    try {
        if (categoria_id) {
            const verificaCategoria = await knex('categorias').where({ id: categoria_id }).first();

            if (!verificaCategoria) {
                return res.status(404).json({ mensagem: 'Categoria de produto não cadastrado.' });
            };

            const produtos = await knex('produtos').where({ categoria_id }).orderBy('id');

            if (produtos.length === 0) {
                return res.status(404).json({ mensagem: 'Sem produtos cadastrados nessa categoria.' });
            };

            req.produtos = produtos;

            next();
        };

        const produtos = await knex('produtos').orderBy('id');

        req.produtos = produtos;

        next();

    } catch (error) {
        return res.status(500).json({ mensagem: error.message });
    }
};

module.exports = validaListarProduto;