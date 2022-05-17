var express = require("express");
var router = express.Router();
var blogs = require("../public/javascripts/sampleBlogs")
const blogPosts = blogs.blogPosts

router.get('/all', (req, res, next) => {
res.json(blogPosts)
})

router.get('/blog:id', (req, res, next) => {
    const id = req.params.
    res.json(`${id}`)
})


// router.get("/q", (req, res, next) => {
//   console.log("request query: ", req.query);
//   const firstName = req.query.firstName
//   const lastName = req.query.lastName
//   res.send(firstName)
// });

module.exports = router;