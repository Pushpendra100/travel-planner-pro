const router = require("express").Router();
const { getAllDestins, createDestin } = require("../controllers");

router.route("/getAllDestins").get(getAllDestins);
router.route("/create-destin").post(createDestin);

module.exports = router;
