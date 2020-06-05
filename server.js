const dotenv = require("dotenv");
dotenv.config();


const http = require('http');
const express = require('express');
const mongoose = require('mongoose');

// connect to database
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', (err) => {
    console.log(`Mongoose connection error : ${err.message}`);
});

db.once('open', () => {
    console.log('DB connected');
});

// models
require('./models/User');
require('./models/Chatroom');
require('./models/Message');



const app = express();
const server = http.createServer(app);

const PORT = 3000 || process.env.PORT;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));