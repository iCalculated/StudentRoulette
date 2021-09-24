import { Prisma, PrismaClient } from '@prisma/client'
import express from 'express'

const app = express()
const prisma = new PrismaClient()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello Social Coding!')
})

app.listen(port, () => {
  console.log(`App listening at localhost:${port}`)
})
