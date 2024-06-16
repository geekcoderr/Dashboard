import express from 'express';
import { getProductLines } from '../controllers/productLineController';

const router = express.Router();

router.get('/product-lines', getProductLines);

export default router;
