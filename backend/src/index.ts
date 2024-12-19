import express, { Application, Request, Response } from 'express'
import { webSocketService } from './services/webSocketService'
import { WebSocketServer } from 'ws'
import binanceRouter from './routers/binanceRouter'

const app: Application = express()
const PORT = 8000
const WSS_PORT = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to my personal crypto tracker!')
})

app.use('/', binanceRouter)

const wss = new WebSocketServer({ port: WSS_PORT })
console.log(`WebSocket Server running on ws://localhost:${WSS_PORT}`)

wss.on('connection', (ws) => {
  console.log('New WebSocket connection established')

  ws.on('close', () => {
    console.log('WebSocket connection closed')
  })
})

webSocketService.startBinanceWebSocket(wss)
