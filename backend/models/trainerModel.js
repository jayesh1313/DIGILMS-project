const mongoose = require("../connection");
const schema = new mongoose.Schema({
  fullname: String,
  email: String,
  phone: String,
  password: String,
  exp: Number,
  qualification: String,

  design: String,
  createdAt: { type: Date, default: new Date() },
  thumbnail: String,
  isAdmin: { type: Boolean, default: false },
});

const model = mongoose.model("trainers", schema);

module.exports = model;
