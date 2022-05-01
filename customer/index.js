const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
	res.json({ msg: "Response from customer service" }).status(200);
});

app.listen(8001, () => {
	console.log("Customer service is running on port 8001");
});
