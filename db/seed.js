const mongoose = require('mongoose');

const Disc = require('../models/Disc');
const Manufacturer = require('../models/Manufacturer');

// Require our Bookmarks seeds
const DiscSeed = require('../db/disc.json');
const ManufacturerSeed = require('../db/manufacturer.json');

// Logic to empty database

Disc.deleteMany({})
	.then(() => {
		console.log('Deleted all the discs!');
		return DiscSeed.map((disc) => {
			return { ...disc };
		});
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

// Disc.deleteMany({})
// 	.then(() => {
// 		console.log('Deleted all the discs!');
// 		Manufacturer.deleteMany({});
// 	})
// 	.then(() => {
// 		console.log('Deleted all manufacturers!');
// 		return DiscSeed.map((disc) => {
// 			return { ...disc };
// 		});
// 	})
// 	.then((disc) => {
// 		return Disc.insertMany(disc);
// 	})
// 	.then((newDisc) => {
// 		console.log('Created new discs!', newDisc);
// 	})

// 	.then(() => {
// 		return ManufacturerSeed.map((manufacturer) => {
// 			return { ...manufacturer };
// 		});
// 	})
// 	.then((manufacturer) => {
// 		return Manufacturer.insertMany(manufacturer);
// 	})

// 	.then((newManufacturer) => {
// 		console.log('Created new manufacturers!', newManufacturer);
// 	})
// 	.catch(console.error)
// 	.finally(() => {
// 		process.exit();
// 	});
