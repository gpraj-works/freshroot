import crypto from "crypto"

export const sellerProofs = ["GST", "PAN", "AADHAAR", "EIN"]
export const sellerPaymentMethods = ["UPI", "BANK"]
export const sellerPayoutMethods = ["DAILY", "WEEKLY", "SEMI_WEEK", "MONTHLY"]

export function getOneTimePassword(length = 6): string {
  let otp = ""
  while (!/[A-Z]/.test(otp)) {
    otp = crypto.randomBytes(length).toString("hex").slice(0, length).toUpperCase()
  }
  return otp
}