import type { Artist } from "../../modele/artist";
import type { Programmation } from "../../modele/programmation";
import MySQLService from "../service/mysql_service";
import ArtistRepository from "./artist_repository";

class ProgrammationRepository {
    // nom la table SQL

    private table = "programmation";
    // selectionner tout les enrehistrement
    public selectAll = async (): Promise<Programmation[] | unknown> => {
        const connection = await new MySQLService().connect();

        // requété SQL
        // SELECT plateform* FROM Xgame_dev.menu;
        const sql = `
		SELECT ${this.table}.*,
        GROUP_CONCAT(artist.id) AS artist_ids
        FROM
        ${process.env.MYSQL_DATABASE}.${this.table}
        JOIN
        ${process.env.MYSQL_DATABASE}.artist_programmation
        ON
        artist_programmation.programmation_id = programmation.id
        JOIN
         ${process.env.MYSQL_DATABASE}.artist
         ON
         artist.id = artist_programmation.artist_id
         GROUP BY
         ${this.table}.id;
		 ;`;
        // try/catch exécuter la requête SQL ou récupérer une erreur
        try {
            const [query] = await connection.execute(sql);
            for (let i = 0; i < (query as Programmation[]).length; i++) {
                //récupérere un résultat
                const result = (query as Programmation[])[i] as Programmation;

                result.artists = (await new ArtistRepository().selectInList(
                result.artist_ids as string
                )) as Artist[];
            }

            return query;
        } catch (error) {
            return error;
        }
    };
    public selectOne = async (data: Partial<Artist>): Promise<Artist | unknown> => {
		const connection = await new MySQLService().connect();

		// requété SQL
		// variable de requéte : précédée d'un :, suivi du nom de la variable
		// requetes preparées (utilisation des variable de requetes): la requete est exécuteé si elle ne répresente pas de risque de sécurité
		const sql = `
			SELECT ${this.table}.*,
			GROUP_CONCAT(DISTINCT artist.id) AS artist_ids,
			FROM
			${process.env.MYSQL_DATABASE}.${this.table}
			JOIN
			${process.env.MYSQL_DATABASE}.artist_programmation
			ON
			artist_programmation.artist_id = programmation.id
			JOIN
			${process.env.MYSQL_DATABASE}.artist
			ON 
			artist.id = artist_programmation.artist_id
			WHERE ${this.table}.id = :id
			GROUP BY
			${this.table}.id;
		`;
		// try/catch exécuter la requête SQL ou récupérer une erreur
		try {
			const [query] = await connection.execute(sql, data);

			//recupérer le premier indice d'un array
			const result = (query as Programmation[]).shift() as Programmation;
			//clé etrangére
			result.artists = (await new ArtistRepository().selectInList(
		    result.artist_ids as string,
			)) as Artist [];


			// retourner les résulrtats
			return result;
		} catch (error) {
			return error;
		}
    };
    	public selectInList = async (list: string): Promise<Artist[] | unknown> => {
		const connection = await new MySQLService().connect();

		// requété SQL
	
		const sql = `
		SELECT ${this.table}.*
		FROM ${process.env.MYSQL_DATABASE}.${this.table}
		WHERE  ${this.table}.id IN (${list})
		;`;
		// try/catch exécuter la requête SQL ou récupérer une erreur
		try {
			const [query] = await connection.execute(sql);
			return query;
		} catch (error) {
			return error;
		}
	};

};
export default ProgrammationRepository;