import { Router } from "express";
import carsRoutes from "./cars.js";
import usersRoutes from "./users.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("This is root!");
});

router.use("/", carsRoutes);
router.use("/", usersRoutes);

export default router;
