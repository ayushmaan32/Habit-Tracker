const express = require("express");

const port = 5000;

const app = express();

const expressLayouts = require("express-ejs-layouts");

const db = require("./config/mongoose");
const bodyParser = require("body-parser");

// app.use(express.urlencoded());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("./assets"));

app.use(expressLayouts);

// extract styles and scripts from sub Pages into the layout
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

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
