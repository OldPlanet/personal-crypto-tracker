import WebSocket, { WebSocketServer } from 'ws'
import { binanceService } from './binanceService'

interface ClientData {
  connection: WebSocket
  subscriptions: Set<string>
}

let binanceSocket: WebSocket | null = null
const BINANCE_WS_URL = 'wss://stream.binance.com:9443/ws'
const clients: ClientData[] = []

export class WebSocketService {
  async startBinanceWebSocket(wss: WebSocketServer): Promise<void> {
    binanceSocket = new WebSocket(BINANCE_WS_URL)

    binanceSocket.on('open', async () => {
      console.log('Connected to Binance WebSocket')
      const topPairs = await binanceService.fetchTradingPairs()
      const pairSymbols = topPairs.map((pair) => `${pair.symbol.toLowerCase()}@ticker`)

      const payload = {
        method: 'SUBSCRIBE',
        params: ['!ticker@arr'],
        // params: pairSymbols,
        id: 1,
      }

      binanceSocket?.send(JSON.stringify(payload))
    })

    binanceSocket.on('message', (data) => {
      const parsedData = JSON.parse(data.toString())

      if (Array.isArray(parsedData)) {
        this.getAllData(parsedData.slice(0, 100))

        clients.forEach((client) => {
          const filteredData = parsedData.filter((ticker: any) => client.subscriptions.has(ticker.s))

          if (filteredData.length > 0) {
            client.connection.send(JSON.stringify({ type: 'filtered-data', filteredData }))
          }
        })
      }
    })

    binanceSocket.on('close', () => {
      console.log('Binance WebSocket closed. Reconnecting...')
      setTimeout(() => this.startBinanceWebSocket(wss), 1000)
    })

    binanceSocket.on('error', (error) => {
      console.error('Binance WebSocket error:', error)
    })

    wss.on('connection', (ws) => {
      const client: ClientData = {
        connection: ws,
        subscriptions: new Set(),
      }

      clients.push(client)

      ws.on('message', (message) => {
        const { action, pair } = JSON.parse(message.toString())
        if (action === 'subscribe') {
          client.subscriptions.add(pair)
          console.log(`Subscribed to: ${pair}`)
        } else if (action === 'unsubscribe') {
          client.subscriptions.delete(pair)
          console.log(`Unsubscribed from: ${pair}`)
        }
      })

      ws.on('close', () => {
        const index = clients.indexOf(client)
        if (index !== -1) clients.splice(index, 1)
        console.log('Client disconnected')
      })
    })
  }

  private getAllData(data: any[]) {
    clients.forEach((client) => {
      if (client.connection.readyState === WebSocket.OPEN) {
        client.connection.send(JSON.stringify({ type: 'all-data', data }))
      }
    })
  }
}

export const webSocketService = new WebSocketService()
