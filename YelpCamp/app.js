var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var pjson = require('./package.json');

var APP_VERSION = pjson.version;
var campgrounds = [
    {name: "Salmon Creek", image: "https://farm8.staticflickr.com/7258/7121861565_3f4957acb1.jpg"},
    {name: "Granite Hill", image: "https://pixabay.com/get/eb30b90e2af0033ed1584d05fb1d4e97e07ee3d21cac104497f5c17ba6e5b7b8_340.jpg"},
    {name: "Mountain Goat's Rest", image: "https://farm9.staticflickr.com/8471/8137270056_21d5be6f52.jpg"}
  ];

// Inits
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

// Requests
app.get("/", function(req, res) {
  res.render("landing");
});

app.get("/campgrounds", function(req, res) {
  res.render("campgrounds", {campgrounds, campgrounds});
});

app.post("/campgrounds", function(req, res) {
  var name = req.body["name"];
  var image = req.body["image-url"];
  var newCampground = {name: name, image: image};
  campgrounds.push(newCampground);
  res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
  res.render("new");
});

// Start listening for requests
app.listen(process.env.PORT, process.env.IP, function() {
  console.log("The YelpCamp version Server " + APP_VERSION + " has started...");
});