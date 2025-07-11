import { Request, Response, NextFunction } from 'express'
import logger from '../utils/logger'

export default function loggerMiddleware(req: Request, res: Response, next: NextFunction) {
  const start = process.hrtime()

  res.on('finish', () => {
    const [seconds, nanoseconds] = process.hrtime(start)
    const ms = Math.round(seconds * 1000 + nanoseconds / 1e6)
    const timeStr = `[${ms}ms]`
    logger.info(`${timeStr} ${req.method} ${req.url}`)
  })

  next()
}
