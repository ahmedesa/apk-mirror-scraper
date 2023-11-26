const express = require("express");
const router = express.Router();

const versionRouter = require("./version.route");

router.use("/versions", versionRouter);

module.exports = router;