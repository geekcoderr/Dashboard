import { Request, Response } from 'express';
import { readFileSync } from 'fs';
import { resolve } from 'path';

export const getTeams = (req: Request, res: Response) => {
    try {
        const filePath = resolve(__dirname, '../../data/team.json');
        const rawData = readFileSync(filePath, 'utf-8');
        const teams = JSON.parse(rawData);
        res.json(teams);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};
