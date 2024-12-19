import { useEffect, useRef, useState } from 'react'

const WEBSOCKET_URL = 'ws://localhost:8080'

export function useWebSocket() {
  const ws = useRef<WebSocket | null>(null)
  const [allTickers, setAllTickers] = useState<any[]>([])
  const [subscribedTickers, setSubscribedTickers] = useState<any[]>([])

  useEffect(() => {
    ws.current = new WebSocket(WEBSOCKET_URL)

    ws.current.onopen = () => {
      console.log('WebSocket connected')
    }

    ws.current.onmessage = (event) => {
      const message = JSON.parse(event.data)

      if (message.type === 'all-data') {
        setAllTickers(message.data)
      } else if (message.type === 'filtered-data') {
        setSubscribedTickers(message.data)
      }
    }

    ws.current.onclose = () => {
      console.log('WebSocket disconnected')
    }

    ws.current.onerror = (error) => {
      console.error('WebSocket error:', error)
    }

    return () => {
      ws.current?.close()
    }
  }, [])

  const sendMessage = (message: object) => {
    ws.current?.send(JSON.stringify(message))
  }

  return { allTickers, subscribedTickers, sendMessage }
}
