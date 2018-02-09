// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// this tells node we are creating an express server
var app = express();
var PORT = process.env.PORT || 3000;

// sets up Express app to handle data parsing

// **** MAYBE CHANGE IT TO TRUE??? 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// ROUTER
//points our server to a series of "route" files.

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// starts our server
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});