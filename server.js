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
const jwt = require("jwt-then");

const PORT = 3001 || process.env.PORT;
const server = require("http").createServer(app);
const io = require("socket.io")(server);

io.use(async (socket, next) => {
  try {
    const token = socket.handshake.query.token;
    const payload = await jwt.verify(token, process.env.SECRET);
    socket.userId = payload.id;
    next();
  } catch (err) {
    console.log(err);
  }
});

io.on("connection", (socket) => {
  console.log(`${socket.userId} is connected`);

  socket.on("disconnect", () => {
    console.log(`${socket.userId} is disconnected`);
  });
});
server.listen(PORT);
