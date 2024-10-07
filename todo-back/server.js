const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()

const app = express();
const db = process.env.DB,
    port = process.env.PORT || 5000;

app.use(cors());
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