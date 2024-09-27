const knex = require("../../conexao");
const promiseCEP = require("cep-promise");

const cadastrarCliente = async (req, res) => {

    const { nome, email, cpf, cep, numero } = req.body;

    try {

        const buscaCEP = await promiseCEP(cep);

        if (buscaCEP) {
            const endereco = {
                rua: buscaCEP.street,
                bairro: buscaCEP.neighborhood,
                cidade: buscaCEP.city,
                estado: buscaCEP.state
            };
        };

        await knex("clientes").insert({ nome, email, cpf, cep, rua, numero, ...endereco });

        return res.status(201).json({ mensagem: "Cliente cadastrado com sucesso" });

    } catch (error) {
        return res.status(500).json({ mensagem: `Ocorreu um erro interno` });
    }
}


module.exports = cadastrarCliente;



