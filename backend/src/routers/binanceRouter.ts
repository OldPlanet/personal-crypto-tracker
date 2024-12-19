import { Router } from 'express'
import { binanceController } from '../controllers/binanceController'

const binanceRouter = Router()

binanceRouter.get('/trading-pairs', binanceController.getTradingPairs)

export default binanceRouter
