import { Router } from 'express'
import { createAnUser, getAllUsers } from '../controllers/users'

const userRouter = Router()
// Rota que recupera todos os usuários cadastrados no banco de dados
userRouter.get('/', getAllUsers)
// Rota que cria um novo usuário
userRouter.post('/', createAnUser)

export default userRouter
