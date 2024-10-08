const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const morgan = require("morgan"); // Import Morgan
const fs = require("fs"); // File System module for logging to a file
const path = require("path"); // Path module to handle file paths
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger"); // Import Swagger spec
const cors = require("cors"); // Import CORS
const cron = require("node-cron"); // Import node-cron for scheduled jobs
require("dotenv").config();
const upload = require("./middleware/upload");
const axios = require("axios");

const bodyParser = require('body-parser');
require('dotenv').config()
// dotenv.config({ path: './env.development' });
const app = express();
const db = process.env.DB,
  port = process.env.PORT || 5000;

app.use(express.json());

// Enable CORS
app.use(cors()); // Allow all origins (you can configure specific origins if needed)

// Create a write stream (in append mode) for the log file
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "access.log"),
  { flags: "a" }
);

// Setup Morgan to log requests to the 'access.log' file and console
app.use(morgan("combined", { stream: accessLogStream })); // Logs in 'combined' format to file
app.use(morgan("dev")); // Logs to console (you can remove this if you only want file logs)

// Swagger route to serve the UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const routes = require("./routes/index");
app.use("/api/v1", routes);

cron.schedule("*/10 * * * * *", async () => {
  try {
    const response = await axios.post("http://localhost:5000/user/:id/todo", {
      data: {
        key: "value", 
      },
    });

    console.log(`API call successful: ${response.status} - ${response.statusText}`);
  } catch (error) {
    console.error(`Error during API call: ${error.message}`);
  }
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

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`); // server is listening on port 5000
});

// router.post("/upload", upload, (req, res) => {
//     if (!req.file) {
//       return res.status(400).send("No file uploaded.");
//     }
//     res.send(`File uploaded successfully: ${req.file.filename}`);
//   });
//     console.log(`Connected successfully to ${db}`);
// })
// .catch((err) => {
//     console.error(err);
// });
