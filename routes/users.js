var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  
  res.send("respond with a resource");
});

router.get("/date", (req, res, next) => {
  let date = new Date().toLocaleDateString("en-US");
  let time = new Date().toLocaleTimeString("en-US");
  res.send(`Date: ${date} Local Time: ${time}`);
});

router.get("/name", (req, res, next) => {
  res.send(`Sonny Lee Valenzuela`);
});

router.get("/myfavoritemovies", (req, res) => {
  let movies = [
    "God Father", 
    "Lost Boys", 
    "Ferris Bueller's Day Off"
  ];
  res.send(movies);
});

module.exports = router;
