import cookieParser from "cookie-parser"
import cors from "cors"
import "dotenv/config"
import express from 'express'
import dbConnection from './config/dbConnection'
import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware"
import loggerMiddleware from './middlewares/loggerMiddleware'
import userRoutes from "./routes/userRoutes"

const app = express()
const port = process.env.PORT || 3001
const allowedOrigins = ['http://localhost:5174']

app.use(express.json())
app.use(cookieParser())
app.use(cors({ origin: allowedOrigins, credentials: true }))

app.use(loggerMiddleware)

app.get("/", function (request, response) {
  return response.json({ status: 200, message: "Welcome to freshroot!" })
})

app.use("/api/user", userRoutes)

app.use(errorHandlerMiddleware)

dbConnection().then(() => {
  app.listen(port, () => {
    console.info("🚀 Server running in:", port)
  })
})