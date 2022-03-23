import {Router, Request ,Response} from 'express'
import { CreateUserController } from './controllers/CreateUserController';

const route = Router();
const createUserController = new CreateUserController();

route.get('/',(request:Request , response:Response) => {
     
    return response.json({ mensagem:'Bem vindo a API '});

})

route.post('/users',createUserController.handle)

export { route }