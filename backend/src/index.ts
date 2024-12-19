import express, { Application, Request, Response } from 'express'

const app: Application = express()
const PORT = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the my personal crypto tracker!')
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
