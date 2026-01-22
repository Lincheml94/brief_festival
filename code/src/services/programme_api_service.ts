import type { Programmation } from "../../modele/programmation";
import type { ApiResponse } from "../models/api_response";

class ProgrammationApiService {
	// préfixe de l'API (utilisé pour les requêtes)
	private prefix = "/api/programmation";

	// sélection de tous les enregistrements
	public selectAll = async (): Promise<ApiResponse<Programmation[]>> => {
		// configurer la requête HTTP
		// import.meta.env permet d'importer une variable d'environnement dans vite/react
		const request = new Request(
			`${import.meta.env.VITE_API_URL}${this.prefix}`,
		);
		// exécuter la requête
		const response = await fetch(request);

		// convertir la réponse en JSON
		// sérialiser : convertir des données complexes(objets, array) en chaine de caractère
		// désérialiser : convertir une chaîne de caractère en données complexes (objets, array…)

		const results = await response.json();

		// retourner les résultats
		return results;
	};

	public selectOne = async (id:number): Promise<ApiResponse<Programmation>> => {
		const request = new Request(
			`${import.meta.env.VITE_API_URL}${this.prefix}/${id}`,
		);
		const response = await fetch(request);

		const results = await response.json();

		return results;
	};
}

export default ProgrammationApiService;