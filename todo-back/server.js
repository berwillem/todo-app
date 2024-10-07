const express = require('express');
const mongoose = require('mongoose')
require('dotenv').config()
const upload = require("./middleware/upload"); 


const app = express();
const db = process.env.DB,
    port = process.env.PORT || 5000;


app.use(express.json())
const routes = require("./routes/index")
app.use("/api/v1", routes)

mongoose
.connect(db)
.then(() => {
    console.log(`connected successfully to ${db}`); 
    
})
.catch(err => {
    console.error(err);
})


app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);  // server is listening on port 5000
});


// Define your upload route
router.post("/upload", upload, (req, res) => {
    // Handle the uploaded file
    if (!req.file) {
      return res.status(400).send("No file uploaded.");
    }
    res.send(`File uploaded successfully: ${req.file.filename}`);
  });
