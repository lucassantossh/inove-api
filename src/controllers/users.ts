import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getAllUsers(req: Request, res: Response) {
  try {
    const allUsers = await prisma.user.findMany()
    return res.json(allUsers).status(200)
  } catch (error) {
    return res.json({
      errorMessage: `Houve um erro ao carregar os usuários: ${error}`,
    })
  }
}

export async function createAnUser(req: Request, res: Response) {
  const { name, email } = await req.body
  try {
    const newUser = await prisma.user.create({
      data: {
        name: name,
        email: email,
      },
    })
    return res.json(newUser).status(201)
  } catch (error) {
    return res.json({
      errorMessage: `Houve um erro ao criar este usuário os usuários: ${error}`,
    })
  }
}
