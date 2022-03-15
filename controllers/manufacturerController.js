const express = require('express');
const router = express.Router();
const Manufacturer = require('../models/Manufacturer');

// List all discs/manufacturers
router.get('/', async (req, res, next) => {
	try {
		const manufacturer = await Manufacturer.find({});
		res.json(manufacturer);
	} catch (error) {
		next(error);
	}
});

// List a single show/person by id
router.get('/:id', async (req, res, next) => {
	try {
		const manufacturer = await Manufacturer.findById(req.params.id);
		if (manufacturer) {
			res.json(manufacturer);
		} else {
			res.sendStatus(404);
		}
	} catch (error) {
		next(error);
	}
});

// Create a show/person
router.post('/', async (req, res, next) => {
	try {
		const newManufacturer = await Manufacturer.create(req.body);
		res.status(201).json(newManufacturer);
	} catch (error) {
		next(error);
	}
});

// Update a single show/person by id
router.put('/:id', async (req, res, next) => {
	try {
		const manufacturerToUpdate = await Manufacturer.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true, overwrite: true }
		);
		res.json(manufacturerToUpdate);
	} catch (error) {
		next(error);
	}
});

// Delete a show/person by id
router.delete('/:id', async (req, res, next) => {
	try {
		const deletedManufacturer = await Manufacturer.findOneAndDelete({
			_id: req.params.id,
		});
		if (deletedManufacturer) {
			res.json(deletedManufacturer);
		} else {
			res.sendStatus(404);
		}
	} catch (error) {
		next(error);
	}
});
module.exports = router;
