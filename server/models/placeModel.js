const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    district: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true }
});

const Places = mongoose.model('places', placeSchema);

module.exports = Places;