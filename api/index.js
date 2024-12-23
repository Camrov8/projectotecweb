const express = require('express');
const app = express();
const PORT = 5000; // Porta onde a API vai correr

// Middleware para processar JSON
app.use(express.json());

// Rota GET para verificar se a API está a funcionar
app.get('/', (req, res) => {
    res.send('Skynet activa');
});

// Rota POST para receber dados
app.post('/enviar-dados', (req, res) => {
    const dados = req.body; // Dados enviados pelo cliente
    console.log('Dados recebidos:', dados);

    // Retornar resposta
    res.json({ mensagem: 'Dados recebidos com sucesso!', dados });
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor está a correr em http://localhost:${PORT}`);
});