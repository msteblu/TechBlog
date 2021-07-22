const router = require("express").Router();
const withAuth = require("../utils/auth");
const { Blog, User, Comment } = require("../models");
const { Op } = require("sequelize");

// GET all blogs for homepage
router.get("/", async (req, res) => {
  try {
    // Get all blogs and JOIN with user data
    const blogData = await Blog.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });
    // Serialize data so the template can read it
    const blogs = blogData.map((blog) => blog.get({ plain: true }));
    // Pass serialized data and session flag into template
    res.render("homepage", {
      blogs,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET individual blog posts (by ID)
router.get("/blog/:id", withAuth, async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });
    req.session.blogId = blogData.getDataValue("id");

    const blog = blogData.get({ plain: true });

    // And the comments that go with it
    const commentData = await Comment.findAll({
      where: {
        blog_id: {
          [Op.eq]: req.params.id,
        },
      },
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    const comments = commentData.map((comment) => comment.get({ plain: true }));

    res.render("blog", {
      ...blog,
      comments,
      loggedIn: req.session.loggedIn,
      blogId: req.params.id,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET the dashboard for the user
router.get("/dashboard", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.userId, {
      attributes: { exclude: ["password"] },
      include: [{ model: Blog }],
    });
    const user = userData.get({ plain: true });
    res.render("dashboard", {
      ...user,
      loggedIn: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Render the login page
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

// Render the signup page
router.get("/signup", async (req, res) => {
  res.render("signup");
});

// Get comment page
router.get("/comment", withAuth, async (req, res) => {
  const blogData = await Blog.findByPk(req.session.blogId, {
    include: [
      {
        model: User,
        attributes: ["username"],
      },
    ],
  });
  const blog = blogData.get({ plain: true });
  res.render("comment", {
    ...blog,
    loggedIn: true,
  });
});

// Get create a new post page
router.get("/newpost", withAuth, async (req, res) => {
  res.render("newpost", {
    username: req.session.userName,
  });
});

// Get edit a post page
router.get("/editpost/:id", withAuth, async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });
    req.session.blogId = blogData.getDataValue("id");

    const blog = blogData.get({ plain: true });

    res.render("editpost", {
      ...blog,
      loggedIn: req.session.loggedIn,
      blogId: req.params.id,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
