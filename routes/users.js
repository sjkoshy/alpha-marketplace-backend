import { Router } from "express";
import * as controllers from "../controllers/users.js";

const router = Router();

router.get("/verify", controllers.verify);
router.post("/signup", controllers.signUp);
router.post("/login", controllers.signIn);
router.get("/:id", controllers.getUser);

export default router;
