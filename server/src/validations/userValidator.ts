import { z } from "zod"

const emailSchema = z.string("Email field is missing!").email("Invalid email")
const passwordSchema = z
  .string("Password field is missing!")
  .min(6, "Password must be at least 6 characters")
const otpSchema = z
  .string("OTP field is missing!")
  .length(6, "Invalid OTP. Try again!")

export const registerProps = z.object({
  name: z.string("Name field is missing!").min(1, "Name is required"),
  email: emailSchema,
  password: passwordSchema,
})

export const emailVerificationProps = z.object({
  email: emailSchema,
  otp: otpSchema,
})

export const loginProps = z.object({
  email: emailSchema,
  password: passwordSchema,
})

export const proceedForgotPasswordProps = z.object({
  email: emailSchema,
})

export const forgotPasswordProps = z.object({
  email: emailSchema,
  otp: otpSchema,
  password: passwordSchema,
})
