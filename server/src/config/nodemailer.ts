import nodemailer from "nodemailer"
import hbs from "nodemailer-express-handlebars"
import path from "path"
import dayjs from "dayjs"
import { HttpError } from "utils/httpError"

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.GOOGLE_ACCOUNT,
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    accessToken: process.env.GOOGLE_ACCESS_TOKEN,
    refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
  },
  tls: {
    rejectUnauthorized: true,
  },
})

const templates = path.resolve(__dirname, "../templates")

transporter.use("compile", hbs({
  viewEngine: {
    extname: '.hbs',
    layoutsDir: templates,
    partialsDir: templates,
    defaultLayout: undefined,
  },
  viewPath: templates,
  extName: ".hbs",
}))

type SendMailProps = {
  to: string
  subject: string
  template: string
  context: object
}

async function sendEmail(props: SendMailProps) {
  const mailOptions = {
    from: `"Freshroot" <${process.env.GOOGLE_ACCOUNT}>`,
    to: props.to,
    subject: props.subject,
    template: props.template,
    context: {
      company_name: "Freshroot",
      otp_expiry_minutes: 2,
      current_year: dayjs().year().toString(),
      ...props.context
    }
  }

  let isInvalidEmail = false
  let messageId: string | null = null

  try {
    await transporter.verify()
    const sentResponse = await transporter.sendMail(mailOptions)
    isInvalidEmail = sentResponse.rejected.length > 0
    messageId = sentResponse.messageId?.replace(/[<>]/g, "") || null

    return { isInvalidEmail, messageId }
  } catch (error) {
    const err = error as HttpError

    if (err.message.includes("invalid_grant")) {
      console.error("nodemailer/sendEmail error: OAuth2 refresh token has been expired!")
    } else {
      console.log("nodemailer/sendEmail error:", err)
    }

    return { isInvalidEmail, messageId }
  }
}

export { transporter, sendEmail }