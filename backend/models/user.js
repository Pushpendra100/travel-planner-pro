const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const dCardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter title"],
  },
  desc: {
    type: String,
    maxlength: [300, "description cannot exceed 300 characters"],
  },
  inBlock: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "InBlock",
    },
  ],
});

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: [true, "Please enter your username"],
    maxlength: [30, "Username cannot exceed 30 characters"],
    minlength: [4, "Username should have minimum 4 characters"],
  },
  name: {
    type: String,
    required: [true, "Please enter your name"],
    maxlength: [30, "Name cannot exceed 30 characters"],
    minlength: [4, "Name should have minimum 4 characters"],
  },
  image: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Please enter your email"],
    validate: [validator.isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
    minlength: [8, "password should have minimum 8 characters"],
    select: false,
  },
  dCardCreated: [dCardSchema],
  savedInBlock: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "InBlock",
    },
  ],
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  this.password = await bcrypt.hash(this.password, 12);
});

userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
