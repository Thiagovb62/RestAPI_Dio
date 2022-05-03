import createConnection from '../database'
import {getConnection} from 'typeorm'
import { UpdateUserService } from "./UpdateUserService";
import {FakeData} from "../utils/fakeData/FakeData";

describe("UpdateUserService", () => {
    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations();

    })
    afterAll(async () => {
        const connection = await getConnection();
        await connection.query('DELETE FROM user');
        await connection.close();
    })

    const fakeData = new FakeData();

  it('should edit user name',async () => {

    const mockUser = await fakeData.createUser();

    const updateUserService = new UpdateUserService();

        const result = await updateUserService.ex({
            id: mockUser.id,
            name: 'outro usuario'
        });

      expect(result).toHaveLength(0);
  })
})