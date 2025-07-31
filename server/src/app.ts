import cookieParser from "cookie-parser"
import cors from "cors"
import "dotenv/config"
import express from 'express'
import dbConnection from './config/dbConnection'
import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware"
import loggerMiddleware from './middlewares/loggerMiddleware'
import userRoutes from "./routes/userRoutes"
import sellerRoutes from "./routes/sellerRoutes"
import productRoutes from "./routes/productRoutes"
import adminRoutes from "./routes/adminRoutes"

const app = express()
const port = process.env.PORT || 3001
const allowedOrigins = ['http://localhost:5173']

app.use(express.json())
app.use(cookieParser())
app.use(cors({
  origin: allowedOrigins,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type'],
}))

app.use(loggerMiddleware)

app.get("/", function (request, response) {
  return response.json({ status: 200, message: "Welcome to freshroot!" })
})

app.use("/api/user", userRoutes)
app.use("/api/seller", sellerRoutes)
app.use("/api/product", productRoutes)
app.use("/api/admin", adminRoutes)

app.use(errorHandlerMiddleware)

dbConnection().then(() => {
  app.listen(port, () => {
    console.info("🚀 Server running in:", port)
  })
})