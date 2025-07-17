import bcrypt from "bcryptjs"
import { StatusCodes } from "http-status-codes"
import jwt from "jsonwebtoken"
import { sendEmail } from "../config/nodemailer"
import User from "../models/User"
import { getOneTimePassword } from "../utils/helpers"
import { HttpError } from "../utils/httpError"
import dayjs from "dayjs"

export async function categories() {

  return []
}