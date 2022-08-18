const mongoose = require('mongoose');

const Disc = require('../models/Disc');

const DiscSeed = require('./disc.json');

	DiscSeed.map((disc) => {
		return { ...disc };
	})
	.then((disc) => {
		return Disc.insertMany(disc);
	})
	.then((newDisc) => {
		console.log('Created new discs!', newDisc);
	})
	.catch(console.error)
	.finally(() => {
		process.exit();
	});