const router = require("express").Router();

const loginRoutes = require("./login-routes");
const signupRoutes = require("./signup-routes");

router.use("/login", loginRoutes);
router.use("/signup", signupRoutes);

module.exports = router;
