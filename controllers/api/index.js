const router = require("express").Router();

const loginRoutes = require("./login-routes");
const signupRoutes = require("./signup-routes");
const blogRoutes = require("./blog-routes");
const commentRoutes = require("./comment-routes");
const editpostRoutes = require("./editpost.routes");

router.use("/login", loginRoutes);
router.use("/signup", signupRoutes);
router.use("/blog", blogRoutes);
router.use("/comment", commentRoutes);
router.use("/editpost", editpostRoutes);

module.exports = router;
