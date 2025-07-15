import { NextFunction, Request, Response } from "express"
import { StatusCodes } from "http-status-codes"
import jwt, { JwtPayload } from "jsonwebtoken"
import { HttpError } from "utils/httpError"
import dayjs from "dayjs"

export function authUser(request: Request, response: Response, next: NextFunction) {
  try {
    const token = request.cookies.userToken

    if (!token) {
      return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "Not logged in. Please login and try again!"
      })
    }

    const tokenSecret = process.env.TOKEN_SECRET as string
    const tokenInfo = jwt.verify(token, tokenSecret) as JwtPayload
    const isExpired = dayjs().isAfter(dayjs.unix(tokenInfo.exp as number))

    if (isExpired) {
      return response.status(StatusCodes.UNAUTHORIZED).json({
        message: "Login expired. Please login again!"
      })
    }

    request.body = { id: tokenInfo.id }
    next()
  } catch (error) {
    const err = error as HttpError
    console.error("authMiddleware/authUser error:", err)

    return response.status(err.status || StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: err.message || "Unable to authenticate. try again!"
    })
  }
}