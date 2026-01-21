import type { QueryResult } from "mysql2";
import type { Artist } from "../../modele/artist";
import type { Programmation } from "../../modele/programmation";
import MySQLService from "../service/mysql_service";
import ProgrammationRepository from "./programmation_repository";

class ArtistRepository{
    private table = "artist";
    public selectAll = async (): Promise<Artist[] | unknown> => {
        const connection = await new MySQLService().connect();
        
		const sql = `
			SELECT ${this.table}.*,
			GROUP_CONCAT(DISTINCT programmation.id) AS programmation_ids
			FROM
			${process.env.MYSQL_DATABASE}.${this.table}
			JOIN
			${process.env.MYSQL_DATABASE}.artist_programmation
			ON
			artist_programmation.artist_id = ${this.table}.id
			JOIN
			${process.env.MYSQL_DATABASE}.programmation
			ON 
			programmation.id = artist_programmation.programmation_id
			GROUP BY
			${this.table}.id;
		`;

		try {
			const [query] = await connection.execute(sql);

			// boucler sur les resultats pour récupere les objet en relation (compostiion et poo)
			for (let i = 0; i < (query as Artist[]).length; i++) {
				//récupérere un résultat
				const result = (query as Artist[])[i] as Artist;
				//
				result.programmations = (await new ProgrammationRepository().selectInList(
				 result.programmation_ids as string,
				)) as Programmation [];

			}

			return query;
		} catch (error) {
			return error;
		}
	};
public selectOne = async (
		data: Partial<Programmation>,
	): Promise<Programmation | unknown> => {
		const connection = await new MySQLService().connect();

		// requété SQL
		// variable de requéte : précédée d'un :, suivi du nom de la variable
		// requetes preparées (utilisation des variable de requetes): la requete est exécuteé si elle ne répresente pas de risque de sécurité
		const sql = `
		SELECT ${this.table}.*,
        GROUP_CONCAT(programmation.id) AS programmation_ids
        FROM
          ${process.env.MYSQL_DATABASE}.${this.table}
          JOIN
        ${process.env.MYSQL_DATABASE}.artist_programmation
          ON
         artist_programmation.artist_id = artist.id
         JOIN
         ${process.env.MYSQL_DATABASE}.programmation
         ON
         programmation.id = artist_programmation.programmation_id
		 WHERE ${this.table}.id = :id
         GROUP BY
         ${this.table}.id;
		`;
		// try/catch exécuter la requête SQL ou récupérer une erreur
		try {
			const [query] = await connection.execute(sql, data);
			//recupérer le premier indice d'un array
			const result = (query as Artist[]).shift() as Artist;

			result.programmations = (await new ProgrammationRepository().selectInList(
				result.programmation_ids as string,
			)) as Programmation[];

			// retourner les résulrtats
			return result;
		} catch (error) {
			return error;
		}
};
    
    public selectInList = async (
		list: string,
	): Promise<Programmation[] | unknown> => {
		const connection = await new MySQLService().connect();

		// requété SQL
		// SELECT plateform* FROM Xgame_dev.menu;
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
	public insert = async (
		data: Partial<Artist>,
	): Promise<QueryResult | unknown> => {
		// connection au Server SQL
		const connection = await new MySQLService().connect();

		//  requete SQL
		let sql = `
	INSERT INTO
	${process.env.MYSQL_DATABASE}.${this.table}
	VALUE
	(
	  	NULL,
		:name,
    	:bio,
    	:image,
    	:video
	)
	;
	`;
		
		
		
		try {
			// démarrer une transaction SQl
			connection.beginTransaction();
			// execution de la premiére requéte
			await connection.execute(sql, data);
			// deuxième requéte
			sql = `SET @id = LAST_INSERT_ID();`;
			await connection.execute(sql, data); // troisème requéte

			const joinIds = (data.programmation_ids as string)
				?.split(",")
				.map((value) => `(@id, ${value} )`)
				.join();

			// console.log(joinIds);
			sql = `
			INSERT INTO
			${process.env.MYSQL_DATABASE}.artist_programmation (artist_id, programmation_id)
			VALUES
			${joinIds}
			`;
			const [query] = await connection.execute(sql);

			// valider la transaction SQl
			connection.commit();

			return query;
		} catch (error) {
			// annuler la transaction SQl
			connection.rollback();
			return error;
		}
	};

	public update = async (
		data: Partial<Artist>,
	): Promise<QueryResult | unknown> => {
		// connection au Server SQL
		const connection = await new MySQLService().connect();

		//  requete SQL
		let sql = `
	UPDATE
	${process.env.MYSQL_DATABASE}.${this.table}
	SET
	
	
	 ${this.table}.name = :name,
	 ${this.table}.bio = :bio,
	 ${this.table}.image = :image,
	 ${this.table}.video = :video
	 WHERE 
	 ${this.table}.id = :id
	;
	`;
		try {
			connection.beginTransaction();
			await connection.execute(sql, data);
			// deuxième requéte
			sql = `DELETE FROM
					${process.env.MYSQL_DATABASE}.artist_programmation
				WHERE
					artist_programmation.artist_id = :id
				;
			`;
			await connection.execute(sql, data);

			const joinIds = (data.programmation_ids as string)
				?.split(",")
				.map((value) => `(:id, ${value} )`)
				.join();

			// console.log(joinIds);

			sql = `
			INSERT INTO
			${process.env.MYSQL_DATABASE}.artist_programmation
			 VALUES
			${joinIds}
			`;
			const [query] = await connection.execute(sql, data);

			// valider la transaction SQl
			connection.commit();

			return query;
		} catch (error) {
			// annuler la transaction SQl
			connection.rollback();
			return error;
		}
	};
	public delete = async (
		data: Partial<Artist>,
	): Promise<QueryResult | unknown> => {
		// connection au Server SQL
		const connection = await new MySQLService().connect();

		//  requete SQL
		let sql = `
			DELETE FROM
					${process.env.MYSQL_DATABASE}.artist_programmation
				WHERE
					artist_programmation.artist_id = :id
				;
		`;

		try {
			connection.beginTransaction();

			await connection.execute(sql, data);

			sql = `
				DELETE FROM
					${process.env.MYSQL_DATABASE}.${this.table}
				WHERE
					${this.table}.id = :id
				;
			`;

			const [query] = await connection.execute(sql, data);

			// valider la transaction SQl
			connection.commit();

			return query;
		} catch (error) {
			// annuler la transaction SQl
			connection.rollback();
			return error;
		}
	};

};
export default ArtistRepository;