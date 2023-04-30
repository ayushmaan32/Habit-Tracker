const User = require("../models/user");

// Renders the Sign Up Page
module.exports.signUp = function (req, res) {
  return res.render("users_sign_up", {
    title: "Habit Traker ",
  });
};

// Renders the SignIn Page
module.exports.signIn = function (req, res) {
  return res.render("users_sign_in", {
    title: "Habit Traker ",
  });
};

// get the sign up data
module.exports.create = async function (req, res) {
  try {
    if (req.body.password != req.body.confirm_password) {
      return res.redirect("back");
    }

    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      const newUser = await User.create(req.body);
      return res.redirect("/users/signin");
    } else {
      return res.redirect("back");
    }
  } catch (err) {
    console.log("error in signing up: ", err);
    return;
  }
};
