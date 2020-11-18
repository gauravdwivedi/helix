const { Router } = require("express");
const router = Router();
const topicController = require("../../../controllers/api/v1/topic_controller");

router.post("/:id/add", topicController.add);
router.get("/:id/all-topics", topicController.allTopics);
module.exports = router;
