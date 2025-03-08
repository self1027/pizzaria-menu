const mongoose = require('mongoose');
const { Pizza, Aperitivo, Acrescimo, Comentario } = require('./server'); // Importando os modelos

mongoose.connect('mongodb://localhost/pizzaria')
  .then(async () => {
    // Limpar coleções
    await Pizza.deleteMany({});
    await Aperitivo.deleteMany({});
    await Acrescimo.deleteMany({});
    await Comentario.deleteMany({});
    
    console.log('Banco de dados limpo!');

    // Inserir novas pizzas
    await Pizza.create([
        { nome: 'Bacon', descricao: 'Bacon crocante com queijo e molho de tomate', preco: 40, categoria: 'Especial', imagemUrl: '/images/imagem-bacon.jpg' },
        { nome: 'Basilica', descricao: 'Queijo, molho de tomate, manjericão e azeite', preco: 38, categoria: 'Tradicional', imagemUrl: '/images/imagem-basilica.jpg' },
        { nome: 'Brocolis', descricao: 'Brócolis, queijo e alho', preco: 38, categoria: 'Vegetariana', imagemUrl: '/images/imagem-brocolis.jpg' },
        { nome: 'Calabresa', descricao: 'Calabresa, cebola e azeitonas', preco: 35, categoria: 'Especial', imagemUrl: '/images/imagem-calabresa.jpg' },
        { nome: 'Camarao', descricao: 'Camarões com alho, molho de tomate e queijo', preco: 45, categoria: 'Especial', imagemUrl: '/images/imagem-camarao.jpg' },
        { nome: 'Margherita', descricao: 'Queijo, molho de tomate e manjericão', preco: 30, categoria: 'Tradicional', imagemUrl: '/images/imagem-margherita.jpg' },
        { nome: 'Peperoni', descricao: 'Peperoni, queijo e molho de tomate', preco: 40, categoria: 'Tradicional', imagemUrl: '/images/imagem-peperoni.jpg' },
        { nome: 'Queijo', descricao: 'Queijo derretido com molho de tomate', preco: 28, categoria: 'Tradicional', imagemUrl: '/images/imagem-queijo.jpg' },
        { nome: 'Tropical', descricao: 'Presunto, abacaxi, queijo e molho de tomate', preco: 38, categoria: 'Especial', imagemUrl: '/images/imagem-tropical.jpg' }
        ]);

    // Inserir novos aperitivos
    await Aperitivo.create([
      { nome: 'Batata Frita', descricao: 'Batata frita crocante servida com molho', preco: 18 },
      { nome: 'Bolinho de Bacalhau', descricao: 'Deliciosos bolinhos de bacalhau fritos', preco: 22 },
      { nome: 'Queijo Coalho', descricao: 'Espetos de queijo coalho grelhado', preco: 15 },
      { nome: 'Bruschetta', descricao: 'Pão italiano com tomate, alho e manjericão', preco: 20 },
      { nome: 'Provolone à Milanesa', descricao: 'Queijo provolone empanado e frito', preco: 25 },
      { nome: 'Coxinha de Frango', descricao: 'Coxinhas crocantes recheadas com frango', preco: 16 }
    ]);

    // Inserir novos acréscimos
    await Acrescimo.create([
      { nome: 'Queijo Extra', preco: 5 },
      { nome: 'Bacon Extra', preco: 6 },
      { nome: 'Calabresa Extra', preco: 6 },
      { nome: 'Molho Especial', preco: 4 },
      { nome: 'Cebola Caramelizada', preco: 5 },
      { nome: 'Tomate Seco', preco: 7 }
    ]);

    await Comentario.create([
        { nome: 'Eduardo Monteiro', texto: 'A melhor pizza de calabresa que já comi! Atendimento excelente.' },
        { nome: 'Isabela Fontana', texto: 'Os aperitivos são incríveis, especialmente a bruschetta. Super recomendo!' },
        { nome: 'Vicente Alencar', texto: 'Preço justo e qualidade excelente. A pizza de camarão é sensacional!' }
      ]);      

    console.log('Dados inseridos com sucesso!');
    
    mongoose.connection.close();  // Fechar a conexão após a inserção
  })
  .catch(err => {
    console.error('Erro ao inserir dados', err);
    mongoose.connection.close();  // Fechar a conexão em caso de erro
  });
