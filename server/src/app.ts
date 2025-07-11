import cookieParser from "cookie-parser"
import cors from "cors"
import "dotenv/config"
import express from 'express'
import dbConnection from './config/dbConnection'
import loggerMiddleware from './middlewares/loggerMiddleware'

const app = express()
const port = process.env.PORT || 3001
const allowedOrigins = ["http://localhost:5173"]

app.use(express.json())
app.use(cookieParser())
app.use(cors({ origin: allowedOrigins, credentials: true }))
app.use(loggerMiddleware)

app.get("/", function (request, response) {
  return response.json({ status: 200, message: "Welcome to freshroot!" })
})

dbConnection().then(() => {
  app.listen(port, () => {
    console.info("🚀 Server running in:", port)
  })
})