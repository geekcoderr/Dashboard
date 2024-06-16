"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductLines = void 0;
var fs_1 = require("fs");
var path_1 = require("path");
var getProductLines = function (req, res) {
    try {
        var filePath = (0, path_1.resolve)(__dirname, '../../data/product-line.json');
        var rawData = (0, fs_1.readFileSync)(filePath, 'utf-8');
        var productLines = JSON.parse(rawData);
        res.json(productLines);
    }
    catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.getProductLines = getProductLines;
