import mongoose from "mongoose"
import { sellerProofs, sellerPaymentMethods, sellerPayoutMethods } from "../utils/helpers"

const sellerSchema = new mongoose.Schema(
  {
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
    mobile: {
      type: Number,
      required: true
    },

    store: {
      name: {
        type: String,
        required: true
      },
      address: {
        street: {
          type: String,
          required: true
        },
        city: {
          type: String,
          required: true
        },
        zipcode: {
          type: String,
          required: true
        },
        district: {
          type: String,
          required: true
        },
        state: {
          type: String,
          required: true
        },
        country: {
          type: String,
          required: true
        }
      },
      proof: {
        type: {
          type: String,
          enum: sellerProofs,
          required: false,
        },
        code: {
          type: String,
          required: false,
          unique: true
        },
      },
    },

    payment: {
      primary: {
        type: String,
        enum: sellerPaymentMethods,
        required: false,
      },
      bank: {
        holder: {
          type: String
        },
        branchName: {
          type: String
        },
        branchCode: {
          type: String
        },
        accountNumber: {
          type: String,
          unique: true
        },
      },
      upi: {
        id: {
          type: String,
          unique: true
        },
        holderName: {
          type: String
        },
      },
    },

    payoutType: {
      type: String,
      enum: sellerPayoutMethods,
      required: false,
    },

    otp: {
      type: String
    },
    otpExpiry: {
      type: Date
    },
    verified: {
      type: Boolean,
      default: false
    },

    ip: {
      type: String,
      required: false,
    }
  },
  {
    minimize: false,
    timestamps: true
  }
)

const Seller = mongoose.models.sellers || mongoose.model('sellers', sellerSchema)

export default Seller