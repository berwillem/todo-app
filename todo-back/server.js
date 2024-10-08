const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');  // Import Morgan
const fs = require('fs');  // File System module for logging to a file
const path = require('path');  // Path module to handle file paths
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');  // Import Swagger spec
const cors = require('cors');  // Import CORS
const cron = require('node-cron');  // Import node-cron for scheduled jobs
require('dotenv').config();

const app = express();
const db = process.env.DB,
    port = process.env.PORT || 5000;

app.use(express.json());

// Enable CORS
app.use(cors());  // Allow all origins (you can configure specific origins if needed)

// Create a write stream (in append mode) for the log file
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });

// Setup Morgan to log requests to the 'access.log' file and console
app.use(morgan('combined', { stream: accessLogStream }));  // Logs in 'combined' format to file
app.use(morgan('dev'));  // Logs to console (you can remove this if you only want file logs)

// Swagger route to serve the UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const routes = require('./routes/index');
app.use('/api/v1', routes);

// Cron Job to log every minute
cron.schedule('*/5 * * * * *', () => {
    const now = new Date();
    const logMessage = `Cron job executed at ${now}\n`;
    console.log(logMessage);  // Log to console
    fs.appendFile(path.join(__dirname, 'access.log'), logMessage, (err) => {
        if (err) throw err;
    });
    console.log('logged to access.log file.');
});

mongoose
.connect(db)
.then(() => {
    console.log(`Connected successfully to ${db}`);
})
.catch((err) => {
  .connect(db)
  .then(() => {
    console.log(`connected successfully to MongoDB`);
  })
  .catch((err) => {
    console.error(err);
});

app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
});
