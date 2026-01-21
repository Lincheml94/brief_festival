import ProgrammationRepository from "../repository/programmation_repository";
import type { Request, Response } from "express";
class ProgrammationController {
	// méthode reliée à la route en GET située dans le routeur
	public index = async (_req: Request, res: Response) => {
		// récupération des résulats le requete
		const results = await new ProgrammationRepository().selectAll();

		// si la requete renvoie une erreur
		if (results instanceof Error) {
			res.status(400).json({
				status: 400,
				message:
					process.env.NODE_ENV === "production" ? "Error" : results.message,
			});

			return;
		}

		//   renvoyer  une réponse avec un code de staut HTTP et au format JSON
		res.status(200).json({
			status: 200,
			message: "Ok PP",
			data: results,
		});
	};

	public selectOne = async (req: Request, res: Response) => {
		// req.params:recuperer les variables de rout
		// récupération des résulats le requete
		const results = await new ProgrammationRepository().selectOne(req.params);

		// si la requete renvoie une erreur
		if (results instanceof Error) {
			res.status(400).json({
				status: 400,
				message:
					process.env.NODE_ENV === "production" ? "Error" : results.message,
			});

			return;
		}

		//   renvoyer  une réponse avec un code de staut HTTP et au format JSON
		res.status(200).json({
			status: 200,
			message: "Ok platform",
			data: results,
		});
	};
}

export default ProgrammationController;