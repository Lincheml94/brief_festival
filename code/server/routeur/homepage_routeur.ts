import express from "express";
import HomepageController from "../controller/homepage_controller";

class HomepageRouter {
	// router express

	private router = express.Router();
	// list des routers
	public getRoutes = () => {
		// créer une route /api accessible en GET
		// le préfixe des route /api
		this.router.get("/", new HomepageController().index);

		return this.router;
	};
}

export default HomepageRouter;