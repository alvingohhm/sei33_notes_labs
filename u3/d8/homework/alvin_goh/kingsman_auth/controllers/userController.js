const User = require("../models/user");
const seedUsers = require("../models/seed");
const bcrypt = require("bcrypt");

const userController = {
  newUserPage: (req, res) => {
    let errors = [];
    let user = {
      username: "",
      password: "",
      messages: [],
    };

    if (req.session.redirectData) {
      const { user: redirectUser, errors: redirectErrors } =
        req.session.redirectData;
      user = redirectUser;
      errors = redirectErrors;
      delete req.session["redirectData"];
    }

    res.render("users/new.ejs", {
      pageTitle: "Kingsman - New Agent SignUp",
      user,
      errors,
      auth: req.session.auth || false,
    });
  },

  createUser: async (req, res) => {
    let errors = [];
    const { username, password, confirm_password } = req.body;
    try {
      //check for existing agent
      const agentExist = await User.findOne({ username })
        .select("username")
        .exec();

      if (agentExist) {
        errors.push({ msg: "Agent already exist" });
      } else {
        // Check required fields
        if (!username || !password || !confirm_password) {
          errors.push({ msg: "All fields require and cannot be empty" });
        }
        // Check password
        if (password !== confirm_password) {
          errors.push({ msg: "Passwords and confirm password do not match" });
        }
      }

      const user = {
        username,
        password,
        confirm_password,
      };

      if (errors.length > 0) {
        req.session.redirectData = {
          errors,
          user: user,
        };
        res.redirect("users/new");
      } else {
        const hashPassword = await bcrypt.hash(password, 12);
        user.messages = [];
        user.password = hashPassword;

        await User.create(user, (err, data) => {
          if (err) {
            console.log(err);
            errors.push({ msg: "Unable to register agent" });
            req.session.redirectData = {
              errors,
              user: user,
            };

            res.redirect("users/new");
          }
          res.redirect("/");
        });
      }
    } catch (error) {
      console.error(error);
      errors.push({ msg: "System error occurs while registering agent" });
      req.session.redirectData = {
        errors,
        user: {
          username: "",
          password: "",
          confirm_password: "",
        },
      };

      res.redirect("sessions/new");
    }
  },

  seedAgents: async (req, res) => {
    try {
      const agents = await Promise.all(
        seedUsers.map(async (user) => {
          const hashPassword = await bcrypt.hash(user.password, 12);
          user.password = hashPassword;
          return user;
        })
      );
      await User.deleteMany({});
      await User.create(agents, (err, data) => {
        if (err) {
          console.log(err);
        }
        res.redirect("/");
      });
    } catch (error) {
      console.log(error);
      res.redirect("/");
    }
  },
};

module.exports = userController;
