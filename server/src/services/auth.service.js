import { StatusCodes } from "http-status-codes";
import AuthRepository from "../repository/auth.repository.js";
import fs from "node:fs";
const __dirname = dirname(fileURLToPath(import.meta.url));
import authHelper from "../helpers/auth.helper.js";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const srcDir = join(__dirname, "..");

const AuthService = () => {
  const auth = AuthRepository();

  const login = async (req, res) => {
    const { email, password } = req.body;

    console.log({ email, password });

    const verify = await auth.verifyEmail(email);

    if (!verify.isFound) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .send({ message: "USER_NOT_FOUND", data: [] });
    }

    const isPasswordValid = await authHelper.comparePassword(
      password,
      verify.data.auth.password
    );

    if (!isPasswordValid) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .send({ message: "INVALID_PASSWORD", data: [] });
    }

    const token = await authHelper.generateToken({
      email: verify.data.email,
      name: verify.data.name,
    });

    return res
      .cookie("authcookie", token, {
        maxAge: 900000,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
      })
      .status(StatusCodes.OK)
      .send({ message: "LOGIN_SUCCESS", data: verify.data.user });
  };

  const logout = async (_, res) => {
    return res
      .clearCookie("authcookie")
      .status(StatusCodes.OK)
      .send({ message: "LOGOUT_SUCCESS", data: [] });
  };

  const register = async (req, res) => {
    const { name, lastname, email, password } = req.body;

    const verifyResponse = await auth.verifyEmail(email);

    if (verifyResponse.isFound) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .send({ message: "USER_EXIST", data: [] });
    }

    const registerResponse = await auth.register({
      name,
      lastname,
      email,
      password,
    });

    return res
      .status(StatusCodes.OK)
      .send({ message: "USER_CREATED", data: registerResponse });
  };

  const getPublicKey = async (_, res) => {
    const publicKeyPath = `${srcDir}/helpers/id_rsa_public.pem`;
    const publicKey = fs.readFileSync(publicKeyPath, "utf8");
    return res.status(StatusCodes.OK).send({ publicKey });
  };

  const validateAuthCookies = async (_, res) => {
    return res
      .status(StatusCodes.OK)
      .send({ message: "VALID_TOKEN", autorized: true, content: [] });
  };

  const verifyTurnstileToken = async (req, res) => {
    const { turnstileToken } = req.body;
    console.log({
      secret: process.env.TURNSTILE_SECRET_KEY,
      response: turnstileToken,
    });
    try {
      const response = await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            secret: process.env.TURNSTILE_SECRET_KEY,
            response: turnstileToken,
          }).toString(),
        }
      );

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      const data = await response.json();
      console.log(data);

      return res.status(200).send({ content: { ...data } });
    } catch (error) {
      console.error("Error verifying Turnstile token:", error);
      return res
        .status(500)
        .send({ message: "INVALID_TOKEN", error: error.message });
    }
  };

  return {
    login,
    logout,
    register,
    getPublicKey,
    validateAuthCookies,
    verifyTurnstileToken,
  };
};

export default AuthService;
