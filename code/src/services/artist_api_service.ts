import type { Artist } from "../../modele/artist";
import type { ApiResponse } from "../models/api_response";

class ArtistAPiService { 
private prefix = "/api/artist";

//sélection de tous les enregistrement
	public selectAll = async (): Promise<ApiResponse<Artist[]>> => {
		// configurer la requete HTTP
		// import.meta.env permet d'importer uen varaiable d'environnement dans vit/react
		const request = new Request(
			`${import.meta.env.VITE_API_URL}${this.prefix}`,
		);
		// exécuter la requéte HTTP
		const response = await fetch(request);
		//convertir la réponse en JSON
		// sérialiser : convertir des donne complexes (objet,arry) en chain de caraceters
		// désérialiser convertir une chaine de caracters en donnees complexes :objet,arry....
		const results = await response.json();
		// retourner les resultats
		return results;
    };
    
    	public selectOne = async (id: number): Promise<ApiResponse<Artist>> => {
		const request = new Request(
			`${import.meta.env.VITE_API_URL}${this.prefix}/${id}`,
		);

		const response = await fetch(request);

		const results = await response.json();

		return results;
	};
public insert = async (data: FormData): Promise<ApiResponse<Artist>> => {
		const request = new Request(
			`${import.meta.env.VITE_API_URL}${this.prefix}`,
			{
				method: "post",
				/* Si le formulaire contient un champs de fichier 
                            la propriété body renvoi un objet formData
                            */
				body: data,
				/*
                      Si le formulaire ne contient pas de champs de fichier
                            la propriété body renvoir du JSON : JSON.stringify(...)
                            ajouter l'en-tête Content-Type: applicatio,/json

                    body: JSON.stringify(data)
                    headers:{
                            "Content-Type": "application/json",
                            },
                   */
			},
		);
		// éxecuter la requête HTTP

		const response = await fetch(request);
		// convertir la reponse en JSON en utilisant fonction json: () obligatoire
		// sérialiser: convertir des données complexes (onjet, array) en chaine de caractère
		// désérialiser: convertir une chaine de caractère en données complexes (objet, array...)
		const results = await response.json();
		return results;
};
    public update = async (data: FormData): Promise<ApiResponse<Artist>> => {
		const request = new Request(
			`${import.meta.env.VITE_API_URL}${this.prefix}`,
			{
				method: "put",
				/* Si le formulaire contient un champs de fichier 
                            la propriété body renvoi un objet formData
                            */
				body: data,
				/*
                      Si le formulaire ne contient pas de champs de fichier
                            la propriété body renvoir du JSON : JSON.stringify(...)
                            ajouter l'en-tête Content-Type: applicatio,/json

                    body: JSON.stringify(data)
                    headers:{
                            "Content-Type": "application/json",
                            },
                   */
			},
		);
		// éxecuter la requête HTTP

		const response = await fetch(request);
		// convertir la reponse en JSON en utilisant fonction json: () obligatoire
		// sérialiser: convertir des données complexes (onjet, array) en chaine de caractère
		// désérialiser: convertir une chaine de caractère en données complexes (objet, array...)
		const results = await response.json();
		return results;
	};
public delete = async (data: Partial<Artist>): Promise<ApiResponse<Artist>> => {
		const request = new Request(
			`${import.meta.env.VITE_API_URL}${this.prefix}`,
			{
				method: "delete",
				headers: {
					"Content-Type":  "application/json",
				},
				// sérialiser : transformer une donnee complexe (array, objet)en chain de caracteres
				// deserialiser : transformer une  chain de caracteres
				body: JSON.stringify(data),
			
			},
		);
	

		const response = await fetch(request);
		const results = await response.json();
		return results;
	};
}

export default ArtistAPiService;