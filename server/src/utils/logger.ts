import pino from 'pino'
import path from 'path'

const logPath = path.join(__dirname, "../../logs/app.log")

const logger = pino(
  pino.transport({
    targets: [
      {
        target: 'pino-pretty',
        options: {
          colorize: true,
          translateTime: 'dd:MMM:yyyy HH:mm:ss',
          ignore: 'pid,hostname',
          singleLine: true
        },
        level: 'info',
      },
      {
        target: 'pino/file',
        options: { destination: logPath },
        level: 'info',
      }
    ]
  })
)

export default logger
