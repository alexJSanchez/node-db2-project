// STRETCH
const cars = [
    {
        vin:123456789123,
        make: 'nissan',
        model: 'prius',
        mileage: 205000,
        transmission: 'manual',
    },
    {
        vin:123456789123,
        make: 'toyota',
        model: 'corolla',
        mileage: 205000,
        transmission: 'manual',
    },
    {
        vin:123456789123,
        make: 'ford',
        model: 'focus',
        mileage: 205000,
        transmission: 'manual',
    }
]

exports.seed = async function(knex){
   await knex('cars').truncate()
   await knex('cars').insert(cars)
}