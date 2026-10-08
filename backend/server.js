// wa_ss24_primeflex/backend/server.js
import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/authRoutes';
const filmRoutes = require("./routes/filmRoutes");
const seriesRoutes = require("./routes/seriesRoutes");
const ratingRoutes = require('./routes/ratingRoutes');
const trendsRoutes = require('./routes/trendsRoutes');
const searchRoutes = require("./routes/searchRoutes");
const userRatingRoutes = require("./routes/userRatingRoutes");
const errorHandler = require("./middleware/errorHandler");
const { authenticateUser } = require("./middleware/MiddlewareAuth");
const logger = require("./middleware/logger");
const cors = require("cors");
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(errorHandler);

app.use(authenticateUser);

app.use(logger);

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'PrimeFlex API',
            version: '1.0.0',
            description: 'API documentation for PrimeFlex backend',
            contact: {
                name: 'admin',
                email: 'admin@example.com'
            }
        },
        servers: [
            {
                url: `http://localhost:${process.env.PORT || 10035}`,
                description: 'Development server'
            }
        ]
    },
    apis: ['./routes/*.js']
};

const specs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
    .then(() => {
        console.log('Connected to database');
        // Start server
        app.listen(process.env.PORT, () => {
            console.log('Server listening on port', process.env.PORT);
        });
    })
    .catch(error => {
        console.error('Failed to connect to database:', error);
    });

app.use('/api/auth', authRoutes);
app.use("/api/films", filmRoutes);
app.use("/api/series", seriesRoutes);
app.use('/api/ratings', ratingRoutes);
app.use('/api/trends', trendsRoutes);
app.use("/api/search", searchRoutes);
app.use("/api/user-ratings", userRatingRoutes);

app.use((req, res) => {
    res.status(404).json({ error: 'Not Found' });
});

export default app;