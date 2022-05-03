import {getRepository} from 'typeorm'
import { Usuario } from '../entities/Usuarios';

interface IUser{
    id:string,
    name:string;
    email?:string;
}

class UpdateUserService{
   async ex({id, name, email}: IUser) {
       const user = await getRepository(Usuario)
       .createQueryBuilder()
       .update()
       .set({
           name: name,
           email: email
       })
       .where('id = :id', {id})
       .execute()

    console.log(user.raw)
    return user.raw
   }
}

export {UpdateUserService}