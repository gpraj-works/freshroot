import { Router } from "express"
import * as productController from "../controllers/productController"

const adminRoutes = Router()

adminRoutes.post("/login", () => { })

adminRoutes.get("/category", () => { })
adminRoutes.post("/category", () => { })
adminRoutes.put("/category", () => { })
adminRoutes.delete("/category/:id", () => { })

adminRoutes.get("/sellers", () => { })
adminRoutes.get("/sellers/products", () => { })
adminRoutes.get("/sellers/products/:category", () => { })
adminRoutes.get("/sellers/products/:category/:productId", () => { })

adminRoutes.get("/users", () => { })
adminRoutes.get("/users/:id", () => { })

export default adminRoutes