import dotenv from 'dotenv';
import express from 'express'; // or const express = require('express'); for CommonJS
import mongoose from 'mongoose';
import userRouter from './routes/user.route.js';
dotenv.config();

const app = express(); // Add this line to create the app instance

mongoose.connect(process.env.MONGO).then(() => {
  console.log('Connection to MongoDB is successful!!');
}).catch((err) => {
  console.log(err);
});

app.use("/api/user",userRouter);

// Start the server
const PORT = process.env.PORT || 3000; // Use an environment variable or default to 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


