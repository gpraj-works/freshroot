import mongoose from "mongoose"

const adminSchema = new mongoose.Schema(
  {
    loginId: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    type: {
      type: String,
      enum: ["SUPER_ADMIN", "ADMIN"],
      default: "SUPER_ADMIN"
    },
    ip: {
      type: String
    }
  },
  {
    minimize: false,
    timestamps: true
  }
)
const Admin = mongoose.models.admins || mongoose.model('admins', adminSchema)

export default Admin