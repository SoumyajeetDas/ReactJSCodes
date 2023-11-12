const express = require('express');
const { getFlavours } = require('../controller/flavourController');

const router = express.Router();

router.get('/scoops',getFlavours);

module.exports = router;