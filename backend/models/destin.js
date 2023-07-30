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
  saved: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const destinSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "Please enter name of place"],
    maxlength: [50, "name of place cannot exceed 50 characters"],
    minlength: [3, "name of place should have minimum 3 characters"],
  },
  state: {
    type: String,
    required: [true, "Please enter the state"],
  },
  country: {
    type: String,
    required: [true, "Please enter the country"],
  },
  image: {
    type: String,
    default: "",
  },
  miniImage: {
    type: String,
    default: "",
  },
  desc: {
    type: String,
    required: [true, "Please enter description"],
  },
  inBlock: [inBlockSchema],
  ratings: {
    type: Number,
    default: 0,
  },
  tags: [String],
});

module.exports = mongoose.model("Destin", destinSchema);
