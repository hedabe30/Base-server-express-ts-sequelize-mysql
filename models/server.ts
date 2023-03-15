import express, { Application } from 'express';
import cors from 'cors';
import userRoutes from '../components/user.routes';

class Server {

  private app: Application;
  private port: string;
  private apiPaths = {
    users: '/api/users'
  }

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '8000';

    this.middlewares();

    //Definir rutas
    this.routes();
  }

  middlewares () {

    //CORS
    this.app.use( cors() );

    //Lectura del body
    this.app.use( express.json() );

    //Carpeta publica
    this.app.use( express.static('public') )
  }

  routes () {
    this.app.use( this.apiPaths.users, userRoutes)
  }

  listen() {
    this.app.listen( this.port, () => {
      console.log('Servidor corriendo en puerto ' + this.port);
    } )
  }
}

export default Server;