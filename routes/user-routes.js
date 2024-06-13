import express from 'express';
import User from '../models/user.js';


const router = express.Router();

// Create a new user
router.post('/', async (req, res) => {
    const newUser = req.body;

    try{
        const user = await User.create(newUser);
        res.status(200).json(user);
    } catch (error) {
        if (error.name === 'ValidationError') {
            // Mongoose validation error
            res.status(400).json({ error: error.message });
        } else {
            // Other error (e.g. network issues, database error)
            console.log(error);
            res.status(500).json({ error: 'Something went wrong!' });
        }
    }
});

// Get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong!' });
    }
});

// Get a user by ID
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong!' });
    }
});

// Delete a user by ID
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await User.findByIdAndDelete(id);
        if (result.deletedCount === 0) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong!' });
    }
});

export default router;