const mongoose = require("../connection");
const schema = new mongoose.Schema({
  Title: String,
  Duration: String,
  Priceing: String,
  Trainner: String,
  Discription: String,
  createdAt: { type: Date, default: new Date() },
  isAdmin: { type: Boolean, default: false },
});

const model = mongoose.model("courses", schema);

module.exports = model;
