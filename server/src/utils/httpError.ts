interface HttpErrorOptions {
  status: number
  message: string | string
  errorField?: string
}

export class HttpError extends Error {
  status: number
  errorField?: string | null

  constructor({ status, message, errorField }: HttpErrorOptions) {
    super(message)
    this.status = status
    this.errorField = errorField ?? null
    this.name = "HttpError"
    Error.captureStackTrace?.(this, this.constructor)
  }
}
