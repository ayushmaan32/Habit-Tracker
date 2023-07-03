const express = require("express");

const router = express.Router();
console.log("router is loaded");

const homeController = require("../controllers/home_controllers");
const dashboardController = require("../controllers/dashboard_controllers");

router.get("/", homeController.home);
router.use("/users", require("./users"));
router.get("/dashboard", dashboardController.dashboard);

module.exports = router;
