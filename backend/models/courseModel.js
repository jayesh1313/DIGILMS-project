const mongoose = require("../connection");
const schema = new mongoose.Schema({
  title: String,
  duration: String,
  pricing: String,
  trainer: String,
  description: String,
  createdAt: { type: Date, default: new Date() },
  isAdmin: { type: Boolean, default: false },
});

const model = mongoose.model("courses", schema);

module.exports = model;
