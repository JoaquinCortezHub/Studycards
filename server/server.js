const express = require("express");
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

app.get("/api", (req, res) => {
	res.json({ "users": ["userOne", "userTwo", "userThree", "userFour"] })
});

app.post('/api/addUser', (req, res) => {
    const {newUser} = req.body
    const updatedData = {"users": [...data.users, newUser]};
    res.json(updatedData);
});


const PORT = 5000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});