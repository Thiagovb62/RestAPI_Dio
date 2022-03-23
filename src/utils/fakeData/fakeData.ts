import { CreateUserService } from "../../services/CreateUserService";
import {v4 as uuid} from 'uuid';

class FakeData{
    async ex(){
        const createUserService = new CreateUserService();

        await createUserService.ex({
            id: uuid(),
            name: 'algum usuario',
            email: 'algumemail@email.com'
   
        })
   
        await createUserService.ex({
           id: uuid(),
           name: 'outro usuario',
           email: '',
   
       })
    }
}

export{FakeData}