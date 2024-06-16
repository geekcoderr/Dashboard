import express from 'express';
import { getCustomerTypes } from '../controllers/customerTypeController';

const router = express.Router();

router.get('/customer-types', getCustomerTypes);

export default router;
