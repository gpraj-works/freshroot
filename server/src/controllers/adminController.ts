import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes"
import * as adminServices from "../services/adminService"
import dayjs from "dayjs"
import { HttpError } from "../utils/httpError"

export async function login(request: Request, response: Response): Promise<Response> {
  try {
    const token = await adminServices.login(request.body)

    response.cookie("adminToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      expires: dayjs().add(2, "days").toDate(),
    })

    return response.status(StatusCodes.OK).json({
      status: true,
      message: "Logged in successfully!",
    })
  } catch (error) {
    const err = error as HttpError
    console.error("adminController/login error:", err.message)

    return response.status(err.status || StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: err.message || "Unable to login. Please try again!",
      errorField: err.errorField
    })
  }
}

export async function addCategory(request: Request, response: Response): Promise<Response> {
  try {
    await adminServices.addCategory(request.body)

    return response.status(StatusCodes.OK).json({
      message: "Category added successfully!"
    })
  } catch (error) {
    const err = error as HttpError
    console.error("adminController/addCategory error:", err)

    return response.status(err.status || StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: err.message || "Unable to add category. try again!",
      errorField: err.errorField
    })
  }
}

