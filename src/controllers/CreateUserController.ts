import {Request, Response }from "express";
import{CreateUserService} from "../services/CreateUserService"
import{v4 as uuid} from "uuid"

class CreateUserController{
   async  handle(request:Request , response:Response) {
       
     const createUserService = new CreateUserService();
     
      
      const name= request.body.name
      const email= request.body.email
      const id= uuid()

      if(name.length === 0 || email.length === 0){
          return response.status(400).json({mensagem:`escreve tudo meliante`})
      }
      
       const user = await createUserService.ex({id,name,email})


      return response.status(201).json(user)
    }
}

export {CreateUserController}