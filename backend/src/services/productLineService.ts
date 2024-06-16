import { readFileSync } from 'fs';
import { resolve } from 'path';
import { ProductLine } from '../models/productLine';

export const fetchProductLines = (): ProductLine[] => {
    const filePath = resolve(__dirname, '../../data/product-line.json');
    const rawData = readFileSync(filePath, 'utf-8');
    const productLines: ProductLine[] = JSON.parse(rawData);
    return productLines;
};
