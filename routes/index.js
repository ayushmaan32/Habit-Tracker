const express = require("express");

const router = express.Router();
console.log("router is loaded");

const homeController = require("../controllers/home_controllers");
const dashboardController = require("../controllers/dashboard_controllers");

const dashboardRoutes = require("./dashboard");

router.get("/", homeController.home);
router.use("/users", require("./users"));
router.use("/dashboard", dashboardRoutes);
router.use("/weekly-details", require("./weekly_details"));

module.exports = router;
