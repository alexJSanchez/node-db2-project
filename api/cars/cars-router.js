// DO YOUR MAGIC
const carsMod = require("./cars-model");
const router = require("express").Router();
const { checkCarId, checkCarPayload, checkVinNumberValid, checkVinNumberUnique } = require("./cars-middleware");

router.get("/", async (req, res, next) => {
  try {
    const cars = await carsMod.getAll();
    res.json(cars);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", checkCarId, async (req, res, next) => {
  try {
    const cars = await carsMod.getById(req.params.id);
    res.json(cars);
  } catch (err) {
    next(err);
  }
});

router.post("/", checkCarPayload, checkVinNumberValid, checkVinNumberUnique, async (req, res, next) => {
  try {
    const newCar = await carsMod.create(req.body);
    res.json(newCar);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
