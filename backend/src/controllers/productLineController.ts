import { Request, Response } from 'express';
import { readFileSync } from 'fs';
import { resolve } from 'path';

export const getProductLines = (req: Request, res: Response) => {
    try {
        const filePath = resolve(__dirname, '../../data/product-line.json');
        const rawData = readFileSync(filePath, 'utf-8');
        const productLines = JSON.parse(rawData);
        res.json(productLines);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};
