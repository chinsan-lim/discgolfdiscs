const express = require('express');
const router = express.Router();
const Disc = require('../models/Disc');

// List all discs/manufacturer
router.get('/', async (req, res, next) => {
	try {
		const disc = await Disc.find({});
		res.json(disc);
	} catch (error) {
		next(error);
	}
});

// List a single discs/manufacturer by id
router.get('/:id', async (req, res, next) => {
	try {
		const disc = await Disc.findById(req.params.id);
		if (disc) {
			res.json(disc);
		} else {
			res.sendStatus(404);
		}
	} catch (error) {
		next(error);
	}
});

// Create a discs/manufacturer
router.post('/', async (req, res, next) => {
	try {
		const newDisc = await Disc.create(req.body);
		res.status(201).json(newDisc);
	} catch (error) {
		next(error);
	}
});

// Update a single discs/manufacturer by id
router.put('/:id', async (req, res, next) => {
	try {
		const discToUpdate = await Disc.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			overwrite: true,
		});
		res.json(discToUpdate);
	} catch (error) {
		next(error);
	}
});

// Delete a discs/manufacturer by id
router.delete('/:id', async (req, res, next) => {
	try {
		const deletedDisc = await Disc.findOneAndDelete({
			_id: req.params.id,
		});
		if (deletedDisc) {
			res.json(deletedDisc);
		} else {
			res.sendStatus(404);
		}
	} catch (error) {
		next(error);
	}
});
module.exports = router;
