"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchCustomerTypes = void 0;
var fs_1 = require("fs");
var path_1 = require("path");
var fetchCustomerTypes = function () {
    var filePath = (0, path_1.resolve)(__dirname, '../../data/customer-type.json');
    var rawData = (0, fs_1.readFileSync)(filePath, 'utf-8');
    var customerTypes = JSON.parse(rawData);
    return customerTypes;
};
exports.fetchCustomerTypes = fetchCustomerTypes;
