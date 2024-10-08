// Import necessary packages
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');
const cors = require('cors');
const cron = require('node-cron');
require('dotenv').config();

const rateLimiter = require('./middlewares/rateLimiter');
const app = express();
const db = process.env.DB;
const port = process.env.PORT || 5000;

// Enable CORS
app.use(cors());

// Create a write stream (in append mode) for the log file
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });

// Setup Morgan to log requests to the 'access.log' file and console
app.use(morgan('combined', { stream: accessLogStream }))
app.use(morgan('dev'));  // Logs to console

// Swagger route to serve the UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));



// Apply rate limiter to API routes
const routes = require('./routes/index');
app.use('/api/v1', rateLimiter, routes);

// Cron Job to log every 5 seconds
cron.schedule('*/5 * * * * *', () => {
    const now = new Date();
    const logMessage = `Cron job executed at ${now}\n`;
    fs.appendFile(path.join(__dirname, 'access.log'), logMessage, (err) => {
        if (err) throw err;
    });
});

// Connect to MongoDB
mongoose
    .connect(db)
    .then(() => {
        console.log(`Connected successfully to ${db}`);
    })
    .catch((err) => {
        console.error(err);
    });

// Start the server
app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
});
