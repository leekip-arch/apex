const express = require('express');
const router = express.Router();
const Parcel = require('../models/Parcel');
const Driver = require('../models/Driver');

// Route: Add a new parcel
router.post('/parcels', async (req, res) => {
    try {
        const parcel = new Parcel(req.body);
        await parcel.save();
        res.status(201).json(parcel);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Route: Retrieve all parcels
router.get('/parcels', async (req, res) => {
    try {
        const parcels = await Parcel.find();
        res.json(parcels);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Route: Add a new driver
router.post('/drivers', async (req, res) => {
    try {
        const driver = new Driver(req.body);
        await driver.save();
        res.status(201).json(driver);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Route: Retrieve all drivers
router.get('/drivers', async (req, res) => {
    try {
        const drivers = await Driver.find();
        res.json(drivers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
