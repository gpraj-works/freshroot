import bcrypt from "bcryptjs"
import { StatusCodes } from "http-status-codes"
import jwt from "jsonwebtoken"
import { getEnv } from "../config"
import User from "../models/User"
import { HttpError } from "../utils/httpError"
import { UserProps } from "../utils/types"

export async function register(payload: UserProps) {
  const isUserExist = await User.findOne({ email: payload.email })

  if (isUserExist) {
    throw new HttpError(StatusCodes.CONFLICT, "User already exists")
  }

  const hashedPassword = await bcrypt.hash(payload.password, 10)

  await User.create({
    name: payload.name,
    email: payload.email,
    password: hashedPassword,
  })
}

export async function login(payload: UserProps): Promise<string> {
  const user = await User.findOne({ email: payload.email })

  if (!user) {
    throw new HttpError(StatusCodes.NOT_FOUND, "User not found in given email")
  }

  const isPasswordMatched = await bcrypt.compare(payload.password, user.password)

  if (!isPasswordMatched) {
    throw new HttpError(StatusCodes.FORBIDDEN, "Given password is invalid")
  }

  return jwt.sign({ id: user._id }, getEnv("TOKEN_SECRET"), { expiresIn: "7d" })
}