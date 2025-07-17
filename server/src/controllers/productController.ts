import { Request, Response } from "express"
import { StatusCodes } from "http-status-codes"
import * as productService from "../services/productService"
import { HttpError } from "../utils/httpError"

export async function categories(request: Request, response: Response): Promise<Response> {
  try {
    const categories = await productService.categories()
    
    return response.status(StatusCodes.OK).json({
      data: categories
    })
  } catch (error) {
    const err = error as HttpError
    console.error("productController/categories error:", err)

    return response.status(err.status || StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: err.message || "Unable to get categories. try again!"
    })
  }
}