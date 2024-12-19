import { Request, Response } from 'express'
import { binanceService } from '../services/binanceService'

export class BinanceController {
  getTradingPairs = async (req: Request, res: Response) => {
    try {
      const pairs = await binanceService.fetchTradingPairs()
      res.json(pairs)
    } catch (error) {
      console.error('Error fetching trading pairs:', error)
      res.status(500).send('Internal Server Error')
    }
  }
}

export const binanceController = new BinanceController()
