import {Router, Request ,Response} from 'express'
import { CreateUserController } from './controllers/CreateUserController';
import {GetAllUserController } from './controllers/GetAllUserController';
import { UpdateUserController } from './controllers/UpdateUserController';

const route = Router();
const createUserController = new CreateUserController();
const getAllUsersController = new GetAllUserController();
const updateUserController = new UpdateUserController();

route.get('/',(request:Request , response:Response) => {
     
    return response.json({ mensagem:'Bem vindo a API '});

})

route.post('/users',createUserController.handle)
route.get('/users',getAllUsersController.handle)
route.patch('/user',createUserController.handle)

export { route }