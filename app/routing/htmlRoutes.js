// Dependencies
var path = require("path");

//Routes
module.exports = function(app) {

	// routes user to survey HTML page
	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	});

	// routes user to home HTML page 
//**** THIS MAY NEED TO BE CHANGED
	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname, "..public/home.html"));
	});
};