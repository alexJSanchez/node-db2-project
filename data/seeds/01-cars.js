// STRETCH
const cars = [
    {
        make: 'toyota',
        mileage: 250000,
        model: 'prius',
        title: 'salvage',
        transmission: 'CVT',
        vin:'WBAAM3333XFP59732',
    },
    {
        make: "honda",
        mileage: 220000,
        model: "accord",
        title: "clean",
        transmission: "automatic",
        vin: "JH4DA344XGS004311",
    },
    {
        make: "ford",
        mileage: 120000,
        model: "mustang",
        title: "clean",
        transmission: "manual",
        vin: "1FAFP55U91A180689",
    }
]

exports.seed = async function(knex){
   await knex('cars').truncate()
   await knex('cars').insert(cars)
}