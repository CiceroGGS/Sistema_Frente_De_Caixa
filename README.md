# Sistema Frente de Caixa - Backend 🛒

## 🚀 Sobre o projeto
O projeto tem como objetivo criar uma API REST do zero simulando um caixa de mercado, trazendo funcionalidades do dia a dia. Algumas das funcionalidades incluídas são:

- Login de usuário e validação do usuário logado.
- Diversos CRUDs para gerenciamento de produtos, usuários, clientes e pedidos.
- Envio de e-mails para notificações.

## 🔨 Funcionalidades do projeto
A API oferece endpoints de CRUD para diversas entidades, incluindo produtos, usuários, clientes e pedidos. Possui validações de usuários logados através de um token de autenticação para utilização dos endpoints, e envio de emails para cada pedido realizado.

## 🛠️ Ferramentas utilizadas
O projeto foi desenvolvido utilizando as seguintes tecnologias:

- **Node.js** e **Express**: Para construção do back-end.
- **Postgres**: Banco de dados da aplicação.
- **Knex**: Query builder para facilitar a criação das queries.
- **JWT** e **Bcryptjs**: Para autenticação e validação dos usuários ao utilizar os endpoints.
- **Joi**: Para validação dos endpoints.
- **Nodemailer**: Para envio de emails.

## 🚀 Como executar o projeto

1. **Clone o repositório**
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd sistema-frente-de-caixa
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Crie um arquivo `.env` na raiz do projeto e adicione suas variáveis de ambiente**
   ```
   SENHA_JWT= sua_senha_jwt
   ```

4. **Inicie o servidor**
   ```bash
   npm run dev
   ```

## 📜 Makefile
Se você deseja executar comandos específicos de maneira simplificada, você pode usar o Makefile incluído no projeto. Aqui estão alguns exemplos de comandos disponíveis:

```makefile
install: 
	npm install

start: 
	npm run dev
```

## 📂 Estrutura do projeto
```plaintext
sistema-frente-de-caixa/
├── .github/
├── src/
│   ├── controladores/
│   ├── intermediarios/
│   ├── rotas/
│   ├── schema/
│   ├── utils/
│   ├── conexao.js
│   ├── index.js
│   ├── servidor.js
│   └── ...
├── .env
├── dump.sql;
|── package-lock.json
├── package.json
└── README.md
```

## 📬 Contato
Para mais informações, entre em contato com [Cicero Guilherme](mailto:cicerog.silvestre@gmail.com).
