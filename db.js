
const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
  domain: String,
  duration: Number,
  timestamp: Date,
});

module.exports = mongoose.model("Log", logSchema);
