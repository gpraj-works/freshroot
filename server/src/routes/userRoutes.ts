import { Router } from "express"
import * as userController from "../controllers/userController"
import validationMiddleware from "../middlewares/validationMiddleware"
import { loginValidation, registerValidation } from "../validations/userValidator"

const userRoutes = Router()

userRoutes.post("/register", validationMiddleware(registerValidation), userController.register)
userRoutes.post("/login", validationMiddleware(loginValidation), userController.login)

export default userRoutes