import { Router } from "express"
import * as sellerController from "../controllers/sellerController"
import validationMiddleware from "../middlewares/validationMiddleware"
import * as validate from "../validations/sellerValidator"
import { authSeller } from "../middlewares/authMiddleware"

const sellerRoutes = Router()

sellerRoutes.post("/register",
  validationMiddleware(validate.registerProps),
  sellerController.register
)
sellerRoutes.post("/email-verification",
  validationMiddleware(validate.emailVerificationProps),
  sellerController.emailVerification
)
sellerRoutes.post("/login",
  validationMiddleware(validate.loginProps),
  sellerController.login
)
sellerRoutes.post("/proceed-forgot-password",
  validationMiddleware(validate.proceedForgotPasswordProps),
  sellerController.proceedForgotPassword
)
sellerRoutes.put("/forgot-password",
  validationMiddleware(validate.forgotPasswordProps),
  sellerController.forgotPassword
)
sellerRoutes.put("/reset-password", 
  authSeller,
  sellerController.resetPassword
)
sellerRoutes.get("/current-seller",
  authSeller,
  sellerController.getCurrentSeller
)
sellerRoutes.put("/update-profile", () => { })

sellerRoutes.get("/products", () => { })
sellerRoutes.post("/products", () => { })
sellerRoutes.get("/products/:id", () => { })
sellerRoutes.put("/products/:id", () => { })
sellerRoutes.put("/stock/:sellerId/:productId", () => { })
sellerRoutes.get("/stock/:sellerId/:productId", () => { })
sellerRoutes.get("/stock/:sellerId", () => { })

sellerRoutes.get("/reviews/:sellerId/:productId", () => { })
sellerRoutes.post("/reviews/:sellerId/:productId", () => { })



export default sellerRoutes