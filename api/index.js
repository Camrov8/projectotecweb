const express = require('express');
const fs = require('fs').promises; // Using fs.promises for modern async handling
const app = express();
const PORT = 5000; // Port where the API runs
const cors = require('cors');
// Middleware to process JSON
app.use(express.json());
app.use(cors());

// GET route to check if the API is running
app.get('/', (req, res) => {
    res.send('Skynet activa');
});

// POST route to receive data
app.post('/enviar-dados', async (req, res) => {
    const novosDados = req.body; // Dados enviados pelo cliente

    console.log('Dados recebidos:', novosDados);

    try {
        // Inicializa um array vazio para dados existentes
        let dadosExistentes = [];

        // Tenta ler o arquivo existente
        try {
            const data = await fs.readFile('dados.json', 'utf-8'); // Lê o arquivo
            dadosExistentes = JSON.parse(data); // Converte JSON para objeto/array
        } catch (err) {
            // Se o arquivo não existir, mostra um aviso (mas não lança erro)
            console.warn('Arquivo não encontrado. Criando um novo.');
        }

        // Verifica se os dados existentes são realmente um array
        if (!Array.isArray(dadosExistentes)) {
            dadosExistentes = [];
        }

        // Adiciona os novos dados ao array existente
        dadosExistentes.push(novosDados);

        // Grava os dados atualizados de volta no arquivo
        await fs.writeFile('dados.json', JSON.stringify(dadosExistentes, null, 2));

        // Retorna a resposta
        res.json({ mensagem: 'Dados adicionados com sucesso!', dados: novosDados });
    } catch (err) {
        console.error('Erro ao salvar os dados:', err);
        res.status(500).json({ mensagem: 'Erro ao salvar os dados' });
    }
});


// GET route to read data from dados.json
app.get('/ler', async (req, res) => {
    try {
        // Read data from dados.json
        const data = await fs.readFile('./dados.json', 'utf-8');
        const dados = JSON.parse(data);

        // Return the read data
        res.json(dados);
    } catch (err) {
        console.error('Erro ao ler os dados:', err);
        res.status(500).json({ error: 'Erro ao ler os dados' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Servidor está a correr em http://localhost:${PORT}`);
});