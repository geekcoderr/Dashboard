"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var accountIndustryController_1 = require("../controllers/accountIndustryController");
var router = express_1.default.Router();
router.get('/account-industries', accountIndustryController_1.getAccountIndustries);
exports.default = router;
