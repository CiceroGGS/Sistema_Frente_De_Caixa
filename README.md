# Sistema Frente de Caixa - Backend 🛒

## 🚀 Sobre o projeto
Este projeto visa criar uma API REST que simula um caixa de mercado, oferecendo funcionalidades do dia a dia. A ideia é facilitar o gerenciamento de vendas, produtos e clientes em um ambiente de mercado. As funcionalidades incluem:

- Login de usuário e validação do usuário logado.
- Diversos CRUDs para gerenciamento de produtos, usuários, clientes e pedidos.
- Envio de e-mails para notificações sobre pedidos.

## 🔨 Funcionalidades do projeto
A API oferece endpoints de CRUD para várias entidades, incluindo produtos, usuários, clientes e pedidos. As validações de usuários logados são realizadas através de um token de autenticação, garantindo a segurança da aplicação.

## 🛠️ Ferramentas utilizadas
O projeto foi desenvolvido utilizando as seguintes tecnologias:

- **Node.js** e **Express**: Para construção do back-end.
- **Postgres**: Banco de dados da aplicação.
- **Knex**: Query builder para facilitar a criação das queries.
- **JWT** e **Bcryptjs**: Para autenticação e validação dos usuários ao utilizar os endpoints.
- **Joi**: Para validação dos endpoints.
- **Nodemailer**: Biblioteca Node.js para envio de emails, integrada com o Mailtrap.io para testes e desenvolvimento seguro.

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
   ```plaintext
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
├── dump.sql
├── package-lock.json
├── package.json
└── README.md
```

## 📡 Endpoints

### 📋 Categoria

- **Listar Categoria (GET)**  
  `http://localhost:PORTA/categoria`

---

### 👤 Usuário

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

### 📦 Produto

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
  ```

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

### 🏢 Cliente

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
  ```
  O endereço é autocompletado no banco de dados através do CEP.

- **Listar Clientes (GET)**  
  `http://localhost:3000/cliente`

- **Listar Cliente pelo ID (GET)**  
  `http://localhost:3000/cliente_id/`

---

### 📝 Pedido

- **Cadastrar Pedido (POST)**  
  `http://localhost:3000/pedido/`  
  Exemplo de body da requisição:  
  ```json
  {
      "cliente_id": cliente_id,
      "observacao": "Observação do pedido",
      "pedido_produtos": [
          {
              "produto_id": id_produto,
              "quantidade_produto": quantidade_produto
          }
      ],
      "email": "xpto@gmail.com"
  }
  ```
  O email informado irá receber uma mensagem de "Seu pedido foi confirmado com sucesso!" e a observação informada no body.

- **Listar Pedidos (GET)**  
  `http://localhost:3000/pedido/`

## 🤝 Como Contribuir
	1-Faça um fork do projeto
	2-Crie sua branch: git checkout -b feature/nova-feature
	3-Commit suas mudanças: git commit -m 'Adiciona recurso X'
	4-Push para o repositório: git push origin feature/nova-feature
	5-Abra um Pull Request

📧 Contato: cicerog.silvestre@gmail.com
