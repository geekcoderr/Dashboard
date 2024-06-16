"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTeams = void 0;
var fs_1 = require("fs");
var path_1 = require("path");
var getTeams = function (req, res) {
    try {
        var filePath = (0, path_1.resolve)(__dirname, '../../data/team.json');
        var rawData = (0, fs_1.readFileSync)(filePath, 'utf-8');
        var teams = JSON.parse(rawData);
        res.json(teams);
    }
    catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.getTeams = getTeams;
