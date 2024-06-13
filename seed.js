import db from './db.js';
import dummyData from './dummy-data.js';
import Product from './models/product.js';

const seedData = async () => {
    try {
        await db.connect();
        await Product.deleteMany(); // Clear the existing data
        await Product.insertMany(dummyData); // Insert new data
        console.log('Database seeded successfully');
    } catch (error) {
        console.error('Error seeding database', error.message);
    } finally {
        await db.close();
    }
};

seedData();