# 🎮 Loja Gamer - E-commerce de Eletrônicos e Jogos (CRUD Angular + API Node.js)

Aplicação Full-Stack desenvolvida para integrar uma interface Front-End em **Angular** estilizada com **Bootstrap** a uma API REST local em **Node.js**, realizando todas as operações de gerenciamento de catálogo (CRUD).

## 📁 Estrutura do Repositório

* **`front-loja-games/`**: Aplicação web em Angular contendo os componentes de listagem e formulário, o modelo de dados (`Produto`) e o serviço HTTP (`ProdutoService`).
* **`back-loja-games/`**: Servidor local em Node.js com Express e CORS expondo os endpoints da API em `http://localhost:3000/api/products`.
* **`prints-postman/`**: Evidências visuais (capturas de tela) e arquivo de coleção de testes (`testes.http`) validando as requisições `GET`, `POST`, `PUT` e `DELETE`.

## ⚙️ Funcionalidades Implementadas (`ProdutoService`)

* **Consulta (`GET`)**:
  * `listar()`: Retorna todos os produtos cadastrados via `/api/products`.
  * `buscarPorId(id)`: Busca um produto específico pelo identificador via `/api/products/:id`.
* **Criação (`POST`)**:
  * `cadastrar(produto)`: Envia os dados do formulário para criar um novo registro em `/api/products`.
* **Atualização (`PUT`)**:
  * `atualizar(id, produto)`: Atualiza as informações de um produto existente em `/api/products/:id`.
* **Exclusão (`DELETE`)**:
  * `excluir(id)`: Remove um produto do catálogo em `/api/products/:id`.

## 🚀 Como Executar o Projeto Localmente

### 1. Iniciar o Servidor Back-End (API)
Abra um terminal na pasta `back-loja-games` e execute:
```bash
npm install
node server.js
```
O servidor estará ativo em `http://localhost:3000/api/products`.

### 2. Iniciar o Front-End (Angular)
Abra um segundo terminal na pasta `front-loja-games` e execute:
```bash
npm install
ng serve --open
```
A aplicação abrirá automaticamente no navegador em `http://localhost:4200`.
