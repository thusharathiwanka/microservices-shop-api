const express = require("express");
const cors = require("cors");
const proxy = require("express-http-proxy");

const app = express();

app.use(express.json());
app.use(cors());

const BASE_URL = "http://localhost:";

app.use("/customers", proxy(`${BASE_URL}8001`));
app.use("/products", proxy(`${BASE_URL}8002`));
app.use("/shopping", proxy(`${BASE_URL}8003`));

app.get("/", (req, res) => res.status(200).json({ msg: "Response from gateway service" }));

app.listen(8000, () => console.log("Gateway service is running on port 8000"));
