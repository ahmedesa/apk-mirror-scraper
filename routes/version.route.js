const express = require("express");
const router = express.Router();
const versionController = require("../controllers/version.controller");

router.route("/").get(versionController.index);
router.route("/:id").get(versionController.show);
router.route("/:id").delete(versionController.delete);
router.route("/:id").put(versionController.update);

module.exports = router;