const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const bodyParser = require('body-parser');
require('dotenv').config()
// dotenv.config({ path: './env.development' });
const app = express();
const db = process.env.DB,
port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json())
const routes = require("./routes/index")
app.use("/api/v1", routes)


mongoose
.connect(db)
.then(() => {
    console.log(`connected successfully to DB`); 
    
})
.catch(err => {
    console.error(err);
})


app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);  // server is listening on port 5000
});