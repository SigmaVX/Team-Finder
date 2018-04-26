// Import Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


// Sets Up Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Set Up Static Files
app.use(express.static("app/public"));


// SetsExpress For Data Parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
// =============================================================
require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);



// Start Server Listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
