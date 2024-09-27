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
- **Nodemailer**: Uma biblioteca Node.js para envio de emails, integrada com o Mailtrap.io para testes e desenvolvimento seguro.

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

## Endpoints

### Categoria

- **Listar Categoria (GET)**  
  `http://localhost:PORTA/categoria`

---

### Usuário

- **Cadastrar Usuário (POST)**  
  `http://localhost:3000/usuario`  
  Cadastra o usuário e criptografa sua senha em hash.

- **Logar Usuário (GET)**  
  `http://localhost:3000/usuario`  
  Gera o token de autenticação.

> **Observação:** Todos os endpoints a seguir necessitam de um token de autenticação.

- **Listar Usuário (POST)**  
  `http://localhost:3000/usuario`

- **Atualizar Usuário (POST)**  
  `http://localhost:3000/usuario`

---

### Produto

- **Cadastrar Produto (POST)**  
  `http://localhost:3000/produto`  
  Exemplo de body da requisição:  
  ```json
  {
      "descricao": "descricao do produto", 
      "quantidade_estoque": quantidade_do_produto_em_estoque,
      "valor": valor_do_produto,
      "categoria_id": categoria_id
  }
- **Atualizar Produto (PUT)**  
  `http://localhost:3000/produto/"IdProduto"`  
  Produto atualizado através do ID informado no parâmetro da URL.

- **Listar Produtos (GET)**  
  `http://localhost:3000/produto/`

- **Detalhar Produto por ID (GET)**  
  `http://localhost:3000/produto/"IdProduto"`

- **Deletar Produto (DELETE)**  
  `http://localhost:3000/produto/"IdProduto"`

---

### Cliente

- **Cadastrar Cliente (POST)**  
  `http://localhost:3000/cliente`  
  Exemplo de body da requisição:  
  ```json
  {
      "nome": "Nome",
      "email": "xop@gmail.com",
      "cpf": "1111111111",
      "cep": "7777777",
      "numero": "xpoNumero"
  } 
O endereço é autocompletado no banco de dados através do CEP.

- **Listar Clientes (GET))**  
  `http://localhost:3000/cliente`
- **Listar Cliente pelo ID (GET)**  
  `http://localhost:3000/cliente_id/`

---

### Pedido

- **Cadastrar Pedido (POST)**  
  `http://localhost:3000/pedido/`  
  Exemplo de body da requisição:  
  ```json
  {
      "cliente_id": cliente_id,
      "observacao": "Observasao do pedido",
      "pedido_produtos": [
          {
              "produto_id": id_produto,
              "quantidade_produto": quanditade_produto
          }
      ],
      "email": "xpto@gmail.com"
  }
O email informado irá receber uma mensagem de "Seu pedido foi confirmado com sucesso!" e a observação informada no body.

- **Listar Pedidos (GET)**  
  `http://localhost:3000/pedido/`

## 📬 Contato
Para mais informações, entre em contato com [Cicero Guilherme](mailto:cicerog.silvestre@gmail.com).
