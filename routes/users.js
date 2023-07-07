const express = require("express");

const router = express.Router();

const usersController = require("../controllers/users_controllers");

router.get("/signup", usersController.signUp);
router.get("/signin", usersController.signIn);

router.post("/create", usersController.create);

router.post("/create-session", usersController.createSession);

router.get("/log-out", usersController.logOut);
module.exports = router;
