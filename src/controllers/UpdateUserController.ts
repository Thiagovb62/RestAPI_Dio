import {request,response} from 'express'
import {UpdateUserService} from '../services/UpdateUserService'
class UpdateUserController{
    async  handle(request: Request , response: Response) {
        const updateUserService = new UpdateUserService();

        const{id,name,email} = request.body

        if(id.length === 0 ){
            return response.status(400).json({mensagem:'id nao informado '})
        }
        if(name.length === 0 ){
            return response.status(400).json({mensagem:'nome nao informado '})
        }

        await updateUserService.ex({id,name,email})

        response.status(200)
    }
          
}

export {UpdateUserController}