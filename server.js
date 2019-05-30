// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================
require("dotenv").config();

var express = require("express");
var bodyParser = require("body-parser");

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port.
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));

// Setup the Express app to handle data parsing.
// Parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: "application/*+json" }));
// Parse into buffer
app.use(bodyParser.raw({ type: "application/vnd.custom-type" }));
// Parse an HTML body into a string
app.use(bodyParser.text({ type: "text/html" }));

// Require routes
require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
