const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());

app.get("/", (req, res) => {
	res.json({ message: "Good" });
});
app.get("/api/work", (req, res) => {
	res.json({ status: "ok" });
});

app.listen(PORT, () => {
	console.log(`Movies running at http://localhost:${PORT}`);
});