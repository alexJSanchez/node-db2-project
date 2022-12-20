const carsMod = require('./cars-model')


const checkCarId = async (req, res, next) => {
  // DO YOUR MAGIC
  const cars = await carsMod.getById(req.params.id)
  if(!cars){
    res.status(404).json({message: 'id not found'})
  }else{
    next()
  }
}

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

module.exports = {checkCarId}