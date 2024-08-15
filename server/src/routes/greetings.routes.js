import { Router } from "express";
const router = Router();
import GreetingsServices from "../services/greetings.service.js";

const services = GreetingsServices();

router.get("/hello", services.getGreetings);

export default router;

