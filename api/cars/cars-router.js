// DO YOUR MAGIC

const carsMod = require('./cars-model')
const router = require('express').Router()


router.use('/', async (req,res) => {
    carsMod.getAll()
    .then(cars => {
      res.json(cars);
    })
    .catch(err => {
      res.status(500).json({ message: `Failed to retrieve cars: ${err.message}` });
    });
})

module.exports = router;