const sendToken = (user, statusCode, res) => {
  const token = user.getJWTToken();

  expiryDate = new Date(
    Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
  );
  const options = {
    expires: expiryDate,
    //    secure:true, //use when in production
    httpOnly: true,
  };

  //    if(process.env.NODE_ENV=="production") options.secure = true;

  user.password = undefined;
  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    token,
  });
};

module.exports = sendToken;
