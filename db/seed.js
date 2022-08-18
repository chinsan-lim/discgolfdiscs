const mongoose = require('mongoose');

const Disc = require('../models/Disc');

// Require our Bookmarks seeds
const DiscSeed = require('./disc.json');

// Logic to empty database

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