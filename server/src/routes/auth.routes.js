import { Router } from "express";
import AuthService from "../services/auth.service.js";
import userValidation from "../validations/user.validation.js";
import validate from "../middlewares/validate.middleware.js";
import authMiddleware from "../middlewares/protected.middleware.js";
const router = Router();

const service = AuthService();
const validation = userValidation();

router.post("/register", validate(validation.create), service.register);
router.post("/login", validate(validation.login), service.login);
router.post("/logout", service.logout);
router.post("/verify-turnstile-token", service.verifyTurnstileToken);
router.get("/protected", authMiddleware, service.validateAuthCookies);
router.get("/public_key", authMiddleware, service.getPublicKey);

export default router;
