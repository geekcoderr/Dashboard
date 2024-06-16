import { readFileSync } from 'fs';
import { resolve } from 'path';
import { AccountIndustry } from '../models/accountIndustry';

export const fetchAccountIndustries = (): AccountIndustry[] => {
    const filePath = resolve(__dirname, '../../data/account-industry.json');
    const rawData = readFileSync(filePath, 'utf-8');
    const accountIndustries: AccountIndustry[] = JSON.parse(rawData);
    return accountIndustries;
};
