"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var body_parser_1 = require("body-parser");
var dotenv = require("dotenv");
var express_1 = require("express");
var accountIndustryRoutes_1 = require("./routes/accountIndustryRoutes");
var customerTypeRoutes_1 = require("./routes/customerTypeRoutes");
var productLineRoutes_1 = require("./routes/productLineRoutes");
var teamRoutes_1 = require("./routes/teamRoutes");
dotenv.config();
var app = (0, express_1.default)();
var PORT = process.env.PORT || 5000;
// Middleware
app.use(body_parser_1.default.json());
// Routes
app.use('/api', accountIndustryRoutes_1.default);
app.use('/api', customerTypeRoutes_1.default);
app.use('/api', productLineRoutes_1.default);
app.use('/api', teamRoutes_1.default);
// Start the server
app.listen(PORT, function () {
    console.log("Server is running on http://localhost:".concat(PORT));
});
