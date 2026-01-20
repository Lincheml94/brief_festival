import Server from "./core/server";


const server = new Server().start(); 
server.listen(process.env.PORT); 