import {getConnection, getRepository} from "typeorm";
import {Usuario} from "../entities/Usuarios" 

interface IUser{
     id:string,
     name:string;
     email?:string;
}

class CreateUserService{
    async ex({id,name,email}:IUser){
        
        const user = await getRepository(Usuario)
            .createQueryBuilder()
            .insert()
            .into(Usuario)
            .values([
            {
                id: id,
                name:name,
                email:email
            }
       ])
       
        .execute();

            
        console.log(user)
        return user.identifiers[0]
    }
}
export{CreateUserService}