import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes"
import * as userService from "../services/userService"

export async function register(request: Request, response: Response): Promise<Response> {
  try {
    const { name, email, password } = request.body

    // Validate given information
    if (!name || !email || !password) {
      return response.json({
        status: StatusCodes.BAD_REQUEST,
        message: "Requested information not found!"
      })
    }

    // Process register service
    await userService.register(response, request.body)

    // Return success response
    return response.json({
      status: StatusCodes.OK,
      message: "Registered successfully!"
    })
  } catch (error) {
    const err = error as Error
    console.error("userController/register error:", err.message)

    // Return error response
    return response.json({
      status: StatusCodes.INTERNAL_SERVER_ERROR,
      message: "Unable to register. try again!"
    })
  }
}