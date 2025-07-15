import bcrypt from "bcryptjs"
import { StatusCodes } from "http-status-codes"
import jwt from "jsonwebtoken"
import { sendEmail } from "../config/nodemailer"
import User from "../models/User"
import { getOneTimePassword } from "../utils/helpers"
import { HttpError } from "../utils/httpError"
import dayjs from "dayjs"

export async function register(payload: { name: string, email: string, password: string }): Promise<{ isUpdated: boolean }> {
  const existingUser = await User.findOne({ email: payload.email })

  const isVerifiedUser = Boolean(existingUser?.verified)

  if (existingUser && isVerifiedUser) {
    throw new HttpError(
      StatusCodes.CONFLICT,
      "User already exists"
    )
  }

  const hashedPassword = await bcrypt.hash(payload.password, 10)
  const oneTimePassword = getOneTimePassword()
  const otpExpiration = 5
  const otpExpiry = dayjs().add(otpExpiration, 'minute')

  const sendEmailResponse = await sendEmail({
    to: payload.email,
    subject: "Freshroot - Email verification",
    template: "email-verification",
    context: {
      username: payload.name,
      otp: oneTimePassword,
      otp_expiry_minutes: otpExpiration
    }
  })

  if (!sendEmailResponse.messageId) {
    throw new HttpError(
      StatusCodes.CONFLICT,
      "Unable to sent verification email"
    )
  }

  if (sendEmailResponse.isInvalidEmail) {
    throw new HttpError(
      StatusCodes.BAD_REQUEST,
      "Given email is invalid"
    )
  }

  if (existingUser && !isVerifiedUser) {
    existingUser.otp = oneTimePassword
    existingUser.otpExpiry = otpExpiry
    await existingUser.save()
    return { isUpdated: true }
  }

  await User.create({
    name: payload.name,
    email: payload.email,
    password: hashedPassword,
    otp: oneTimePassword,
    otpExpiry,
    verified: false,
  })

  return { isUpdated: false }
}

export async function login(payload: { email: string, password: string }): Promise<string> {
  const user = await User.findOne({ email: payload.email })

  if (!user) {
    throw new HttpError(
      StatusCodes.NOT_FOUND,
      "User not found in given email"
    )
  }

  const isPasswordMatched = await bcrypt.compare(payload.password, user.password)

  if (!isPasswordMatched) {
    throw new HttpError(
      StatusCodes.FORBIDDEN,
      "Given password is invalid"
    )
  }

  return jwt.sign({ id: user._id }, process.env.TOKEN_SECRET as string, { expiresIn: "7d" })
}

export async function proceedForgotPassword(payload: { email: string }) {
  const user = await User.findOne({ email: payload.email })

  if (!user) {
    throw new HttpError(
      StatusCodes.NOT_FOUND,
      "User not found in given email"
    )
  }

  const oneTimePassword = getOneTimePassword()
  const otpExpiration = 5
  const otpExpiry = dayjs().add(otpExpiration, 'minute')

  const sendEmailResponse = await sendEmail({
    to: payload.email,
    subject: "Freshroot - Forgot password",
    template: "forgot-password",
    context: {
      username: user.name,
      otp: oneTimePassword,
      otp_expiry_minutes: otpExpiration
    }
  })

  if (!sendEmailResponse.messageId) {
    throw new HttpError(
      StatusCodes.CONFLICT,
      "Unable to process forgot password"
    )
  }

  user.otp = oneTimePassword
  user.otpExpiry = otpExpiry

  await user.save()
}

export async function forgotPassword(payload: { email: string, otp: string, password: string }) {
  const user = await User.findOne({ email: payload.email })

  if (!user) {
    throw new HttpError(
      StatusCodes.NOT_FOUND,
      "User not found in given email"
    )
  }

  const isValidOTP = payload.otp === user.otp
  const isExpired = dayjs().isAfter(user.otpExpiry)

  if (!isValidOTP) {
    throw new HttpError(
      StatusCodes.BAD_REQUEST,
      "Given OTP is invalid"
    )
  }

  if (isExpired) {
    throw new HttpError(
      StatusCodes.BAD_REQUEST,
      "OTP is already expired"
    )
  }

  user.password = await bcrypt.hash(payload.password, 10)
  user.otp = undefined
  user.otpExpiry = undefined

  await user.save()
}

export async function emailVerification(payload: { email: string, otp: string }) {
  const user = await User.findOne({ email: payload.email })

  if (!user) {
    throw new HttpError(
      StatusCodes.NOT_FOUND,
      "User not found in given email"
    )
  }

  const isValidOTP = payload.otp === user.otp
  const isExpired = dayjs().isAfter(user.otpExpiry)

  if (!isValidOTP) {
    throw new HttpError(
      StatusCodes.BAD_REQUEST,
      "Given OTP is invalid"
    )
  }

  if (isExpired) {
    throw new HttpError(
      StatusCodes.BAD_REQUEST,
      "OTP is already expired"
    )
  }

  user.verified = true
  user.otp = undefined
  user.otpExpiry = undefined

  await user.save()
}

export async function getCurrentUser(payload: { id: string }) {
  const user = await User.findOne({ _id: payload.id }).select("-password")

  if (!user) {
    throw new HttpError(
      StatusCodes.BAD_REQUEST,
      "Requested user not found!"
    )
  }

  return user
}