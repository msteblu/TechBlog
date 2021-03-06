const router = require("express").Router();
const { Blog } = require("../../models");
const withAuth = require("../../utils/auth");

//CREATE new blog post
router.post("/", withAuth, async (req, res) => {
  try {
    const newBlog = await Blog.create({
      ...req.body,
      user_id: req.session.userId,
    });
    res.status(200).json(newBlog);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

module.exports = router;
