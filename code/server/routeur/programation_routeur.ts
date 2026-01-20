import express from "express";
import ProgrammationController from "../controller/programation_controller";

class PrgrammationRouter {
	// router express

	private router = express.Router();
	// list des routers
	public getRoutes = () => {
		// créer une route /api accessible en GET
		// le préfixe des route /api
		this.router.get("/", new ProgrammationController().index);

		this.router.get("/:id", new ProgrammationController().selectOne);

		return this.router;
	};
}

export default PrgrammationRouter;