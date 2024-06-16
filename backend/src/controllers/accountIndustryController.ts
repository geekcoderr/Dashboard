import { Request, Response } from 'express';
import { readFileSync } from 'fs';
import { resolve } from 'path';

export const getAccountIndustries = (req: Request, res: Response) => {
    try {
        const filePath = resolve(__dirname, '../../data/account-industry.json');
        const rawData = readFileSync(filePath, 'utf-8');
        const accountIndustries = JSON.parse(rawData);
        res.json(accountIndustries);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};
