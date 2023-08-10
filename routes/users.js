import { Router } from "express";
import * as controllers from "../controllers/users.js";

const router = Router();

router.post("/signup", controllers.signUp);
router.post("/login", controllers.login);
router.get("/verify", controllers.verify);

export default router;
