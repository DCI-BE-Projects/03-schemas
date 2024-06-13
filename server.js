import express from 'express';
import db from './db.js';
import productRoutes from './routes/product-routes.js';
import userRoutes from './routes/user-routes.js';

const app = express();

app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

const startServer = async () => {
    const port = process.env.PORT || 4000;

    try {
        await db.connect();
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.log('Could not start server', error);
    }
};

startServer();