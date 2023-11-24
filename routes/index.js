const express = require("express");
const router = express.Router();

const apkRouter = require("./apk.route");

router.use("/apks", apkRouter);

module.exports = router;