import User from "../models/User"
import { Response, Request } from "express"
import { StatusCodes } from "http-status-codes"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { getEnv } from "../config"
import dayjs from "dayjs"
import { UserProps } from "../utils/types"

export async function register(response: Response, user: UserProps) {
  try {
    // Check is user already exist
    const isUserExist = await User.findOne({ email: user.email })
    if (isUserExist) {
      return response.json({
        status: StatusCodes.CONFLICT,
        message: "User already exist"
      })
    }

    // Prepare and insert user
    const hashedPassword = await bcrypt.hash(user.password, 10)
    const insertedUser = await User.create({ name: user.name, email: user.email, password: hashedPassword })
    const token = jwt.sign({ id: insertedUser._id }, getEnv('TOKEN_SECRET'), { expiresIn: "7d" })

    // Setup cookies for token
    response.cookie('token', token, {
      httpOnly: true,
      secure: getEnv('NODE_ENV') === "production",
      sameSite: getEnv('NODE_ENV') === "production" ? "none" : "strict",
      expires: dayjs().add(7, 'day').toDate()
    })
    
  } catch (error) {
    const err = error as Error
    throw new Error(err.message)
  }
}