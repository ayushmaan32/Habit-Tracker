const express = require("express");

const router = express.Router();

const usersController = require("../controllers/users_controllers");

router.get("/signup", usersController.signUp);
router.get("/sigin", usersController.signIn);

module.exports = router;
