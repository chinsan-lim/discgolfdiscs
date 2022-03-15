const mongoose = require('../db/connection');

const ManufacturerSchema = new mongoose.Schema({
	id: Number,
	name: String,
	url: String,
});

const Manufacturer = mongoose.model('Manufacturer', ManufacturerSchema);

module.exports = Manufacturer;
