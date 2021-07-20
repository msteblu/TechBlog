const router = require("express").Router();

const userRoutes = require("./user-routes");
const signupRoutes = require("./signup-routes");

router.use("/users", userRoutes);
router.use("/signup", signupRoutes);

module.exports = router;
