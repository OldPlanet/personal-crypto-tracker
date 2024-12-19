import axios from 'axios'

const BINANCE_API_URL = 'https://api.binance.com/api/v3'

export class BinanceService {
  async fetchTradingPairs(): Promise<any[]> {
    try {
      const response = await axios.get(`${BINANCE_API_URL}/ticker/price`)
      const sortedPairs = response.data.sort((a: any, b: any) => parseFloat(b.quoteVolume) - parseFloat(a.quoteVolume))
      return sortedPairs.slice(0, 100)
    } catch (error) {
      console.error('Error fetching trading pairs:', error)
      throw new Error('Unable to fetch trading pairs')
    }
  }
}

export const binanceService = new BinanceService()
