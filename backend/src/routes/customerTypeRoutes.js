"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var customerTypeController_1 = require("../controllers/customerTypeController");
var router = express_1.default.Router();
router.get('/customer-types', customerTypeController_1.getCustomerTypes);
exports.default = router;
