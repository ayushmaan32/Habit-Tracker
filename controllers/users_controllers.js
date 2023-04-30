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
