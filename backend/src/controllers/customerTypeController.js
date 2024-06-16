"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCustomerTypes = void 0;
var customerTypeService_1 = require("../services/customerTypeService");
var getCustomerTypes = function (req, res) {
    try {
        var customerTypes = (0, customerTypeService_1.fetchCustomerTypes)();
        res.json(customerTypes);
    }
    catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.getCustomerTypes = getCustomerTypes;
