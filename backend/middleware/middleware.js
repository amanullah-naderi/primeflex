// wa_ss24_primeflex/backend/middleware/middleware.js
const express = require('express');
const app = express();
const helmet = require('helmet');
const cors = require('cors');

app.use(helmet());
app.use(cors());
app.use(express.json());

module.exports = app;