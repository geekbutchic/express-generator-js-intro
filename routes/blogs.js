var express = require("express");
var router = express.Router();
var blogs = require("../public/javascripts/sampleBlogs");
const blogPosts = blogs.blogPosts;

router.get("/all", (req, res, next) => {
    res.json(blogPosts)
})

router.get("/sorted", (req, res, next) => {
  const sortOrder = req.query.sort;
  blogPosts.sort((a, b) => {
    const aCreatedAt = new Date(a.createdAt);
    const bCreatedAt = new Date(b.createdAt);

    if (sortOrder === "asc") {
      if (aCreatedAt < bCreatedAt) {
        return -1;
      }
      if (aCreatedAt > bCreatedAt) {
        return 1;
      }
    } else if (sortOrder === "desc") {
      if (aCreatedAt > bCreatedAt) {
        return -1;
      }
      if (aCreatedAt < bCreatedAt) {
        return 1;
      }
    }
    return 0;
  });
  res.json(blogPosts)
});

router.get("/query/:blogNumber", (req, res) => {
  const blogNumber = req.params.blogNumber;
  const specificBlog = blogPosts[blogNumber - 1];
  console.log(specificBlog);
  res.json(specificBlog);
});

module.exports = router;
