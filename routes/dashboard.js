const express = require("express");

const router = express.Router();

const dashboardController = require("../controllers/dashboard_controllers");

console.log("dashboard");
router.get("/", dashboardController.dashboard);
router.post("/create-habit", dashboardController.createHabit);
router.get("/delete-habit", dashboardController.deleteHabit);
module.exports = router;
