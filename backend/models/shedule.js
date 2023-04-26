const mongoose = require("mongoose");

const sheduleSchema = new mongoose.Schema({
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "postdb",
  },
  point: {
    type: String,
  },
  shift: {
    type: String,
  },
});

module.exports = mongoose.model("sheduledb", sheduleSchema);
