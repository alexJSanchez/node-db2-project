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
  if (vinValidator.validate(req.body.vin)) {
    next()
  } else {
    next({ status: 400, message: `vin ${req.body.vin} is invalid` });
  }
  // DO YOUR MAGIC
};

const checkVinNumberUnique = async (req, res, next) => {
  // DO YOUR MAGIC
 try{
  const validVin = await carsMod.getVin(req.body.vin)
  if(validVin){
    next({status: 400, message: `vin ${req.body.vin} already exists`})
  }else{
    next()
  }
 }catch(err){
  next(err)
 }
};

module.exports = { checkCarId, checkCarPayload, checkVinNumberValid, checkVinNumberUnique};
