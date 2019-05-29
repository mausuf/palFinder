// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");
// var mime = require("mime");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  //Survey Page
  app.get("/survey", function(req, res) {
    res.json(path.join(__dirname, "../public/survey.html"));
    // res.setHeader("Content-Type", mime.load("text/css"));
  });

  // Home Page
  app.get("/", function(req, res) {
    res.json(path.join(__dirname, "../public/home.html"));
    // res.setHeader("Content-Type", mime.load("text/css"));
  });
};