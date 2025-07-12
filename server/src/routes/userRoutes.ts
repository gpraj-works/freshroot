import { Router } from "express"
import * as userController from "../controllers/userController"
import validationMiddleware from "../middlewares/validationMiddleware"
import * as validate from "../validations/userValidator"

const userRoutes = Router()

userRoutes.post("/register",
  validationMiddleware(validate.registerProps),
  userController.register
)
userRoutes.post("/email-verification",
  validationMiddleware(validate.emailVerificationProps),
  userController.emailVerification
)
userRoutes.post("/login",
  validationMiddleware(validate.loginProps),
  userController.login
)
userRoutes.post("/proceed-forgot-password",
  validationMiddleware(validate.proceedForgotPasswordProps),
  userController.login
)
userRoutes.post("/forgot-password",
  validationMiddleware(validate.forgotPasswordProps),
  userController.login
)

export default userRoutes