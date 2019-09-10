const express = require('express')
const carsDb = require('../data/db-config.js')

const router = express.Router()

router.get('/', (req, res) => {
    carsDb('cars')
    .then( cars => res.status(200).json(cars))
    .catch( err => res.status(500).json({message: 'there was an error'}))
})

router.post('/', (req, res) =>{

    const car = req.body
    if(!car.make||!car.carModel||!car.vin||!car.mileage){
        res.status(400).json({message: "Please fill out the required fields."})
    }else{
    carsDb('cars')
    .insert(car, 'id')
    .then( ([id]) => {
        carsDb('cars')
        .where({ id })
        .first()
        .then( car =>{
            res.status(201).json(car)
        })
    })
    .catch( err => res.status(500).json({message: "couldn't create your car listing"}))
    }
})

module.exports = router