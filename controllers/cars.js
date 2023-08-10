import Car from "../models/car";

// router.get("/cars/:model", controllers.searchModel);
// router.get("/cars/:type", controllers.searchType);
// router.get("/cars/:year", controllers.searchYear);
// router.get("/cars/:color", controllers.searchColor);
// router.get("/cars/:price", controllers.searchPrice);
// router.get("/cars/:id", controllers.getCar);
// router.post("/cars", controllers.createCar);
// router.put("/cars/:id", restrict, controllers.updateCar);
// router.delete("/cars/:id", restrict, controllers.deleteCar);

export const getCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ error: error.message });
  }
};

export const searchMake = async (req, res) => {
  try {
    const cars = await Car.find({ make: req.params.make });
    res.json(cars);
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ error: error.message });
  }
};

export const searchModel = async (req, res) => {
  try {
    const cars = await Car.find({ model: req.params.model });
    res.json(cars);
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ error: error.message });
  }
};

export const searchType = async (req, res) => {
  try {
    const cars = await Car.find({ type: req.params.type });
    res.json(cars);
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ error: error.message });
  }
};

export const searchYear = async (req, res) => {
  try {
    const cars = await Car.find({ year: req.params.year });
    res.json(cars);
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ error: error.message });
  }
};

export const searchColor = async (req, res) => {
  try {
    const cars = await Car.find({ color: req.params.color });
    res.json(cars);
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ error: error.message });
  }
};

export const searchPrice = async (req, res) => {
  try {
    const cars = await Car.find({ price: req.params.price });
    res.json(cars);
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ error: error.message });
  }
};

export const getCar = async (req, res) => {
  try {
    const { id } = req.params;
    const car = await Car.findById(id);
    if (car) {
      return res.json(car);
    }
    res.status(404).json({ message: "Car not found!" });
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ error: error.message });
  }
};

export const createCar = async (req, res) => {
  try {
    const car = new Car(req.body);
    await car.save();
    res.status(201).json(car);
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ error: error.message });
  }
};

export const updateCar = async (req, res) => {
  const { id } = req.params;
  const car = await Car.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).json(car);
};

export const deleteCar = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Car.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Car deleted");
    }
    throw new Error("Car not found");
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ error: error.message });
  }
};
