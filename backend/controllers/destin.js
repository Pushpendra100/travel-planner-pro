const db = require("../models");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");

exports.getAllDestins = catchAsyncErrors(async (req, res, next) => {
  const destins = await db.Destin.find({});
  res.status(200).json(destins);
});

exports.createDestin = catchAsyncErrors(async (req, res, next) => {
  const destinDetails = req.body;
  console.log(req.body);
  const destin = await db.Destin.create(destinDetails);
  res.status(201).json(destin);
});
