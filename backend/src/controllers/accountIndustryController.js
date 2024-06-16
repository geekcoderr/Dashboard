"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAccountIndustries = void 0;
var fs_1 = require("fs");
var path_1 = require("path");
var getAccountIndustries = function (req, res) {
    try {
        var filePath = (0, path_1.resolve)(__dirname, '../../data/account-industry.json');
        var rawData = (0, fs_1.readFileSync)(filePath, 'utf-8');
        var accountIndustries = JSON.parse(rawData);
        res.json(accountIndustries);
    }
    catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.getAccountIndustries = getAccountIndustries;
