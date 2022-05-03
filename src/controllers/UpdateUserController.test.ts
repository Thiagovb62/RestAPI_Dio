import { UpdateUserController } from "./UpdateUserController";
import {getConnection}  from 'typeorm'
import  createConnection  from "../database";
import {Request} from "express";
import {makeMockResponse} from "../utils/mocks/MockResponse";
import {FakeData} from "../utils/fakeData/FakeData";

describe("UpdateUserController", () => {

    beforeAll(async () => {
        const connection = await createConnection()
        await connection.runMigrations()

    })

    afterAll(async () => {
        const connection = getConnection()
        await connection.query('DELETE FROM user')
        await connection.close()

    })

    const fakeData=new FakeData();

    it('Deve retornar o status 204', async () => {

        const mockUser = await fakeData.createUser();

        const updateUserController = new UpdateUserController();

        const request = { 
           body:{
            id:mockUser.id,
            name:'outro usuario',
            email:'mockUser@email'

           }
           
        } as Request
        const response = makeMockResponse();
        
        await updateUserController.handle(request , response);

        expect(response.state.status).toBe(204);
    })
})