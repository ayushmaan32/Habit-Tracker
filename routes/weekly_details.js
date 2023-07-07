const express = require("express");

const router = express.Router();

// getting user controller
const detailsController = require("../controllers/weekly_controller");
router.get("/", detailsController.weeklyDetails);

// update route for habits
router.post("/update-habit/", detailsController.updateHabit);
module.exports = router;
