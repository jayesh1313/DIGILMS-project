const mongoose = require("../connection");
const schema = new mongoose.Schema({
  title: String,
  duration: Number,
  pricing: String,
  trainer: { type: mongoose.Types.ObjectId, ref: "trainers" },
  description: String,
  category: String,
  prerequisites: Array,
  thumbnail: String,
  target: String,
  data: {},
  price: 0,
  reviews: Array,
  createdAt: { type: Date, default: new Date() },
});

const model = mongoose.model("courses", schema);

module.exports = model;
