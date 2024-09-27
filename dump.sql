CREATE DATABASE Db_FrenteDeCaixa;

CREATE TABLE
    usuarios(
        id SERIAL PRIMARY KEY NOT NULL,
        nome TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        senha TEXT NOT NULL
    );

CREATE TABLE
    categorias(
        id SERIAL PRIMARY KEY NOT NULL,
        descricao TEXT NOT NULL
    );

INSERT INTO
    categorias(descricao)
VALUES ('INFORMATICA'), ('CELULARES'), ('BELEZA E PERFUMARIA'), ('MERCADO'), ('LIVROS E PAPELARIA'), ('BRINQUEDOS'), ('MODA'), ('BEBE'), ('GAMES');

CREATE TABLE
    produtos (
        id SERIAL PRIMARY KEY,
        descricao TEXT NOT NULL,
        quantidade_estoque INT,
        valor INT,
        categoria_id INT REFERENCES categorias(id)
    );

CREATE TABLE
    clientes(
        id SERIAL PRIMARY KEY NOT NULL,
        nome TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        cpf TEXT NOT NULL UNIQUE,
        cep TEXT,
        rua TEXT, 
        numero TEXT,
        bairro TEXT,
        cidade TEXT,
        estado TEXT
    );

CREATE TABLE
    pedidos(
        id SERIAL PRIMARY KEY,
        cliente_id INT REFERENCES clientes(id),
        observacao TEXT,
        valor_total INT
    );

CREATE TABLE
    pedido_produtos(
        id SERIAL PRIMARY KEY,
        pedido_id INT REFERENCES pedidos(id),
        produto_id INT REFERENCES produtos(id),
        quantidade_produto INT,
        valor_produto INT
    );