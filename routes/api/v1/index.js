const { Router } = require("express");
const router = Router();

router.use("/course", require("./course"));
router.use("/topic", require("./topic"));

module.exports = router;
