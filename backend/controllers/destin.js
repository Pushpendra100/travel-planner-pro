const db = require("../models");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const ErrorHander = require("../utils/errorhander");

exports.getAllDestins = catchAsyncErrors(async (req, res, next) => {
  const destins = await db.Destin.find({});
  res.status(200).json(destins);
});

exports.createDestin = catchAsyncErrors(async (req, res, next) => {
  const destinDetails = req.body;
  const destin = await db.Destin.create(destinDetails);
  res.status(201).json(destin);
});

exports.getDestin = catchAsyncErrors(async (req, res, next) => {
  console.log(req.params.destin);
  const destin = await db.Destin.findOne({ name: `${req.params.destin}` });
  if (!destin) {
    return next(new ErrorHander("Destin not found", 404));
  }
  console.log(destin);
  res.status(200).json(destin);
});
