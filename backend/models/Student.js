const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: String,
  email: String,
  verified: Boolean
});

module.exports = mongoose.model("Student", StudentSchema);
