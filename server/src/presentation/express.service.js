import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import greetingsRouter from '../routes/greetings.routes.js'
import userRouter from '../routes/user.routes.js'
import authRouter from '../routes/auth.routes.js'
import helmet from 'helmet'
import limitPayloadSize from '../middlewares/limitPayloadSize.middleware.js'

process.env.TZ = 'America/Costa_Rica'

const PORT = Number.parseInt(process.env.PORT) || 3002
const app = express()

app.use(
	cors({
		origin: ['http://localhost:4173', 'http://localhost:5173'],
		credentials: true,
	}),
)
app.use(morgan('dev'))
app.use(helmet())
app.use(express.json())
app.use((req, res, next) => {
	req.setTimeout(5000)
	res.setTimeout(5000)
	next()
})
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.disable('x-powered-by')
app.use(limitPayloadSize)

app.use('/greetings', greetingsRouter)
app.use('/user', userRouter)
app.use('/auth', authRouter)

app.use((err, _, res, __) => {
	console.error(err.stack)
	res.status(500).send('Something went wrong!')
})

export const createServer = () => {
	app.listen(PORT, () => {
		console.log(`Server started on port http://localhost:${PORT}`)
	})
}

export default createServer
