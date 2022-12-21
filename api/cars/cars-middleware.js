const carsMod = require("./cars-model");
var vinValidator = require("vin-validator");

const checkCarId = async (req, res, next) => {
  // DO YOUR MAGIC
  const cars = await carsMod.getById(req.params.id);
  if (!cars) {
    res.status(404).json({ message: "id not found" });
  } else {
    next();
  }
};

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
  const { vin, make, model, mileage } = req.body;
  if (!vin) {
    next({ status: 400, message: `vin is missing` });
  } else if (!make) {
    next({ status: 400, message: "make is missing" });
  } else if (!model) {
    next({ status: 400, message: "model is missing" });
  } else if (!mileage) {
    next({ status: 400, message: "mileage is missing" });
  } else {
    next();
  }
};

const checkVinNumberValid = (req, res, next) => {
  const { vin } = req.body;
  const isVinValidated = vinValidator.validate(vin);
  if (!isVinValidated) {
    next({ status: 400, message: `vin ${vin} is invalid` });
  } else {
    next();
  }
  // DO YOUR MAGIC
};

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
};

module.exports = { checkCarId, checkCarPayload, checkVinNumberValid };
