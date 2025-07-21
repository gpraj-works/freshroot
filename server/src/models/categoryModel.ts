import mongoose from "mongoose"

const categorySchema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
      unique: true
    },
    thumbnail: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: "#ffffff"
    },
    active: {
      type: Boolean,
      default: true
    }
  },
  {
    minimize: false,
    timestamps: true
  }
)

const Category = mongoose.models.categories || mongoose.model('categories', categorySchema)

export default Category