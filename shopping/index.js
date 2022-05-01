const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
	res.json({ msg: "Response from shopping service" }).status(200);
});

app.listen(8003, () => {
	console.log("Shopping service is running on port 8003");
});
