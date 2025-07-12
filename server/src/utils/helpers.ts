import crypto from "crypto"

export function getOneTimePassword(length = 6): string {
  let otp = ""
  while (!/[A-Z]/.test(otp)) {
    otp = crypto.randomBytes(length).toString("hex").slice(0, length).toUpperCase()
  }
  return otp
}