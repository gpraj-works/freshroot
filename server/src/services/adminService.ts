import { StatusCodes } from "http-status-codes"
import { HttpError } from "../utils/httpError"
import Category from "../models/categoryModel"
import Admin from "../models/adminModel"
import jwt from "jsonwebtoken"

export type CategoryProps = {
  code: string
  name: string
  thumbnail: string
  color?: string
}

export async function login(payload: { loginId: string, password: string }): Promise<string> {
  const admin = await Admin.findOne({ loginId: payload.loginId })

  if (!admin) {
    throw new HttpError(
      StatusCodes.NOT_FOUND,
      "Admin not found"
    )
  }

  if (payload.password !== admin.password) {
    throw new HttpError(
      StatusCodes.FORBIDDEN,
      "Given password is invalid"
    )
  }

  return jwt.sign({ id: admin._id }, process.env.TOKEN_SECRET as string, { expiresIn: "2d" })
}

export async function addCategory(payload: CategoryProps): Promise<void> {
  const [codeExists, nameExists] = await Promise.all([
    Category.exists({ code: payload.code }),
    Category.exists({ name: payload.name }),
  ])

  if (codeExists) {
    throw new HttpError(
      StatusCodes.CONFLICT,
      "Category code already exists"
    )
  }

  if (nameExists) {
    throw new HttpError(
      StatusCodes.CONFLICT,
      "Category name already exists"
    )
  }

  await Category.create(payload)
}
