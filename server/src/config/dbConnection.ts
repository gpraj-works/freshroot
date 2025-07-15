import mongoose from "mongoose"
export default async function dbConnection() {
  try {
    const connectionString = process.env.CONNECTION_STRING
    mongoose.connection.on('connected', function () {
      console.log('✨ MongoDB connected')
    })
    await mongoose.connect(`${connectionString}/freshroot`)
  } catch (error) {
    console.error("💣 MongoDB Connection Error:", error)
    process.exit(1)
  }
}