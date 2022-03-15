const mongoose = require('../db/connection');

const DiscSchema = new mongoose.Schema({
	id: Number,
	name: String,
	ratings: {
		speed: Number,
		glide: Number,
		turn: Number,
		fade: Number,
	},
	measurements: {
		diameter: Number,
		height: Number,
		rimdepth: Number,
		rimwidth: Number,
	},
});

const Disc = mongoose.model('Disc', DiscSchema);

module.exports = Disc;
