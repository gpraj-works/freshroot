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
  mobile: z
    .string("Mobile number is missing!")
    .min(8, "Mobile number is invalid")
    .max(12, "Mobile number is invalid"),
  store: z.object({
    name: z.string("Shop name field is missing!").min(8, "Shop name is invalid"),
    address: z.object({
      street: z.string("Street field is missing!").min(1, "Street is required"),
      city: z.string("City field is missing!").min(1, "City is required"),
      zipcode: z.string("Zipcode field is missing!").min(1, "Zipcode is required"),
      district: z.string("District field is missing!").min(1, "District is required"),
      state: z.string("State field is missing!").min(1, "State is required"),
      country: z.string("Country field is missing!").min(1, "Country is required"),
    }),
  }),
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

export const resetPasswordProps = z.object({
  currentPassword: passwordSchema,
  changedPassword: passwordSchema
})