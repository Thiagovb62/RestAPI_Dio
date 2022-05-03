import { getConnection } from "typeorm";
import  createConnection  from "../database";
import { DeleteUserService } from "./DeleteUserService";
import {FakeData} from "../utils/fakeData/FakeData";

describe('DeleteUserService', () => {

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
 it('should return null array when user it deleted', async () => {
     const mockUser = await fakeData.createUser()

     const deleteUserService = new DeleteUserService();
     
     const result = await deleteUserService.ex({id})

     expect(result).toHaveLength(0)

 })
})