// backend/src/controllers/dataController.js

const path = require('path');
const fs = require('fs');

const dataDir = path.join(__dirname, '../data');

const getAllData = (req, res) => {
  try {
    const customerType = require(path.join(dataDir, 'customer-type.json'));
    const accountIndustry = require(path.join(dataDir, 'account-industry.json'));
    const team = require(path.join(dataDir, 'team.json'));
    const productLine = require(path.join(dataDir, 'product-line.json'));

    res.json({
      customerType,
      accountIndustry,
      team,
      productLine
    });
  } catch (error) {
    console.error('Error reading data files:', error);
    res.status(500).json({ error: 'Failed to read data files' });
  }
};

module.exports = {
  getAllData
};
