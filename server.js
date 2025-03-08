const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

// Conectar ao MongoDB Atlas (substitua sua URL de conexão)
mongoose.connect(process.env.MONGODB_URI
)
  .then(() => console.log('Conectado ao MongoDB Atlas'))
  .catch((err) => console.error('Erro ao conectar ao MongoDB:', err));

const pizzaSchema = new mongoose.Schema({
  nome: String,
  descricao: String,
  preco: Number,
  categoria: String,
  imagemUrl: String
});
const Pizza = mongoose.model('Pizza', pizzaSchema);

const aperitivoSchema = new mongoose.Schema({
  nome: String,
  descricao: String,
  preco: Number
});
const Aperitivo = mongoose.model('Aperitivo', aperitivoSchema);

const acrescimoSchema = new mongoose.Schema({
  nome: String,
  preco: Number
});
const Acrescimo = mongoose.model('Acrescimo', acrescimoSchema);

const comentarioSchema = new mongoose.Schema({
  nome: String,
  texto: String
});
const Comentario = mongoose.model('Comentario', comentarioSchema);

// Rota para retornar pizzas
app.get('/catalogo', async (req, res) => {
  try {
    const pizzas = await Pizza.find();
    res.json(pizzas);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar pizzas' });
  }
});

// Rota para retornar aperitivos
app.get('/aperitivos', async (req, res) => {
  try {
    const aperitivos = await Aperitivo.find();
    res.json(aperitivos);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar aperitivos' });
  }
});

// Rota para retornar acréscimos
app.get('/acrescimos', async (req, res) => {
  try {
    const acrescimos = await Acrescimo.find();
    res.json(acrescimos);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar acréscimos' });
  }
});

// Rota para retornar comentários
app.get('/comentarios', async (req, res) => {
  try {
    const comentarios = await Comentario.find();
    res.json(comentarios);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar comentários' });
  }
});

// Inicializando o servidor na porta configurada
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

module.exports = { Pizza, Aperitivo, Acrescimo, Comentario };
