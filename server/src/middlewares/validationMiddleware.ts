import { Request, Response, NextFunction } from "express"
import { ZodSchema } from "zod"
import { StatusCodes } from "http-status-codes"

export default function validationMiddleware(schema: ZodSchema<any>) {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body)

    if (!result.success) {
      const errors = result.error.flatten().fieldErrors

      return res.status(StatusCodes.BAD_REQUEST).json({
        message: "Validation error",
        errors,
      })
    }

    req.body = result.data
    next()
  }
}