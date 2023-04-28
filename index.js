const express = require("express");

const port = 5000;

const app = express();

//
app.use("/", require("./routes"));

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running server: ${port}`);
  }

  console.log(`Server is up and running on port : ${port}`);
});
