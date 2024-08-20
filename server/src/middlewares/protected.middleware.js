import { StatusCodes } from "http-status-codes"
import { getJWT } from "../plugins/plugins.js"
import authHelper from "../helpers/auth.helper.js"

// const authMiddleware = async (req, res) => {

// 	const token = req.cookies.authcookie
// 	const refreshToken = req.cookies.refreshcookie

// 	console.log("token ==>", token)
// 	console.log("refreshToken ==>", refreshToken)

// 	if (!token && !refreshToken) {
// 		return res
// 			.status(StatusCodes.UNAUTHORIZED)
// 			.send({ message: "NO_TOKENS_PROVIDED", autorized: false, content: [] })
// 	}

// 	if (!token) {
// 		await generateNewToken(req, res)
// 		return
// 	}

// 	const jwtResponse = getJWT().verify(token, process.env.SECRET_TOKEN_KEY)

// 	console.log("jwtResponse ==>", jwtResponse)

// 	if (!jwtResponse) {
// 		return res
// 			.status(StatusCodes.UNAUTHORIZED)
// 			.send({ message: "INVALID_TOKEN", content: [] })
// 	}

// 	return res
// 		.status(StatusCodes.OK)
// 		.send({ message: "VALID_TOKEN", autorized: true, content: [] })
// }

const authMiddleware = async (req, res) => {
    const token = req.cookies.authcookie;
    const refreshToken = req.cookies.refreshcookie;

    console.log("Received request with cookies:");
    console.log("authcookie:", token);
    console.log("refreshcookie:", refreshToken);

    if (!token && !refreshToken) {
        console.log("No tokens provided.");
        return res
            .status(StatusCodes.UNAUTHORIZED)
            .send({ message: "NO_TOKENS_PROVIDED", authorized: false, content: [] });
    }

    if (!token) {
        console.log("No authcookie provided, attempting to generate a new token using refresh token.");
        await generateNewToken(req, res);
        return;
    }

    console.log("Verifying authcookie with secret key.");
    const jwtResponse = getJWT().verify(token, process.env.SECRET_TOKEN_KEY);

    console.log("JWT verification response:", jwtResponse);

    if (!jwtResponse) {
        console.log("Invalid authcookie.");
        return res
            .status(StatusCodes.UNAUTHORIZED)
            .send({ message: "INVALID_TOKEN", content: [] });
    }

    console.log("Valid authcookie. User is authorized.");
    return res
        .status(StatusCodes.OK)
        .send({ message: "VALID_TOKEN", authorized: true, content: [] });
};


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
		"15m",
	)

	return res
		.cookie("authcookie", token, {
			maxAge: 15 * 60 * 1000,
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
			sameSite: "strict",
		})
		.status(StatusCodes.OK)
		.send({ message: "VALID_TOKEN", authorized: true, content: [] })
}

export default authMiddleware
