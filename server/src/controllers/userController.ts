import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes"
import * as userService from "../services/userService"
import { getEnv } from "../config"
import dayjs from "dayjs"

export async function register(request: Request, response: Response): Promise<Response> {
  try {
    const { name, email, password } = request.body

    await userService.register({ name, email, password })

    return response.status(StatusCodes.OK).json({
      message: "Registered successfully!"
    })
  } catch (error) {
    const err = error as Error
    console.error("userController/register error:", err.message)

    return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: err.message || "Unable to register. try again!"
    })
  }
}

export async function login(request: Request, response: Response): Promise<Response> {
  try {
    const { email, password } = request.body

    const token = await userService.login({ email, password })

    response.cookie("token", token, {
      httpOnly: true,
      secure: getEnv("NODE_ENV") === "production",
      sameSite: getEnv("NODE_ENV") === "production" ? "none" : "strict",
      expires: dayjs().add(7, "days").toDate(),
    })

    return response.status(StatusCodes.OK).json({
      message: "Logged in successfully!",
      token
    })
  } catch (error) {
    const err = error as Error
    console.error("userController/login error:", err.message)

    return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: err.message || "Unable to login. Please try again!"
    })
  }
}