import { readFileSync } from 'fs';
import { resolve } from 'path';
import { CustomerType } from '../models/customerType';

export const fetchCustomerTypes = (): CustomerType[] => {
    const filePath = resolve(__dirname, '../../data/customer-type.json');
    const rawData = readFileSync(filePath, 'utf-8');
    const customerTypes: CustomerType[] = JSON.parse(rawData);
    return customerTypes;
};
