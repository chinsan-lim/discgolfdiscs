const express = require('express');
const router = express.Router();
const Manufacturer = require('../models/Manufacturer');

//show all manufacturers
// localhost:8000/manufacturers
router.get('/', async (req, res, next) => {
	try {
		const manufacturer = await Manufacturer.find({});
		res.json(manufacturer);
	} catch (err) {
		next(err);
	}
});

//list a single manufacturer by name
// localhost:8000/manufacturers/innova

router.get('/:name', async (req, res, next) => {
	try {
	} catch (err) {
		next(err);
	}
});
