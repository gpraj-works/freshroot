import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatar: { type: String },

    cartItems: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        quantity: { type: Number, default: 1 },
      },
    ],

    otp: { type: String },
    otpExpiry: { type: Date },
    verified: { type: Boolean, default: false },

    ip: { type: String }
  },
  { minimize: false, timestamps: true }
)
const User = mongoose.models.users || mongoose.model('users', userSchema)

export default User