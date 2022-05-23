const express = require("express");
const router = express.Router();
const blogs = require("../public/javascripts/sampleBlogs");
const blogPosts = blogs.blogPosts;

router.get("/all", (req, res, next) =>  {
  res.json(blogPosts);
});

//URL = blogs/sorted?sort=asc === 3, 4, 1, 5, 2
//URL = blogs/sorted?sort=desc === 2, 5, 1, 4, 3
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
  res.json(blogPosts);
});

router.get("/query/:blogNumber", (req, res) => {
  const blogNumber = req.params.blogNumber;
  const specificBlog = blogPosts[blogNumber - 1];
  console.log(specificBlog);
  res.json(specificBlog);
});

//RENDERS DATA - FOR POST-BLOG EJS
router.get("/postblog", (req, res, next) => {
  console.log("Post Body: ", req.body);
  res.render("postBlog");
});

router.post("/submit", (req, res, next) => {
  console.log(req.body)
  console.log("Blog List Before: ", blogPosts)
  const today = new Date()
  const newPost = {
      title: req.body.title,
      text: req.body.text,
      author: req.body.author,
      createdAt: today,
      id: String(blogPosts.length + 1)
  }
  blogPosts.push(newPost)
  console.log("Blog List After: ", blogPosts)

  res.send("OK");
})


//DISPLAY BLOGS
router.get("/displayblogs", (req, res, next) => {
 console.log("Display Blogs: ", req.body);
 res.render("displayBlogs")
}) 



module.exports = router;
