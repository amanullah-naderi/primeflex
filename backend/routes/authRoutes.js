// wa_ss24_primeflex/backend/routes/authRoutes.js
const express = require('express');
const { loginUser, signupUser, deleteUser, getUsers } = require('../controllers/authController');
const requireAuth = require('../middleware/middlewareAuth');

const router = express.Router();

router.post('/login', loginUser);
router.post('/signup', signupUser);
router.get('/users', requireAuth, getUsers);
router.delete('/user/:id', requireAuth, deleteUser);

module.exports = router;