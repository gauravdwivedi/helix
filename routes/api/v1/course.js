const { Router } = require("express");
const router = Router();

const courseController = require("../../../controllers/api/v1/course_controller");

router.post("/add", courseController.add);
router.get("/all-courses",courseController.allCourses);

module.exports = router;
