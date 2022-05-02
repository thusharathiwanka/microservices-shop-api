const ShoppingService = require("../services/shopping-service");

module.exports = app => {
	const shoppingService = new ShoppingService();

	app.use("/app-events", async (req, res, next) => {
		const { payload } = req.body;

		shoppingService.SubscribeEvents(payload);

		console.log("===============  Shopping service received event ================");
		return res.status(200).json(payload);
	});
};
