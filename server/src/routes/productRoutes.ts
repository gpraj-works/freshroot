import { Router } from "express"
import * as productController from "../controllers/productController"

const productRoutes = Router()

productRoutes.get("/categories",
  productController.categories
)

export default productRoutes