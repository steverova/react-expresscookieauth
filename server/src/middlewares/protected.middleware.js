import { StatusCodes } from "http-status-codes";
import { getJWT } from "../plugins/plugins.js";

const authMiddleware = async (req, res, next) => {
  const token = req.cookies.authcookie;

  if (!token) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .send({ message: "NO_TOKEN_PROVIDED", content: [] });
  }

  const jwtResponse = getJWT().verify(token, process.env.SECRET_TOKEN_KEY);

  if (!jwtResponse) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .send({ message: "INVALID_TOKEN", content: [] });
  }

  next();
};

export default authMiddleware;
