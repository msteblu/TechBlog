const router = require("express").Router();
const withAuth = require("../utils/auth");
// const { Gallery, Painting } = require('../models');

// GET all galleries for homepage
router.get("/", async (req, res) => {
  console.log("root");
  try {
    res.render("homepage", {
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
