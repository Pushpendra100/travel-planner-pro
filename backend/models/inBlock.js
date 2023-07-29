const mongoose = require("mongoose");

const inBlockSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter title"],
  },
  image: {
    type: String,
    default: "",
  },
  hearts: Number,
});

module.exports = mongoose.model("InBlock", inBlockSchema);
