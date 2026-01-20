import express, { type Router, type Express, type Request, type Response } from 
"express"; 
class Server { 
// instancier une application Express 
private app: Express = express(); 
// définir un routeur pour Express 
private router: Router = express.Router(); 
constructor() { 
// lier l'application Express au routeur 
this.app.use(this.router); 
// définir la liste des routeurs 
this.getRoutersList(); 
} 
// liste des routeurs 
private getRoutersList = (): void => { 
// création de la route d'accueil en GET 
this.router.get("/api", (req: Request, res: Response): Response => { 
return res.send("coucou"); 
}); 
}; 
// créer un serveur Node.js / Express 
public createServer = (): express.Express => { 
return this.app; 
}; 
} 
export default Server;
