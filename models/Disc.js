const mongoose = require('../db/connection');

const DiscSchema = new mongoose.Schema({
	Manufacturer: String,
	Name: String,
	Speed: Number,
	Glide: Number,
	Turn: Number,
	Fade: Number,
	Diameter: Number,
	Height: Number,
	RimDepth: Number,
	RimWidth: Number,
});

const Disc = mongoose.model('Disc', DiscSchema);

module.exports = Disc;
