import mongoose from "mongoose"

const productSchema = new mongoose.Schema(
  {
    productId: {
      type: String,
      required: true,
      unique: true
    },
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true,
      default: ""
    },

    price: {
      type: Number,
      required: true,
      min: 0
    },

    discountType: {
      type: String,
      enum: ["PERCENTAGE", "VALUE"],
      default: "VALUE"
    },
    discount: {
      type: Number,
      default: 0,
      min: 0
    },

    thumbnail: {
      type: String,
      required: true
    }, // URL or path
    previews: [{
      type: String,
      required: true
    }], // Array of image URLs

    freeDelivery: {
      type: Boolean,
      default: false
    },
    returnPolicy: {
      type: String,
      default: false
    },
    showSeller: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: true,
    },

    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
      index: true,
    },
    sellerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Seller",
      required: true,
      index: true
    }
  },
  {
    minimize: false,
    timestamps: true
  }
)

const Product = mongoose.models.products || mongoose.model('products', productSchema)

export default Product