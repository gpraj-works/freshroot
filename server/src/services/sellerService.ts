import bcrypt from "bcryptjs"
import { StatusCodes } from "http-status-codes"
import jwt from "jsonwebtoken"
import { sendEmail } from "../config/nodemailer"
import Seller from "../models/sellerModel"
import { getOneTimePassword } from "../utils/helpers"
import { HttpError } from "../utils/httpError"
import dayjs from "dayjs"

type Register = {
  name: string
  email: string
  password: string
  mobile: number
  store: {
    name: string
    address: Record<string, string>
  }
}

export async function register(payload: Register): Promise<{ isUpdated: boolean }> {
  const existingSeller = await Seller.findOne({ email: payload.email })

  const isVerifiedSeller = Boolean(existingSeller?.verified)

  if (existingSeller && isVerifiedSeller) {
    throw new HttpError(
      StatusCodes.CONFLICT,
      "Seller already exists"
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

  if (existingSeller && !isVerifiedSeller) {
    existingSeller.otp = oneTimePassword
    existingSeller.otpExpiry = otpExpiry
    await existingSeller.save()
    return { isUpdated: true }
  }

  await Seller.create({
    name: payload.name,
    email: payload.email,
    password: hashedPassword,
    mobile: payload.mobile,
    store: payload.store,
    otp: oneTimePassword,
    otpExpiry,
    verified: false,
  })

  return { isUpdated: false }
}

export async function emailVerification(payload: { email: string, otp: string }) {
  const seller = await Seller.findOne({ email: payload.email })

  if (!seller) {
    throw new HttpError(
      StatusCodes.NOT_FOUND,
      "Seller not found in given email"
    )
  }

  const isValidOTP = payload.otp === seller.otp
  const isExpired = dayjs().isAfter(seller.otpExpiry)

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

  seller.verified = true
  seller.otp = undefined
  seller.otpExpiry = undefined

  await seller.save()
}

export async function proceedForgotPassword(payload: { email: string }) {
  const seller = await Seller.findOne({ email: payload.email })

  if (!seller) {
    throw new HttpError(
      StatusCodes.NOT_FOUND,
      "Seller not found in given email"
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
      username: seller.name,
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

  seller.otp = oneTimePassword
  seller.otpExpiry = otpExpiry

  await seller.save()
}

export async function forgotPassword(payload: { email: string, otp: string, password: string }) {
  const seller = await Seller.findOne({ email: payload.email })

  if (!seller) {
    throw new HttpError(
      StatusCodes.NOT_FOUND,
      "Seller not found in given email"
    )
  }

  const isValidOTP = payload.otp === seller.otp
  const isExpired = dayjs().isAfter(seller.otpExpiry)

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

  seller.password = await bcrypt.hash(payload.password, 10)
  seller.otp = undefined
  seller.otpExpiry = undefined

  await seller.save()
}

export async function resetPassword(payload: { id: string, currentPassword: string, changedPassword: string }) {
  const seller = await Seller.findOne({ _id: payload.id })

  const isCurrentPasswordMatched = await bcrypt.compare(payload.currentPassword, seller.password)

  if (!isCurrentPasswordMatched) {
    throw new HttpError(
      StatusCodes.BAD_REQUEST,
      "Invalid current password."
    )
  }

  const isMatchedWithExisting = await bcrypt.compare(payload.changedPassword, seller.password)

  if (isMatchedWithExisting) {
    throw new HttpError(
      StatusCodes.BAD_REQUEST,
      "New password is matching with existing. try another."
    )
  }

  seller.password = await bcrypt.hash(payload.changedPassword, 10)
  await seller.save()
}

export async function login(payload: { email: string, password: string }): Promise<string> {
  const seller = await Seller.findOne({ email: payload.email })

  if (!seller) {
    throw new HttpError(
      StatusCodes.NOT_FOUND,
      "Seller not found in given email"
    )
  }

  const isPasswordMatched = await bcrypt.compare(payload.password, seller.password)

  if (!isPasswordMatched) {
    throw new HttpError(
      StatusCodes.FORBIDDEN,
      "Given password is invalid"
    )
  }

  return jwt.sign({ id: seller._id }, process.env.TOKEN_SECRET as string, { expiresIn: "7d" })
}

export async function getCurrentSeller(payload: { id: string }) {
  const seller = await Seller.findOne({ _id: payload.id }).select("-password -store.proof")

  if (!seller) {
    throw new HttpError(
      StatusCodes.BAD_REQUEST,
      "Requested seller not found!"
    )
  }

  return seller
}