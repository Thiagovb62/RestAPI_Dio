import{getRepository} from 'typeorm'
import { Usuario } from '../entities/Usuarios'

class GetAllUserService{
    async ex(){
        const user = await getRepository(Usuario)
        .createQueryBuilder('user')
        .select()
        .getMany()

    console.log(user)
    return user
    }



}
export {GetAllUserService}