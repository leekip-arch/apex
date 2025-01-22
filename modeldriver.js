const mongoose = require('mongoose');

const DriverSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    phoneNumber: String,
    idNumber: String,
    county: String,
    ward: String,
    apartmentName: String,
    vehicle: {
        carMake: String,
        carModel: String,
        vehicleType: String,
        vehicleColor: String,
        vehicleYear: Number,
        licensePlateNumber: String,
        driverLicenseNumber: String
    }
});

module.exports = mongoose.model('Driver', DriverSchema);
