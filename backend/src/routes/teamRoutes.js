"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var teamController_1 = require("../controllers/teamController");
var router = express_1.default.Router();
router.get('/teams', teamController_1.getTeams);
exports.default = router;
