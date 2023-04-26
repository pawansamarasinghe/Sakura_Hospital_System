const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  cid: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  nic: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("postdb", postSchema);
