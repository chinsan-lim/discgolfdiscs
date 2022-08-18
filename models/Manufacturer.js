const mongoose = require('../db/connection');

const ManufacturerSchema = new mongoose.Schema({
	Name: String,
	Discs: [{ type: Schema.Types.ObjectId, ref: 'Disc' }],
});

const Manufacturer = mongoose.model('Manufacturer', ManufacturerSchema);

module.exports = Manufacturer;
