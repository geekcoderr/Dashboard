"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchTeams = void 0;
var fs_1 = require("fs");
var path_1 = require("path");
var fetchTeams = function () {
    var filePath = (0, path_1.resolve)(__dirname, '../../data/team.json');
    var rawData = (0, fs_1.readFileSync)(filePath, 'utf-8');
    var teams = JSON.parse(rawData);
    return teams;
};
exports.fetchTeams = fetchTeams;
