const express = require("express");
//port number
const port = 5000;
//databse
const db = require("./config/mongoose");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

//redirecting routes
app.use("/", require("./routes"));

app.listen(port, function (err) {
  if (err) {
    console.log("error");
    return;
  }

  console.log(`server is running on ${port}`);
});
