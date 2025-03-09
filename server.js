const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Logar todas as requisições
app.use((req, res, next) => {
  console.log(`Requisição recebida: ${req.method} ${req.url}`);
  next();
});

console.log('MONGODB_URI:', process.env.MONGODB_URI);

const uri = process.env.MONGODB_URI;

mongoose.connect(uri, {serverSelectionTimeoutMS: 5000,})
  .then(() => {
    console.log('Conectado ao MongoDB com sucesso!');
  })
  .catch((err) => {
    console.error('Erro ao conectar ao MongoDB:', err);
  });

const pizzaSchema = new mongoose.Schema({
  nome: String,
  descricao: String,
  preco: Number,
  categoria: String,
  imagemUrl: String,
});
const Pizza = mongoose.model('Pizza', pizzaSchema);

const aperitivoSchema = new mongoose.Schema({
  nome: String,
  descricao: String,
  preco: Number,
});
const Aperitivo = mongoose.model('Aperitivo', aperitivoSchema);

const acrescimoSchema = new mongoose.Schema({
  nome: String,
  preco: Number,
});
const Acrescimo = mongoose.model('Acrescimo', acrescimoSchema);

const comentarioSchema = new mongoose.Schema({
  nome: String,
  texto: String,
});
const Comentario = mongoose.model('Comentario', comentarioSchema);

// Rota para retornar pizzas
app.get('/catalogo', async (req, res) => {
  console.log('Requisição para /catalogo');
  try {
    const pizzas = await Pizza.find();
    console.log('Pizzas encontradas:', pizzas);
    res.json(pizzas);
  } catch (err) {
    console.error('Erro ao buscar pizzas:', err);
    res.status(500).json({ message: 'Erro ao buscar pizzas' });
  }
});

// Rota para retornar aperitivos
app.get('/aperitivos', async (req, res) => {
  console.log('Requisição para /aperitivos');
  try {
    const aperitivos = await Aperitivo.find();
    console.log('Aperitivos encontrados:', aperitivos);
    res.json(aperitivos);
  } catch (err) {
    console.error('Erro ao buscar aperitivos:', err);
    res.status(500).json({ message: 'Erro ao buscar aperitivos' });
  }
});

// Rota para retornar acréscimos
app.get('/acrescimos', async (req, res) => {
  console.log('Requisição para /acrescimos');
  try {
    const acrescimos = await Acrescimo.find();
    console.log('Acréscimos encontrados:', acrescimos);
    res.json(acrescimos);
  } catch (err) {
    console.error('Erro ao buscar acréscimos:', err);
    res.status(500).json({ message: 'Erro ao buscar acréscimos' });
  }
});

// Rota para retornar comentários
app.get('/comentarios', async (req, res) => {
  console.log('Requisição para /comentarios');
  try {
    const comentarios = await Comentario.find();
    console.log('Comentários encontrados:', comentarios);
    res.json(comentarios);
  } catch (err) {
    console.error('Erro ao buscar comentários:', err);
    res.status(500).json({ message: 'Erro ao buscar comentários' });
  }
});

// Inicializando o servidor na porta configurada
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
