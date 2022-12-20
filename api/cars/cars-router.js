// DO YOUR MAGIC
const carsMod = require('./cars-model')
const router = require('express').Router()


router.get('/', async (req,res, next) => {
   try{
    const cars = await carsMod.getAll()
    res.json(cars)
   }catch(err){
    next(err)
   }
})

module.exports = router;