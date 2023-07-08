const User = require("../models/user");
const Habit = require("../models/habits");

//---------Dashboard GET----------//

module.exports.dashboard = async function (req, res) {
  try {
    const email = req.query.user;

    const user = await User.findOne({ email });
    // console.log(user);
    const habits = await Habit.find({ email }).exec();
    res.render("dashboard", {
      habit_list: habits,
      user,
      title: "Habit Tracker",
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
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
    email: req.query.email,
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

// controller to delete a habit
module.exports.deleteHabit = function (req, res) {
  let id = req.query.id;

  Habit.findByIdAndDelete(id)
    .then(() => {
      return res.redirect("back");
    })
    .catch((err) => {
      console.log("Error in deleting Habit", err);
      return res.redirect("back");
    });
};
