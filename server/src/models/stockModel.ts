import mongoose from "mongoose"

const stockSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
      index: true
    },
    quantity: {
      type: Number,
      required: true,
      min: 0,
      default: 0
    },
    reserved: {
      type: Number,
      required: true,
      min: 0,
      default: 0
    },
    sold: {
      type: Number,
      required: true,
      min: 0,
      default: 0
    }
  },
  {
    minimize: false,
    timestamps: true
  }
)

const Stock = mongoose.models.stocks || mongoose.model('stocks', stockSchema)

export default Stock