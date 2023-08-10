import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("This is root!");
});

router.use("/cars", carsRouter);

export default router;
