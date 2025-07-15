import nodemailer from "nodemailer"
import hbs from "nodemailer-express-handlebars"
import path from "path"
import dayjs from "dayjs"

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
  const sentResponse = await transporter.sendMail(mailOptions)
  const isInvalidEmail = sentResponse.rejected.length > 0
  const messageId = sentResponse.messageId?.replace(/[<>]/g, "") || null
  return { isInvalidEmail, messageId }
}

export { transporter, sendEmail }