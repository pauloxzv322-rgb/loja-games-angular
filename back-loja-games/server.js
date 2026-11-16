const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Banco de dados temporário na memória com 2 produtos iniciais
let produtos = [
  { id: 1, nome: 'PlayStation 5 Slim', descricao: 'Console 1TB com controle DualSense', preco: 3799.90, estoque: 5 },
  { id: 2, nome: 'Headset Gamer HyperX', descricao: 'Som surround 7.1 com microfone', preco: 450.00, estoque: 12 }
];
let proximoId = 3;

// 1. GET - Listar todos os produtos
app.get('/api/products', (req, res) => {
  res.json(produtos);
});

// 2. GET - Buscar um produto por ID
app.get('/api/products/:id', (req, res) => {
  const id = Number(req.params.id);
  const produto = produtos.find(p => p.id === id);
  if (!produto) return res.status(404).json({ erro: 'Produto não encontrado' });
  res.json(produto);
});

// 3. POST - Cadastrar novo produto
app.post('/api/products', (req, res) => {
  const novoProduto = {
    id: proximoId++,
    nome: req.body.nome,
    descricao: req.body.descricao,
    preco: Number(req.body.preco),
    estoque: Number(req.body.estoque)
  };
  produtos.push(novoProduto);
  res.status(201).json(novoProduto);
});

// 4. PUT - Atualizar produto existente
app.put('/api/products/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = produtos.findIndex(p => p.id === id);
  if (index === -1) return res.status(404).json({ erro: 'Produto não encontrado' });

  produtos[index] = {
    id: id,
    nome: req.body.nome,
    descricao: req.body.descricao,
    preco: Number(req.body.preco),
    estoque: Number(req.body.estoque)
  };
  res.json(produtos[index]);
});

// 5. DELETE - Excluir produto
app.delete('/api/products/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = produtos.findIndex(p => p.id === id);
  if (index === -1) return res.status(404).json({ erro: 'Produto não encontrado' });

  produtos.splice(index, 1);
  res.status(204).send();
});

app.listen(3000, () => {
  console.log('🚀 API Back-End rodando em http://localhost:3000/api/products');
});
