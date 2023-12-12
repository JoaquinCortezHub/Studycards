const express = require("express");
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

// Initial data
let backendData = { "users": ["userOne", "userTwo", "userThree", "userFour"] };

app.get("/api", (req, res) => {
    res.json(backendData);
});

app.post('/api/addUser', (req, res) => {
    const { newUser } = req.body;
    backendData = { "users": [...backendData.users, newUser] };
    res.json(backendData);
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
