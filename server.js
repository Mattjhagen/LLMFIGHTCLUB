const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post('/api/debate', async (req, res) => {
    const { topic, ais } = req.body;

    if (!topic || !ais || !Array.isArray(ais) || ais.length < 2) {
        return res.status(400).json({ error: 'Invalid request. Please provide a topic and at least two AIs.' });
    }

    console.log(`Debate topic: ${topic}`);
    console.log(`Selected AIs: ${ais.join(', ')}`);

    // In a real application, you would make API calls to the selected AIs here.
    // For this example, we'll return mock responses.
    const responses = {};
    for (const ai of ais) {
        responses[ai] = `This is a simulated response from ${ai.toUpperCase()} about "${topic}".`;
    }

    // Simulate a delay to mimic real API calls
    setTimeout(() => {
        res.json(responses);
    }, 1500);
});

app.listen(port, () => {
    console.log(`AI Fight Club backend listening at http://localhost:${port}`);
});
