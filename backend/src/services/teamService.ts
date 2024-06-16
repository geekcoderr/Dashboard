import { readFileSync } from 'fs';
import { resolve } from 'path';
import { Team } from '../models/team';

export const fetchTeams = (): Team[] => {
    const filePath = resolve(__dirname, '../../data/team.json');
    const rawData = readFileSync(filePath, 'utf-8');
    const teams: Team[] = JSON.parse(rawData);
    return teams;
};
