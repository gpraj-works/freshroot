import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes"
import * as sellerService from "../services/sellerService"
import dayjs from "dayjs"
import { HttpError } from "../utils/httpError"

/* AUTHENTICATION CONTROLLERS */

export async function register(request: Request, response: Response): Promise<Response> {
  try {
    const serviceResponse = await sellerService.register(request.body)

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
    console.error("sellerController/register error:", err)

    return response.status(err.status || StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: err.message || "Unable to register. try again!"
    })
  }
}

export async function emailVerification(request: Request, response: Response): Promise<Response> {
  try {

    await sellerService.emailVerification(request.body)

    return response.status(StatusCodes.OK).json({
      message: "Email verified successfully!",
    })
  } catch (error) {
    const err = error as HttpError
    console.error("sellerController/emailVerification error:", err.message)

    return response.status(err.status || StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: err.message || "Unable to verify OTP. Please try again!"
    })
  }
}

export async function login(request: Request, response: Response): Promise<Response> {
  try {
    const token = await sellerService.login(request.body)

    response.cookie("sellerToken", token, {
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
    console.error("sellerController/login error:", err.message)

    return response.status(err.status || StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: err.message || "Unable to login. Please try again!"
    })
  }
}

export async function proceedForgotPassword(request: Request, response: Response): Promise<Response> {
  try {
    await sellerService.proceedForgotPassword(request.body)

    return response.status(StatusCodes.OK).json({
      message: "Enter the OTP",
    })
  } catch (error) {
    const err = error as HttpError
    console.error("sellerController/proceedForgotPassword error:", err.message)

    return response.status(err.status || StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: err.message || "Internal server error. Please try again!"
    })
  }
}

export async function forgotPassword(request: Request, response: Response): Promise<Response> {
  try {
    await sellerService.forgotPassword(request.body)

    return response.status(StatusCodes.OK).json({
      message: "Password updated successfully",
    })
  } catch (error) {
    const err = error as HttpError
    console.error("sellerController/forgotPassword error:", err.message)

    return response.status(err.status || StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: err.message || "Unable to update password. Please try again!"
    })
  }
}

export async function resetPassword(request: Request, response: Response): Promise<Response> {
  try {
    await sellerService.resetPassword(request.body)

    return response.status(StatusCodes.OK).json({
      message: "Password updated successfully",
    })
  } catch (error) {
    const err = error as HttpError
    console.error("sellerController/resetPassword error:", err.message)

    return response.status(err.status || StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: err.message || "Unable to update password. Please try again!"
    })
  }
}

export async function logout(request: Request, response: Response): Promise<Response> {
  try {
    response.clearCookie("sellerToken", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
    })

    return response.status(StatusCodes.OK).json({
      message: "Logged out successfully!",
    })
  } catch (error) {
    const err = error as HttpError
    console.error("sellerController/logout error:", err.message)

    return response.status(err.status || StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: err.message || "Unable to verify OTP. Please try again!"
    })
  }
}

/* GENERAL CONTROLLERS */

export async function getCurrentSeller(request: Request, response: Response): Promise<Response> {
  try {
    const currentSeller = await sellerService.getCurrentSeller(request.body)

    return response.status(StatusCodes.OK).json({
      data: {
        name: currentSeller.name,
        email: currentSeller.email,
        mobile: currentSeller.mobile,
        store: currentSeller.store
      }
    })
  } catch (error) {
    const err = error as HttpError
    console.error("sellerController/getCurrentSeller error:", err.message)

    return response.status(err.status || StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: err.message || "Unable to verify OTP. Please try again!"
    })
  }
}