const dotenv = require("dotenv");
dotenv.config();


const http = require('http');
const express = require('express');
const mongoose = require('mongoose');



const app = express();
const server = http.createServer(app);

const PORT = 3000 || process.env.PORT;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));