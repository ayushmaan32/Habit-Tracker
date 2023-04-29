const express = require("express");

const port = 5000;

const app = express();

const expressLayouts = require("express-ejs-layouts");

app.use(expressLayouts);

//use express router
app.use("/", require("./routes"));

// set up ejs view engine
app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running server: ${port}`);
  }

  console.log(`Server is up and running on port : ${port}`);
});
