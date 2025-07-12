import { Request, Response, NextFunction } from "express"
import { StatusCodes, getReasonPhrase } from "http-status-codes"
import { HttpError } from "../utils/httpError"
import logger from "../utils/logger"

export default function errorHandlerMiddleware(err: Error, req: Request, res: Response, next: NextFunction) {
  const status = err instanceof HttpError ? err.status : StatusCodes.INTERNAL_SERVER_ERROR
  const message = err.message || getReasonPhrase(status)

  logger.error({
    status,
    method: req.method,
    url: req.originalUrl,
    message: err.message,
    stack: err.stack,
  })

  res.status(status).json({
    success: false,
    status,
    message,
  })
}
