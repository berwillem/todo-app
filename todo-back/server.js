const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const morgan = require("morgan"); // Import Morgan
const fs = require("fs"); // File System module for logging to a file
const path = require("path"); // Path module to handle file paths
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger"); // Import Swagger spec
const cors = require("cors"); // Import CORS
require("dotenv").config();
const upload = require("./middleware/upload");
const axios = require("axios");
const routes = require("./routes/index");
const { rateLimiter } = require("./middleware/rateLimiter");

const app = express();

const db = process.env.DB;
const port = process.env.PORT || 5000;

// parse request
app.use(express.json());

// Enable CORS
app.use(cors());
app.use(express.json());

// Swagger route to serve the UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/api/v1", rateLimiter, routes);

//use logger
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "access.log"),
  {
    flags: "a",
    encoding: "utf8",
  }
);

// morgan middlware
app.use(
  morgan("common", {
    stream: accessLogStream,
    skip: (req, res) => res.statusCode < 500,
  })
);
mongoose

  .connect(db)
  .then(() => {
    console.log(`Connected successfully to ${db}`);
  })
  .catch((err) => {
    console.log(`connected successfully to MongoDB`);
  });

// Start the server
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
