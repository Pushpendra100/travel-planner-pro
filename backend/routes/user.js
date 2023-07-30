const router = require("express").Router();
const {
  registerUser,
  loginUser,
  logoutUser,
  getProfileUser,
  getUser,
} = require("../controllers");
const { isAuthenticatedUser } = require("../middlewares/auth");

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logoutUser);
router.route("/profileUser/:username").get(getProfileUser);
router.route("/me").get(isAuthenticatedUser, getUser);

module.exports = router;
