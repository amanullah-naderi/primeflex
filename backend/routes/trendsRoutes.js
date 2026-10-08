// wa_ss24_primeflex/backend/routes/trendsRoutes.js
const express = require('express');
const router = express.Router();
const {getAllTrends} = require("../controllers/trendsController");

router.get('/api/trends', getAllTrends);

module.exports = router;