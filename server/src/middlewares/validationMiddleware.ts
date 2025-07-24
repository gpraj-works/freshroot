import { Request, Response, NextFunction } from "express"
import { ZodSchema, ZodError } from "zod"
import { StatusCodes } from "http-status-codes"

function formatZodErrors(error: ZodError): Record<string, string[]> {
  const formatted: Record<string, string[]> = {}

  for (const issue of error.issues) {
    const path = issue.path.join(".") || "form"
    if (!formatted[path]) formatted[path] = []
    formatted[path].push(issue.message)
  }

  return formatted
}

export default function validationMiddleware(schema: ZodSchema<any>) {
  return (request: Request, response: Response, next: NextFunction) => {

    if (!request.body) {
      response.status(StatusCodes.BAD_REQUEST).json({
        message: "Request body missing!"
      })
    }

    const result = schema.safeParse(request.body)

    if (!result.success) {
      const errors = formatZodErrors(result.error)

      return response.status(StatusCodes.BAD_REQUEST).json({
        message: "Validation error",
        errors,
      })
    }

    request.body = result.data
    next()
  }
}
