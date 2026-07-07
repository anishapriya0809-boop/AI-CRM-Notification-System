const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./config/db');

dotenv.config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5005;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});