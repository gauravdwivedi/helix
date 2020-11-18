const mongoose = require("mongoose");
const { Schema } = mongoose;

const topicSchema = new Schema(
  {
    
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    course: {
      type: Schema.Types.ObjectId,
      ref: "Course",
    },
  },
  { timestamps: true }
);

const Topic = mongoose.model("Topic", topicSchema);

module.exports = Topic;
