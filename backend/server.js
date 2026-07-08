const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const notificationRoutes = require('./routes/notificationRoutes');
const triggerRoutes = require('./routes/triggerRoutes');

dotenv.config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/notifications", notificationRoutes);
app.use("/demo", triggerRoutes);

const PORT = process.env.PORT || 5005;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});