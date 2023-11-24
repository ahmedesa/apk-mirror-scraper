const express = require("express");
const router = express.Router();
const apkController = require("../controllers/apk.controller");

router.route("/").get(apkController.index);

module.exports = router;