
let mongoose = require("mongoose");

const Administrator = mongoose.Schema({
  userCode: String,
  password: String,
  date: { type: Date, default: Date.now }
});

module.exports = Administrator;