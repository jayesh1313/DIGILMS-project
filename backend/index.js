const express = require("express");
const app = express();
const port = 5000;

const cors = require("cors");

const userRouter = require("./routers/userRouter");
const trainerRouter = require("./routers/trainerRouter");
const courseRouter = require("./routers/courseRouter");
const utilRouter = require("./routers/util");

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

app.listen(port, () => {
  console.log("server started");
});
