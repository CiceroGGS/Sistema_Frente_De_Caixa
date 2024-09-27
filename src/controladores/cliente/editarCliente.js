const knex = require('../../conexao');
const promiseCEP = require("cep-promise");

const editarCliente = async (req, res) => {

    const { id } = req.params;
    const { nome, email, cpf, cep, numero } = req.body;

    let rua, bairro, cidade, estado;

    let endereco = {};

    try {

        const buscaCEP = await promiseCEP(cep);

        if (buscaCEP) {
            endereco = {
                rua: buscaCEP.street,
                bairro: buscaCEP.neighborhood,
                cidade: buscaCEP.city,
                estado: buscaCEP.state
            }
        }

        await knex('clientes')
            .update({ nome, email, cpf, cep, rua, numero, ...endereco })
            .where({ id });

        return res
            .status(200)
            .json({ mensagem: 'Cliente atualizado com sucesso.' });

    } catch (error) {
        return res.status(500).json({ mensagem: `Ocorreu um erro interno: ${error.message}` });
    }
}


module.exports = editarCliente;