const express = require('express');
const fs = require('fs').promises; // Using fs.promises for modern async handling
const app = express();
const PORT = 5000; // Port where the API runs

// Middleware to process JSON
app.use(express.json());

// GET route to check if the API is running
app.get('/', (req, res) => {
    res.send('Skynet activa');
});

// POST route to receive data
app.post('/enviar-dados', async (req, res) => {
    const dados = req.body; // Data sent by the client

    console.log('Dados recebidos:', dados);

    try {
        // Save data to dados.json
        await fs.writeFile('dados.json', JSON.stringify(dados, null, 2));

        // Return response
        res.json({ mensagem: 'Dados recebidos com sucesso!', dados });
    } catch (err) {
        console.error('Erro ao salvar os dados:', err);
        return res.status(500).json({ mensagem: 'Erro ao salvar os dados' });
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