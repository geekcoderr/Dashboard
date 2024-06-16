import express from 'express';
import { getAccountIndustries } from '../controllers/accountIndustryController';

const router = express.Router();

router.get('/account-industries', getAccountIndustries);

export default router;
