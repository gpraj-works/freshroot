import { Router } from "express"
import * as adminController from "../controllers/adminController"
import * as validate from "../validations/adminValidator"
import validationMiddleware from "../middlewares/validationMiddleware"
import { authAdmin } from "../middlewares/authMiddleware"

const adminRoutes = Router()

adminRoutes.post("/login",
  validationMiddleware(validate.loginProps),
  adminController.login
)

adminRoutes.post("/category",
  authAdmin,
  validationMiddleware(validate.addCategoryProps),
  adminController.addCategory
)
adminRoutes.get("/category", () => { })
adminRoutes.put("/category", () => { })
adminRoutes.delete("/category/:id", () => { })

adminRoutes.get("/sellers", () => { })
adminRoutes.get("/sellers/products", () => { })
adminRoutes.get("/sellers/products/:category", () => { })
adminRoutes.get("/sellers/products/:category/:productId", () => { })

adminRoutes.get("/users", () => { })
adminRoutes.get("/users/:id", () => { })

export default adminRoutes