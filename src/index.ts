import express from 'express'
import dotenv from 'dotenv'

dotenv.config({
  path: process.env.NODE_ENV === 'dev' ? '.developpement.env' : '.env',
})

const app = express()

app.use(express.json())

app.listen(3001, () => {
  console.log('servidor rodando')
})
