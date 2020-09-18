var express = require("express");
var pug = require("pug");
var app = express();

// Start the web server on port 3000
app.listen(3000);

app.set("views", "views");
app.set("view engine", "pug");

app.get("/", function(req, res) {

  res.render("layout");
});