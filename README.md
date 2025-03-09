# La Pizzaria Famiglia 🍕

Bem-vindo ao repositório do projeto **La Pizzaria Famiglia**! Este projeto foi desenvolvido como parte de um estudo prático sobre **MongoDB** e **conexões na nuvem**, utilizando **Node.js**, **Express** e **MongoDB Atlas** para armazenamento de dados.

---

## 🚀 Visão Geral

O projeto consiste em um site completo para uma pizzaria fictícia, com as seguintes funcionalidades:

- **Catálogo de Pizzas**: Exibe as pizzas disponíveis, com nome, descrição, preço e imagem.
- **Aperitivos e Acréscimos**: Lista de aperitivos e opções de acréscimos para pedidos.
- **Comentários**: Seção de depoimentos de clientes.
- **Design Responsivo**: Layout adaptável para dispositivos móveis e desktops.

O foco principal foi estudar e implementar a integração com o **MongoDB Atlas** (banco de dados na nuvem), além de explorar conceitos como **modelagem de dados**, **consultas ao banco de dados** e **deploy de aplicações**.

---

## 🛠️ Tecnologias Utilizadas

- **Front-End**:
  - HTML5, CSS3, JavaScript
  - FontAwesome para ícones
  - Google Fonts para tipografia
- **Back-End**:
  - Node.js
  - Express.js
  - MongoDB Atlas para armazenamento de dados na nuvem
- **Ferramentas**:
  - Git para controle de versão
  - Visual Studio Code como editor de código
  - Postman para testes de API

---

## 📦 Como Executar o Projeto

Siga os passos abaixo para rodar o projeto localmente:

### Pré-requisitos

- Node.js instalado (versão 16 ou superior)
- Conta no [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) para criar um cluster na nuvem
- Git (opcional)

### Passos

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/la-pizzaria-famiglia.git
   cd la-pizzaria-famiglia
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Configure o ambiente**:
   - Crie um arquivo `.env` na raiz do projeto e adicione a URL de conexão do MongoDB Atlas:
     ```env
     MONGODB_URI=sua_url_de_conexao_do_mongodb_atlas
     ```
   - Substitua `sua_url_de_conexao_do_mongodb_atlas` pela URL do seu cluster no MongoDB Atlas.

4. **Inicie o servidor**:
   ```bash
   npm start
   ```

5. **Acesse o site**:
   - Abra o navegador e acesse `http://localhost:3000`.

---

## 🌐 Rotas da API

O projeto possui as seguintes rotas para buscar dados:

- **Pizzas**: `GET /catalogo`
- **Aperitivos**: `GET /aperitivos`
- **Acréscimos**: `GET /acrescimos`
- **Comentários**: `GET /comentarios`

---

## 🎯 Objetivos de Estudo

Este projeto foi desenvolvido com foco em:

1. **MongoDB Atlas**:
   - Configuração de um cluster na nuvem.
   - Conexão de uma aplicação Node.js ao MongoDB Atlas.
   - Operações básicas de CRUD (Create, Read, Update, Delete).

2. **Modelagem de Dados**:
   - Definição de schemas e modelos no MongoDB.
   - Relacionamentos simples entre coleções.

3. **Integração Front-End e Back-End**:
   - Uso de `fetch` para consumir APIs no front-end.
   - Exibição dinâmica de dados no HTML.

4. **Deploy na Nuvem**:
   - Configuração de variáveis de ambiente para conexões seguras.
   - Boas práticas para deploy de aplicações com banco de dados na nuvem.

---

## 🤝 Como Contribuir

Contribuições são bem-vindas! Siga os passos abaixo:

1. Faça um fork do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`).
4. Faça push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

---

## 📄 Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Autor

- **Murilo Dias Chossani**
- GitHub: [self1027](https://github.com/self1027)
- LinkedIn: [Murilo Dias Chossani](https://www.linkedin.com/in/murilo-dias-chossani-640ba0320/)
- Email: diasmurilo02@gmail.com

---

## 🙏 Agradecimentos

- Imagens de [Freepik](https://www.freepik.com).
- Ícones do [FontAwesome](https://fontawesome.com).
- Fontes do [Google Fonts](https://fonts.google.com).
