require("dotenv").config()

const mongoose = require('mongoose');

const connectionString = process.env.MONGODB_URL;
// Establish connection to DB
mongoose.connect(connectionString);
// Check connection
mongoose.connection
.on('connected', () => console.log('Connection Successful!'))
.on('disconnected', () => console.log('disconnected!!!'))
.on('error', (error) => console.log(error))
