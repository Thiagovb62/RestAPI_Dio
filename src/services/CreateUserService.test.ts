import { getConnection } from "typeorm";
import  createConnection  from "../database";
import{v4 as uuid} from "uuid"
import {CreateUserService} from  "./CreateUserService"

describe('CreateUserController',()=>{

    beforeAll(async () =>{
        const connection = await createConnection()
        await connection.runMigrations()
    })

    afterAll(async () =>{

        const connection = getConnection()
        await connection.query('DELETE FROM user')
        await connection.close()
    })

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

    