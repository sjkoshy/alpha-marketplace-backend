import { Router } from "express";
import * as controllers from "../controllers/cars.js";
import restrict from "../helpers/restrict.js";

const router = Router();

router.get("/cars", controllers.getCars);
router.get("/cars/:make", controllers.searchMake);
router.get("/cars/:model", controllers.searchModel);
router.get("/cars/:type", controllers.searchType);
router.get("/cars/:year", controllers.searchYear);
router.get("/cars/:color", controllers.searchColor);
router.get("/cars/:price", controllers.searchPrice);
router.get("/cars/:id", controllers.getCar);
router.post("/cars", controllers.createCar);
router.put("/cars/:id", restrict, controllers.updateCar);
router.delete("/cars/:id", restrict, controllers.deleteCar);

export default router;
