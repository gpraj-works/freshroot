import { z } from "zod"

export const addCategoryProps = z.object({
  code: z.string("Code field is missing!").min(1, "Code is required"),
  name: z.string("Name field is missing!").min(1, "Name is required"),
  thumbnail: z.string("Thumbnail field is missing!").min(1, "Thumbnail is required"),
  color: z.string()
})

export const loginProps = z.object({
  loginId: z.string("Login id field is missing!").min(1, "Login id is required"),
  password: z.string("Password field is missing!").min(1, "Password is required"),
})
