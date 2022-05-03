import { CreateUserService } from "../../services/CreateUserService";
import {v4 as uuid} from 'uuid';

class FakeData{
    static createUser() {
        throw new Error("Method not implemented.");
    }
    createUserService = new CreateUserService();
    async ex(){

        await this.createUserService.ex({
            id: uuid(),
            name: 'outro usuario',
            email: ''
   
        })
    }
    async createUser(){
        const user = await this.createUserService.ex({
            id: uuid(),
            name: 'algum usuario',
            email: 'algumemail@email.com'
    
        })
        return user;

    }
}

export{FakeData}