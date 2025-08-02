import cloudinary from "../config/cloudinary"
import { NextFunction, Request, Response } from 'express'
import { StatusCodes } from "http-status-codes"
import multer from "multer"
import { nanoid } from "nanoid"
import streamifier from "streamifier"
import { HttpError } from "../utils/httpError"

const storage = multer.memoryStorage()
const upload = multer({ storage })

export const uploadSingle = (field: string = 'image') => upload.single(field)
export const uploadMultiple = (field: string = 'images') => upload.array(field, 10)

const streamUpload = (buffer: Buffer, filePath: string = ""): Promise<string> => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: `freshroot/${filePath}`, public_id: nanoid() },
      (error, result) => {
        if (error) reject(error)
        else resolve(result!.secure_url)
      }
    )
    streamifier.createReadStream(buffer).pipe(stream)
  })
}

export const handleSingleUpload = async (request: Request, response: Response, next: NextFunction) => {
  try {
    if (!request.file) {
      return response.status(StatusCodes.BAD_REQUEST).json({
        message: 'Image not found! Please re-upload.'
      })
    }

    const url = await streamUpload(request.file.buffer, request.body.cloudPath)
    request.body = { ...request.body, url }
    next()
  } catch (error) {
    const err = error as HttpError
    console.error("uploadMiddleware/singleUpload error:", err)

    return response.status(err.status || StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: err.message || "Unable to upload. try again!"
    })
  }
}

export const handleMultipleUpload = async (request: Request, response: Response, next: NextFunction) => {
  try {
    if (!request.files || !(request.files instanceof Array)) {
      return response.status(StatusCodes.BAD_REQUEST).json({
        message: 'Images not found! Please re-upload.'
      })
    }

    const urls = await Promise.all(request.files.map((file: Express.Multer.File) =>
      streamUpload(file.buffer, request.body.cloudPath)
    ))

    request.body = { ...request.body, urls }
    next()
  } catch (error) {
    const err = error as HttpError
    console.error("uploadMiddleware/multipleUpload error:", err)

    return response.status(err.status || StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: err.message || "Unable to upload. try again!"
    })
  }
}
