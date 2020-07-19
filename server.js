const socket = require("socket.io");
const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");

// connect to database
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (err) => {
  console.log(`Mongoose connection error : ${err.message}`);
});

db.once("open", () => {
  console.log("DB connected");
});

// models
require("./models/User");
require("./models/Chatroom");
require("./models/Message");

const app = require("./app");

const PORT = 3001 || process.env.PORT;

const server = app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
const io = socket(server);

io.on("connection", (socket) => {
  console.log("a user connected");
});
