import { Request, Response } from 'express';
import { fetchCustomerTypes } from '../services/customerTypeService';

export const getCustomerTypes = (req: Request, res: Response) => {
    try {
        const customerTypes = fetchCustomerTypes();
        res.json(customerTypes);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};
