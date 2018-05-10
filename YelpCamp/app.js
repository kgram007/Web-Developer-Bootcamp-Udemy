var express     = require("express");
var app         = express();
var bodyParser  = require("body-parser");
var mongoose    = require("mongoose");
var pjson       = require('./package.json');

var APP_VERSION = pjson.version;
var initSampleDataDB = false;
var sampleCampgrounds = [
  // {
  //   name: "Salmon Creek",
  //   image: "https://farm8.staticflickr.com/7258/7121861565_3f4957acb1.jpg",
  //   description: ""
  // },
  {
    name: "Granite Hill",
    image: "https://pixabay.com/get/eb30b90e2af0033ed1584d05fb1d4e97e07ee3d21cac104497f5c17ba6e5b7b8_340.jpg",
    description: "This is a huge granite hill. No bathrooms. No water. Beautiful granite!"
  },
  // {
  //   name: "Mountain Goat's Rest",
  //   image: "https://farm9.staticflickr.com/8471/8137270056_21d5be6f52.jpg"
  // },
];

// Inits
// Express
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
// Mongoose
mongoose.connect("mongodb://localhost/yelp_camp");

// Mongoose Schema Setup
var campgroundSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String
});
var Campground = mongoose.model("Campground", campgroundSchema);

// Add sample data to DB
if(initSampleDataDB) {
  sampleCampgrounds.forEach(function(sampleCampground) {
    Campground.create(
      sampleCampground,
      function(err, campground) {
        if(err) {
          console.log(err);
        } else {
          console.log("NEWLY CREATED CAMPGROUND: ");
          console.log(campground);
        }
      });
  });
}


app.get("/", function(req, res) {
  res.render("landing");
});

// RESTful Routes for campgrounds
// INDEX - Show all campgrounds
app.get("/campgrounds", function(req, res) {
  // Get all Campgrounds from DB
  Campground.find({}, function(err, allCampgroundsDB) {
    if(err) {
      console.log(err);
    } else {
      res.render("index", {campgrounds: allCampgroundsDB});
    }
  });
});

// CREATE - Add new campground to DB
app.post("/campgrounds", function(req, res) {
  var name = req.body["name"];
  var image = req.body["image-url"];
  var desc = req.body["description"];
  var newCampground = {name: name, image: image, description: desc};
  // Create a new campground and save to DB
  Campground.create(newCampground, function(err, newCampgroundDB) {
    if(err) {
      console.log(err);
    } else {
      res.redirect("/campgrounds");
    }
  });
});

// NEW - Show form to create a new campground
app.get("/campgrounds/new", function(req, res) {
  res.render("new");
});

// SHOW - Show more info about one campground
app.get("/campgrounds/:id", function(req, res) {
  // Find the campground with provided ID
  Campground.findById(req.params.id, function(err, foundCampground) {
    if(err) {
      console.log(err);
    } else {
      // Render show template
      res.render("show", {campground: foundCampground});
    }
  });
});

// Start listening for requests
app.listen(process.env.PORT, process.env.IP, function() {
  console.log("The YelpCamp version Server " + APP_VERSION + " has started...");
});