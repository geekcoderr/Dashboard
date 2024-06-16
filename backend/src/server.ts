import bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import express, { Application } from 'express';
import accountIndustryRoutes from './routes/accountIndustryRoutes';
import customerTypeRoutes from './routes/customerTypeRoutes';
import productLineRoutes from './routes/productLineRoutes';
import teamRoutes from './routes/teamRoutes';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', accountIndustryRoutes);
app.use('/api', customerTypeRoutes);
app.use('/api', productLineRoutes);
app.use('/api', teamRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
