import { StatusCodes } from "http-status-codes"
import { getJWT } from "../plugins/plugins.js"
import authHelper from "../helpers/auth.helper.js"

const authMiddleware = async (req, res) => {

	const token = req.cookies.authcookie
	const refreshToken = req.cookies.refreshcookie
	if (!token && !refreshToken) {
		return res
			.status(StatusCodes.UNAUTHORIZED)
			.send({ message: "NO_TOKENS_PROVIDED", autorized: false, content: [] })
	}

	if (!token) {
		await generateNewToken(req, res)
		return
	}

	const jwtResponse = getJWT().verify(token, process.env.SECRET_TOKEN_KEY)

	if (!jwtResponse) {
		return res
			.status(StatusCodes.UNAUTHORIZED)
			.send({ message: "INVALID_TOKEN", content: [] })
	}

	return res
		.status(StatusCodes.OK)
		.send({ message: "VALID_TOKEN", autorized: true, content: [] })
}

const generateNewToken = async (req, res) => {
	const refreshToken = req.cookies.refreshcookie

	if (!refreshToken) {
		return res
			.status(StatusCodes.UNAUTHORIZED)
			.send({ message: "NO_REFRESH_TOKEN_PROVIDED", content: [] })
	}

	const jwtResponse = getJWT().verify(
		refreshToken,
		process.env.SECRET_TOKEN_KEY,
	)

	if (!jwtResponse) {
		return res
			.status(StatusCodes.UNAUTHORIZED)
			.send({ message: "INVALID_REFRESH_TOKEN", content: [] })
	}

	const decode = getJWT().decode(refreshToken)

	const token = await authHelper.generateToken(
		{
			email: decode.email,
			name: decode.name,
		},
		process.env.COOKIE_EXPIRE_TOKEN_TIME,
	)

	return res
		.cookie("authcookie", token, {
			maxAge: 15 * 60 * 1000,
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
			sameSite: "strict",
		})
		.status(StatusCodes.OK)
		.send({ message: "VALID_TOKEN", autorized: true, content: [] })
}

export default authMiddleware
