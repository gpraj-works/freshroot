import { Router } from "express"
import * as productController from "../controllers/productController"

const productRoutes = Router()

productRoutes.post("/categories", () => { })
productRoutes.post("/products", () => { })
productRoutes.post("/products/:category", () => { })
productRoutes.post("/products/:category/:product", () => { })
productRoutes.post("/products/best-seller", () => { })

productRoutes.get("/products/reviews/:productId/", () => { })
productRoutes.post("/products/reviews/:productId/", () => { })
productRoutes.put("/products/reviews/:productId/", () => { })

export default productRoutes