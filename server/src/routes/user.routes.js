import { Router } from "express";
const router = Router();
import UserServices from "../services/user.service.js";

const services = UserServices();

router.post("/", services.index);
router.post("/create", services.create);
router.get("/getAll", services.getAll);
router.get("/getById/:id", services.getById);

export default router;
