import mongoose from "mongoose"

const reviewSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
      index: true
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true
    },
    rating: {
      type: Number,
      min: 1,
      max: 5
    },
    comment: {
      type: String,
      trim: true,
      maxlength: 1000,
    },
    previews: {
      type: String
    }
  },
  {
    minimize: false,
    timestamps: true
  }
)

const Review = mongoose.models.reviews || mongoose.model('reviews', reviewSchema)

export default Review