const express = require('express');
const app = express();
const PORT = 3000;

// Configurar o EJS
app.set('view engine', 'ejs');
app.set('views', './views');

// Middleware para arquivos estáticos
app.use(express.static('public'));

// Rota inicial
app.get('/', (req, res) => {
    res.render('index', { title: 'Página Inicial' });
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
