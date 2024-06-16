"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchAccountIndustries = void 0;
var fs_1 = require("fs");
var path_1 = require("path");
var fetchAccountIndustries = function () {
    var filePath = (0, path_1.resolve)(__dirname, '../../data/account-industry.json');
    var rawData = (0, fs_1.readFileSync)(filePath, 'utf-8');
    var accountIndustries = JSON.parse(rawData);
    return accountIndustries;
};
exports.fetchAccountIndustries = fetchAccountIndustries;
