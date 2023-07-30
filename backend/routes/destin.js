const router = require("express").Router();
const { getAllDestins, createDestin, getDestin } = require("../controllers");

router.route("/getAllDestins").get(getAllDestins);
router.route("/:destin").get(getDestin);
router.route("/create-destin").post(createDestin);

module.exports = router;
