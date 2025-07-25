import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes"
import * as userService from "../services/userService"
import dayjs from "dayjs"
import { HttpError } from "../utils/httpError"

export async function register(request: Request, response: Response): Promise<Response> {
  try {
    const serviceResponse = await userService.register(request.body)

    if (serviceResponse.isUpdated) {
      return response.status(StatusCodes.FORBIDDEN).json({
        message: "Email not verified. Continue to verification...",
      })
    }

    return response.status(StatusCodes.OK).json({
      message: "Registered successfully!"
    })
  } catch (error) {
    const err = error as HttpError
    console.error("userController/register error:", err)

    return response.status(err.status || StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: err.message || "Unable to register. try again!"
    })
  }
}

export async function login(request: Request, response: Response): Promise<Response> {
  try {
    const token = await userService.login(request.body)

    response.cookie("userToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      expires: dayjs().add(7, "days").toDate(),
    })

    return response.status(StatusCodes.OK).json({
      message: "Logged in successfully!"
    })
  } catch (error) {
    const err = error as HttpError
    console.error("userController/login error:", err.message)

    return response.status(err.status || StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: err.message || "Unable to login. Please try again!"
    })
  }
}

export async function proceedForgotPassword(request: Request, response: Response): Promise<Response> {
  try {
    await userService.proceedForgotPassword(request.body)

    return response.status(StatusCodes.OK).json({
      message: "Enter the OTP",
    })
  } catch (error) {
    const err = error as HttpError
    console.error("userController/proceedForgotPassword error:", err.message)

    return response.status(err.status || StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: err.message || "Internal server error. Please try again!"
    })
  }
}

export async function forgotPassword(request: Request, response: Response): Promise<Response> {
  try {
    await userService.forgotPassword(request.body)

    return response.status(StatusCodes.OK).json({
      message: "Password updated successfully",
    })
  } catch (error) {
    const err = error as HttpError
    console.error("userController/forgotPassword error:", err.message)

    return response.status(err.status || StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: err.message || "Unable to update password. Please try again!"
    })
  }
}

export async function emailVerification(request: Request, response: Response): Promise<Response> {
  try {

    await userService.emailVerification(request.body)

    return response.status(StatusCodes.OK).json({
      message: "Email verified successfully!",
    })
  } catch (error) {
    const err = error as HttpError
    console.error("userController/emailVerification error:", err.message)

    return response.status(err.status || StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: err.message || "Unable to verify OTP. Please try again!"
    })
  }
}

export async function getCurrentUser(request: Request, response: Response): Promise<Response> {
  try {
    const currentUser = await userService.getCurrentUser(request.body)

    return response.status(StatusCodes.OK).json({
      data: {
        name: currentUser.name,
        email: currentUser.email,
        cartItems: currentUser.cartItems,
        avatar: currentUser.avatar || null
      }
    })
  } catch (error) {
    const err = error as HttpError
    console.error("userController/getCurrentUser error:", err.message)

    return response.status(err.status || StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: err.message || "Unable to verify OTP. Please try again!"
    })
  }
}

export async function logout(request: Request, response: Response): Promise<Response> {
  try {
    response.clearCookie("userToken", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
    })

    return response.status(StatusCodes.OK).json({
      message: "Logged out successfully!",
    })
  } catch (error) {
    const err = error as HttpError
    console.error("userController/getCurrentUser error:", err.message)

    return response.status(err.status || StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: err.message || "Unable to verify OTP. Please try again!"
    })
  }
}