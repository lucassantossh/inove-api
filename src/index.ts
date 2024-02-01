import express from 'express'
import dotenv from 'dotenv'
import userRouter from './routes/users'

dotenv.config()

const app = express()

app.use(express.json())

app.use('/users', userRouter)

app.listen(process.env.PORT, () => {
  console.log('servidor rodando na porta: ' + process.env.PORT)
})
