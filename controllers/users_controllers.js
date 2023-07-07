const User = require("../models/user");

// Renders the Sign Up Page
module.exports.signUp = function (req, res) {
  return res.render("users_sign_up", {
    title: "Habit Traker ",
  });
};

// Renders the SignIn Page
module.exports.signIn = function (req, res) {
  console.log("....");
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

module.exports.createSession = function (req, res) {
  console.log(req.body, "hello");
  // const { name, email } = req.body;
  //---------Checking user in database----------//
  User.findOne({
    email: req.body.email,
  }).then((user) => {
    if (!user) {
      console.log(req.body);
      let errors = [];
      errors.push({ msg: "This email is not registered" });
      res.render("users_sign_in", {
        title: "Habit Traker ",
        errors,
        // name,
        // email,
      });
    }
    //---------Redirect to dashboard----------//
    else {
      // console.log(req.body);
      res.redirect(`/dashboard?user=${user._id}`);
    }
  });
};

// controller for log out
module.exports.logOut = function (req, res) {
  return res.redirect("/users/signin");
};
