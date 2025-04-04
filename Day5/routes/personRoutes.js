const express = require('express');
const router = express.Router();
const Person = require('../models/person'); // Ensure correct path

// Create Person
router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newPerson = new Person(data);
        const savedPerson = await newPerson.save();
        console.log("Person data stored successfully");
        res.status(200).json(savedPerson);
    } catch (err) {
        console.log('Error:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Get All Persons
router.get('/', async (req, res) => {
    try {
        const allPersons = await Person.find();
        if (allPersons.length > 0) {
            res.status(200).json(allPersons);
        } else {
            res.status(200).json({ message: 'No records found' });
        }
    } catch (err) {
        console.log('Error:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Get Person by Work Type
router.get('/:workType', async (req, res) => {
    try {
        const workType = req.params.workType;
        const personsInWorkField = await Person.find({ work: workType });

        console.log("Response fetched");
        res.status(200).json(personsInWorkField);
    } catch (error) {
        console.log('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Update Person by ID
router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;

        const response = await Person.findByIdAndUpdate(id, updatedData, {
            new: true,
            runValidators: true,
        });

        if (!response) {
            console.log("Person not found");
            return res.status(404).json({ error: "Person not found" });
        }

        console.log('Data updated');
        res.status(200).json(response);
    } catch (error) {
        console.log('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Delete Person by ID
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const deletedData = await Person.findByIdAndDelete(id);

        if (!deletedData) {
            console.log("Person not found");
            return res.status(404).json({ error: "Person not found" });
        }

        console.log("Data deleted successfully");
        res.status(200).json({ success: "Data deleted successfully" });
    } catch (error) {
        console.log('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
