import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  cartItems: [
    {
      productId: mongoose.Schema.Types.ObjectId,
      quantity: Number
    }
  ]
}, { minimize: false })

const User = mongoose.models.users || mongoose.model('users', userSchema)

export default User