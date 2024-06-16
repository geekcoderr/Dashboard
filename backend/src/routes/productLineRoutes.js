"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var productLineController_1 = require("../controllers/productLineController");
var router = express_1.default.Router();
router.get('/product-lines', productLineController_1.getProductLines);
exports.default = router;
