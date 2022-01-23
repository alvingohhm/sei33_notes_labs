const User = require("../models/user");
const bcrypt = require("bcrypt");

const sessionController = {
  newSession: (req, res) => {
    let errors = [];
    let user = {
      username: "",
      password: "",
    };

    if (req.session.redirectData) {
      const { user: redirectUser, errors: redirectErrors } =
        req.session.redirectData;
      user = redirectUser;
      errors = redirectErrors;
      delete req.session["redirectData"];
    }

    res.render("sessions/new.ejs", {
      pageTitle: "Kingsman - Login",
      user,
      errors,
      auth: req.session.auth || false,
    });
  },

  createSession: async (req, res) => {
    let errors = [];
    const { username, password } = req.body;
    try {
      //check for empty fields
      if (!username || !password) {
        errors.push({ msg: "All fields require and cannot be empty" });
      }

      if (errors.length > 0) {
        req.session.redirectData = {
          errors,
          user: req.body,
        };
        res.redirect("sessions/new");
      } else {
        const user = await User.findOne({ username }).exec();
        const valid = await bcrypt.compare(password, user.password);

        if (user && valid) {
          delete user["password"];
          req.session.auth = true;
          req.session.currentUser = user;

          res.redirect("/room");
        } else {
          errors.push({ msg: "invalid username or password" });
          req.session.redirectData = {
            errors,
            user: req.body,
          };

          res.redirect("sessions/new");
        }
      }
    } catch (error) {
      console.error(error);
      errors.push({ msg: "System errors occurs while login agent" });
      req.session.redirectData = {
        errors,
        user: {
          username: "",
          password: "",
        },
      };

      res.redirect("sessions/new");
    }
  },

  deleteSession: (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        console.log("errors occurs while login out agent");
        res.redirect("/");
      } else {
        res.redirect("/");
      }
    });
  },
};

module.exports = sessionController;
