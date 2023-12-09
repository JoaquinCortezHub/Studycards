const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

//Middleware
app.use(bodyParser.json());

//Routes
app.post("/api/submit-text", (req, res) => {
	const userInput = req.body.text;

	// Call OpenAI API and process the response

	// Example response
	const generatedText = "Flashcards generated based on user input.";

	res.json({ result: generatedText });
});

app.get("/api/flashcards", (req, res) => {
	// Retrieve and send generated flashcards
	// Example response
	const flashcards = ["Question 1: ...", "Question 2: ..."];

	res.json({ flashcards });
});

app.delete("/api/flashcards", (req, res) => {
	// Clear generated flashcards
	// Example response
	res.json({ message: "Flashcards cleared." });
});

// Start the server
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
