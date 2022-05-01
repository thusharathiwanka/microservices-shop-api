const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
	res.json({ msg: "Response from product service" }).status(200);
});

app.listen(8002, () => {
	console.log("Product service is running on port 8002");
});
