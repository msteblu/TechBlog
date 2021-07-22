const router = require("express").Router();
const { Blog } = require("../../models");
const withAuth = require("../../utils/auth");

// Editing a blog post
router.put("/", withAuth, async (req, res) => {
  try {
    const blogData = await Blog.update(
      {
        title: req.body.title,
        content: req.body.content,
      },
      {
        where: {
          id: req.session.blogId,
        },
      }
    );
    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Deleting a blog post
router.delete("/", withAuth, async (req, res) => {
  try {
    const blogData = await Blog.destroy({
      where: {
        id: req.session.blogId,
        user_id: req.session.userId,
      },
    });
    if (!blogData) {
      res.status(404).json({ message: "No blog found with this id!" });
      return;
    }
    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
