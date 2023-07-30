const db = require("../models");
const sendToken = require("../utils/jwtToken");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");

exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  const { username, name, email, password, home_town } = req.body.user;
  const avatar = req.body.avatar;
  const user = await db.User.create({
    username,
    name,
    email,
    password,
    home_town,
    avatar,
  });

  sendToken(user, 201, res);
});

exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorHander("Please Enter & Password", 400));
  }

  const user = await db.User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHander("Invalid email or password", 401));
  }

  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHander("Invalid email or password", 401));
  }

  sendToken(user, 200, res);
});

exports.logoutUser = catchAsyncErrors(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  res.status(200).json({
    success: true,
    message: "Logged Out",
  });
});

exports.getProfileUser = catchAsyncErrors(async (req, res, next) => {
  const user = await db.User.findOne({ username: req.params.username });

  res.status(200).json({
    success: true,
    user,
  });
});

exports.getUser = catchAsyncErrors(async (req, res, next) => {
  const user = await db.User.findById(req.user.id);
  res.status(200).json({
    success: true,
    user,
  });
});
