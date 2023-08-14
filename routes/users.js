import { Router } from "express";
import * as controllers from "../controllers/users.js";

const router = Router();

router.get("/:id", controllers.getUser);
router.get("/username/:username", controllers.getUserIdByUsername);
router.post("/signup", controllers.signUp);
router.post("/login", controllers.signIn);
router.get("/verify", controllers.verify);


export default router;
