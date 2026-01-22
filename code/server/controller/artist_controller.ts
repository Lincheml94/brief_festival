import ArtistRepository from "../repository/artist_repository";
import type { Request, Response } from "express";


class ArtistController{

public index = async (_req: Request, res: Response) => {
		const results = await new ArtistRepository().selectAll();
console.log(results);

		if (results instanceof Error) {
			res.status(400).json({
				status: 400,
				message:
					process.env.NODE_ENV === "production" ? "Error" : results.message,
			});

			return;
		}
		res.status(200).json({
			status: 200,
			message: "Ok Artist",
			data: results,
		});
};
    public selectOne = async (req: Request, res: Response) => {
		// req.params:recuperer les variables de rout
		// récupération des résulats le requete
		const results = await new ArtistRepository().selectOne(req.params);

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
			message: "Ok A",
			data: results,
		});
    };
    public insert = async (req: Request, res: Response) => {

        // const file = (req.files as Express.Multer.File[]).shift() as Express.Multer.File;
		
        //
        // const fileService = new FileService();

        // 
        // const fullname = await fileService.rename(file);
	
        // req.body:recuperer les proprite body de le requete HTTP           image: fullname,
        const results = await new ArtistRepository().insert({...req.body});

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
		res.status(201).json({
			status: 201,
			message: "Created",
			data: results,
		});
	};
public update = async (req: Request, res: Response) => {
		// const file = (req.files as Express.Multer.File[]).shift() as Express.Multer.File;
		
		 //
		// const fileService = new FileService();

		// 
		// let fullname;

		// if(file) 
		// {
		// 	fullname = await fileService.rename(file);
		// }
		// else {
		// 	fullname = (await new GameRepository().selectOne(req.body) as Game).image
			
		// }

		// console.log(fullname);
		

		// req.body:recuperer les proprite body de le requete HTTP        image: fullname
		const results = await new ArtistRepository().update({...req.body,});

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
			message: "update",
			data: results,
		});
};
    public delete = async (req: Request, res: Response) => {
		console.log(req.body);

		// req.body:recuperer les proprite body de le requete HTTP
		const results = await new ArtistRepository().delete(req.body);

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
			message: "delete",
			data: results,
		});
	};
}
export default ArtistController;