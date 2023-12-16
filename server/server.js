require('dotenv').config();
const express = require("express");
const bodyParser = require('body-parser');
const OpenAI = require('openai');

const openai = new OpenAI(process.env.OPENAI_API_KEY);
const app = express();
app.use(bodyParser.json());

// Initial data
let backendData = { "users": ["userOne", "userTwo", "userThree", "userFour"] };

app.get("/api", (req, res) => {
    res.json(backendData);
});

app.post('/api/submit', express.json(), async (req, res) => {
    const userInput = req.body.paragraph;

    const response = await openai.complete({
        engine: 'text-davinci-002',
        prompt: userInput,
        max_tokens: 50,
    });

    const summarizedText = response.data.choices[0].text;

    res.json( {confirmation: summarizedText} )
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
