const jwt = require("jsonwebtoken");
const senhaJwt = process.env.SENHA_JWT;
const knex = require("../../conexao");

const autenticaUsuario = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res
      .status(401)
      .json({
        mensagem:
          "Para acessar este recurso um token de autenticação válido deve ser enviado.",
      });
  }

  const token = authorization.split(" ")[1];

  try {
    const { id } = jwt.verify(token, senhaJwt);

    const query = await knex("usuarios").where({ id }).first();

    req.usuario = query;

    next();
  } catch (error) {
    return res
      .status(401)
      .json({
        mensagem:
          "Para acessar este recurso um token de autenticação válido deve ser enviado.",
      });
  }
};


module.exports = autenticaUsuario;
