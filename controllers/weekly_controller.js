const Habit = require("../models/habits");
// const { json } = require("express");

// controller for weekly details
module.exports.weeklyDetails = function (req, res) {
  const email = req.query.email;
  // console.log(email);
  Habit.find({ email })
    .then((habits) => {
      return res.render("weekly", {
        title: "Habit Tracker",
        habit_list: habits,
        user: email,
      });
    })
    .catch((err) => {
      console.log("Error in fetching the habits", err);
      return res.redirect("/");
    });
};

// Updating the database for the request
module.exports.updateHabit = function (req, res) {
  let id = req.query.id;

  // finding the habit
  Habit.findById(id)
    .then((habit) => {
      if (!habit) {
        console.log("Habit not found");
        return res.redirect("back");
      }

      let newHabit = habit;
      let day = req.query.day;
      let val = req.query.val;

      for (let prop in newHabit.days) {
        if (prop == day) {
          if (val === "none") {
            newHabit.days[day] = "yes";
            newHabit.streak++;
          } else if (val === "yes") {
            newHabit.days[day] = "no";
            newHabit.streak--;
          } else {
            newHabit.days[day] = "none";
          }
        }
      }

      // updating the found habit
      return Habit.findByIdAndUpdate(id, newHabit).exec();
    })
    .then(() => {
      return res.redirect("back");
    })
    .catch((err) => {
      console.log("Error in updating habit", err);
      return res.redirect("back");
    });
};
