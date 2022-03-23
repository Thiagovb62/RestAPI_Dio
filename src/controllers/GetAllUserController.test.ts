import { GetAllUserController } from "../controllers/GetAllUserController"; 
import  createConnection  from "../database";
import {makeMockRequest} from "../utils/mocks/MockRequest"]
import {makeMockResponse} from "../utils/mocks/MockResponse"
import { getConnection } from "typeorm";
import {FakeData} from "../utils/fakeData/fakeData"

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

    const fakeData = new Fakedata();

    it('deve retornar o id do usuário criado ', async()=>{

       await fakeData.ex()

       const GetAllUserController
    })

})

