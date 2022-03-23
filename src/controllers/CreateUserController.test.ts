import {CreateUserController } from "./CreateUserController";
import { getConnection } from "typeorm";
import  createConnection  from '../database'
import{Request} from 'express'
import{makeMockResponse} from "../utils/mocks/MockResponse"


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
    
    const createUserController = new CreateUserController();

    const response = makeMockResponse()
    
    it('retorne a msg 201 caso o usuario preencha tudo',async ()=>{

        const request = {
            body: {
                name:'algum usuario',
                email:'email@test.com'
            }
        } as Request


          await createUserController.handle(request, response)

        expect (response.state.status).toBe(201)
    })

    it('retorne a msg 400 caso o usuario esqueça de preencher o nome ',async ()=>{
        const request = {
            body: {
                name:'',
                email:'email@test.com'
            }
        } as Request

        await createUserController.handle(request, response)

        expect(response.state.status).toBe(400)
    })
    it('retorne a msg 201 caso o usuario preencha tudo menos o email',async ()=>{

        const request = {
            body: {
                name:'algum usuario',
                email:''
            }
        } as Request


          await createUserController.handle(request, response)

        expect (response.state.status).toBe(201)
    })
})