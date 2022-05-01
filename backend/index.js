const express = require("express");
const app = express();
const port = 5000;

const cors = require("cors");

const userRouter = require("./routers/userRouter");
const trainerRouter = require("./routers/trainerRouter");
const courseRouter = require("./routers/courseRouter");
const utilRouter = require("./routers/util");

const { createServer } = require("http");
const { Server } = require("socket.io");

let trainers = {};

// create a new server and connect it with express
const httpServer = createServer(app);

// create a socket.io instance and allow cors
const io = new Server(httpServer, {
  cors: { origin: ["http://localhost:3000"] },
});

// receive the connection event sent by client
io.on("connection", (socket) => {
  console.log("client connected");

  socket.on("addtrainer", (id) => {
    trainers[id] = socket.id;
    // console.log(trainers);
  });

  socket.on("checktrainer", (id) => {
    socket.emit("checktrainerfromserver", {
      status: "online",
      socketId: trainers[id],
    });
  });

  socket.on("sendstudent", (data) => {
    // console.log(data);
    data.sent = false;
    socket.broadcast.emit("recmsg", data);
  });
  socket.on("sendmsg", (data) => {
    console.log(data);
    data.sent = false;
    socket.to(data.socketId).emit("recmsg", data);
  });
});

app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);
app.use(express.json());

app.use(express.static("./static"));
const stripe_sk = require("./config").stripe_sk;
const stripe = require("stripe")(stripe_sk);

app.post("/create-payment-intent", async (req, res) => {
  const data = req.body;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: data.amount,
    currency: "inr",
  });
  res.status(200).json(paymentIntent);
});

app.use("/user", userRouter);
app.use("/trainer", trainerRouter);
app.use("/course", courseRouter);
app.use("/util", utilRouter);

httpServer.listen(port, () => {
  console.log("server started");
});
