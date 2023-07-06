const User = require("../models/user");
const Habit = require("../models/habits");

//---------Dashboard GET----------//

// dashboardController.js
module.exports.dashboard = function (req, res) {
  const userId = req.query.user;

  User.findOne({ _id: userId })
    .then((user) => {
      return Habit.find({}).exec();
    })
    .then((habits) => {
      // console.log(habits);
      res.render("dashboard", {
        habit_list: habits,
        title: "Habit Tracker",
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Internal Server Error");
    });
};

// controller to create a habit

module.exports.createHabit = function (req, res) {
  let days = {
    one: "none",
    two: "none",
    three: "none",
    four: "none",
    five: "none",
    six: "none",
    seven: "none",
  };

  const habitData = {
    habit: req.body.habit,
    date: Date(),
    days: days,
  };

  Habit.create(habitData)
    .then((newHabit) => {
      // console.log(newHabit);
      return res.redirect("back");
    })
    .catch((err) => {
      console.log("Error in creating habit", err);
      return res.redirect("back");
    });
};

module.exports.deleteHabit = function (req, res) {
  let id = req.query.id;

  // Deleting the habit
  Habit.findByIdAndDelete(id)
    .then(() => {
      return res.redirect("back");
    })
    .catch((err) => {
      console.log("Error in deleting Habit", err);
      return res.redirect("back");
    });
};
