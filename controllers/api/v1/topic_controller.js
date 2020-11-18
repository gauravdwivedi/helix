const Topic = require("../../../model/topic");

module.exports.add = async function (req, res) {
  try {
    const topic = await Topic.create({
      title: req.body.title,
      description: req.body.description,
      course: req.params.id,
    });

    return res.status(200).json({
      success: true,
      message: topic,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports.allTopics = async function (req, res) {
  try {
    const topics = Topic.find({ course: req.params.id });
    topics.exec(function (err, rep) {
      return res.send(rep);
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
