import express from 'express';
import Product from '../models/product.js';

const router = express.Router();

// Create a new product
router.post('/', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get a product by ID
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete a product by ID
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Product.deleteOne({ _id: id });
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete many products
router.delete('/', async (req, res) => {
    try {
        const { filter } = req.body;
        console.log(filter);
        const result = await Product.find(filter);
        // res.status(200).json({
        //     message: 'Products deleted successfully',
        //     deletedCount: result.deletedCount,
        // });
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;