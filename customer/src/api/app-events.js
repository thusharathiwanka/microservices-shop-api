const CustomerService = require("../services/customer-service");

module.exports = app => {
	const customerService = new CustomerService();

	app.post("/app-events", async (req, res, next) => {
		const { payload } = req.body;

		customerService.SubscribeEvents(payload);

		console.log("==================== Shopping service received event ====================");

		return res.status(200).json(payload);
	});
};
