// swagger.js
const swaggerJSDoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',  // Specify the OpenAPI version
        info: {
            title: 'Your API Title',  // Title of the documentation
            version: '1.0.0',         // Version of your API
            description: 'API documentation for your project', // Description
        },
        servers: [
            {
                url: 'http://localhost:5000/api/v1',  // Base URL of your API
            },
        ],
    },
    apis: ['./routes/*.js'], // Path to the API docs (use routes folder where routes are defined)
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
