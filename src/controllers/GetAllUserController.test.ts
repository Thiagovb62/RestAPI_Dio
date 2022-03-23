import { GetAllUserController } from "../controllers/GetAllUserController"; 
import  createConnection  from "../database";
import { getConnection } from "typeorm";
import {Fakedata} from "../utils/fakeData/fakeData"

describe('GetAllUserService', () => {

    beforeAll(async () => {
        const connection = await createConnection()
        await connection.runMigrations()

    })

    afterAll(async () => {
        const connection = getConnection()
        await connection.query('DELETE FROM user')
        await connection.close()

    })

    const fakedata = new Fakedata();
    it('deve retornar o id do usuário criado ', async()=>{

        const createUserService = new CreateUserService();

        const result = await createUserService.ex({
            id:uuid(),
            name:'algum usuario',
            email:'algumuser@gmail.com'

        })
             console.log(result)

             expect(result).toHaveProperty('id')

    })

})

})
