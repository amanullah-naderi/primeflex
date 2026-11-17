// wa_ss24_primeflex/backend/middleware/middlewareAuth.js
const jwt = require('jsonwebtoken');
const User = require('../models/authModel');

const requireAuth = async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ error: 'Authorization token required' });
    }

    const token = authorization.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded._id);
        if (!user) throw new Error('User not found');
        req.user = user;
        next();
    } catch (error) {
        console.error('Authentication error:', error);
        res.status(401).json({ error: 'Request is not authorized' });
    }
};

module.exports = requireAuth;