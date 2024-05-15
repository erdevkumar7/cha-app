const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors"); // Import the cors middleware
const app = express();
app.use(cors()); // Use cors middleware

const server = http.createServer(app);
const io = socketIo(server, {
  cors: { origin: "*", methods: ["GET", "POST"] },
});

app.get("/", (req, res) => {
  res.json({ data: "user" });
});
// Define Socket.IO event handlers
io.on("connection", (socket) => {
  // console.log(socket.id, "user connected");

  // Handle 'message' event
  socket.on("message", (data) => {
    console.log("Message received:", data);
   
    // Broadcast the message to all connected clients
    // io.emit("message", data);
  });

  // Handle disconnection
  // socket.on("disconnect", () => {
  //   console.log("A user disconnected");
  // });
});

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});