const mongoose = require("../connection");
const schema = new mongoose.Schema({
  name: String,
  username: String,
  email: String,
  password: String,
  enrolled: [{ type: mongoose.Types.ObjectId, ref: "courses" }],
  points: { type: Number, default: 0 },
  createdAt: { type: Date, default: new Date() },
});

const model = mongoose.model("users", schema);

module.exports = model;
