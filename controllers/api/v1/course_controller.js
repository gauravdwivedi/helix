const Course = require("../../../model/course");

module.exports.add = async function (req, res) {
  try {
    const course = await Course.create({
      title: req.body.title,
      description: req.body.description,
      duration: Number(req.body.duration),
    });

    return res.status(200).json({
      success: true,
      message: course,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports.allCourses = async function (req, res) {
  try {
    const courses = await Course.find({});

    console.log(courses);

    return res.status(200).json({
      success: true,
      message: courses,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
