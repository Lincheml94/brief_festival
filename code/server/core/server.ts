// import cors from "cors";
import express from "express";
import ArtistRouter from "../routeur/artist_routeur";
import PrgrammationRouter from "../routeur/programation_routeur";
import HomepageRouter from "../routeur/homepage_routeur";
import cors from 'cors';


class Server {
	// propriétés
	private app = express();
	private router = express.Router();

	// constructuer
	constructor() {
		// integrer le middleware express JSON qui permet de recuperer le propriete body de la requte HTTB en JSONS

		this.app.use(express.json());

		// intrégrer le middleware Cros - cross origin resours
		this.app.use(cors({ origin: process.env.ORIGINS?.split(",") }));
		// relier le routuer à l'application
		this.app.use(this.router);

		//appel des routers
		this.routerlist();
	}

	//  méthodes
	private routerlist = () => {
		// créer un préfixe à touts les routes inclues dans un routeur
		this.router.use("/api", new HomepageRouter().getRoutes());
		this.router.use("/api/artist", new ArtistRouter().getRoutes());
		this.router.use("/api/programmation", new PrgrammationRouter().getRoutes());
	};

	//   demarrer le serveur
	public start = () => {
		return this.app;
	};
}

export default Server;