import { getConnection } from "typeorm";
import  createConnection  from "../database";
import{GetAllUserService} from "../services/GetAllUserService";
import {FakeData} from "../utils/fakeData/fakeData";

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

    const fakeData = new FakeData();

    it('deve retorna  todos os usuários criados ', async()=>{

        await fakeData.ex()

   
        const expectedResponse = [
            {
                name: 'algum usuario',
                email: 'algumemail@email.com'
            },
            {
                name: 'outro usuario',
                email: '',
            }
            
        ]

        const getAllUserService= new GetAllUserService();
        const result = await getAllUserService.ex();

        expect(result).toMatchObject(expectedResponse)

    })

})