var express = require("express");
const res = require("express/lib/response");
var router = express.Router();
var blogs = require("../public/javascripts/sampleBlogs");
const blogPosts = blogs.blogPosts;

const users = [
  {
    name: "James",
    role: "Instructor",
  },
  {
    name: "Ginny",
    role: "TA",
  },
];

router.get("/all", (req, res, next) => {
  res.json(blogPosts);
});

router.get("/query/:blogNumber", (req, res) => {
  const blogNumber = req.params.blogNumber;
  const specificBlog = blogPosts[blogNumber -1];
  console.log(specificBlog);
  res.json(specificBlog);
});


// router.get("/myname", (req, res) => {
//   console.log("request query: ", req.query);
//   const firstName = req.query.firstname;
//   const lastName = req.query.lastname;
//   console.log(`My Name: ${firstName}`);
//   res.send(`The current user is: ${firstName} ${lastName}`);
// });

// router.get("/getone/:userNumber", (req, res) => {
//   const userNumber = req.params.userNumber;
//   const foundUser = users[userNumber];
//   //JSON: Javascript Object Notation
//   res.json(foundUser);
// });

module.exports = router;
