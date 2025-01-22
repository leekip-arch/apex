const mongoose = require('mongoose');

const ParcelSchema = new mongoose.Schema({
    weight: Number,
    height: Number,
    width: Number,
    length: Number,
    description: String,
    price: Number
});

module.exports = mongoose.model('Parcel', ParcelSchema);
