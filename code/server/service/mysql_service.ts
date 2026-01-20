import mysql, { type PoolConnection } from "mysql2/promise";

class MySQLService {
	// propriété statique : accessible sans objet
	private static instance: PoolConnection;
	// connexion au serveur MySQL4
	public connect = async () => {
		// si aucune connexion n'existe
		if (!MySQLService.instance) {
			MySQLService.instance = await mysql
				.createPool({
					host: process.env.MYSQL_HOST,
					user: process.env.MYSQL_USER,
					password: process.env.MYSQL_PASSWORD,
					database: process.env.MYSQL_DATABASE,
					namedPlaceholders: true,
				})
				.getConnection();
			console.log(MySQLService.instance);
		}
		
		
		// retourner la connexion
		return MySQLService.instance;
	};
}

export default MySQLService;