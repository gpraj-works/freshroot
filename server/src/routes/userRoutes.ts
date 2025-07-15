import { Router } from "express"
import * as userController from "../controllers/userController"
import validationMiddleware from "../middlewares/validationMiddleware"
import * as validate from "../validations/userValidator"
import { authUser } from "../middlewares/authMiddleware"

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
  userController.proceedForgotPassword
)
userRoutes.put("/forgot-password",
  validationMiddleware(validate.forgotPasswordProps),
  userController.forgotPassword
)

userRoutes.get("/current-user",
  authUser,
  userController.getCurrentUser
)

userRoutes.get("/logout",
  authUser,
  userController.logout
)

export default userRoutes