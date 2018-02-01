var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;


app.get("/", function(req, res) {
  res.send("Welcome");
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});