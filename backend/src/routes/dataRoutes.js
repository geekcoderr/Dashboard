// backend/src/routes/dataRoutes.js

const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

// Route to get all data slices
router.get('/', dataController.getAllData);

module.exports = router;
