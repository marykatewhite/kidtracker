var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");

// Telling passport we want to use a Local Strategy. In other words, we want login with a username and password
passport.use(
  new LocalStrategy(
    // Our user will sign in using a username
    {
      email: "email"
    },
    function(email, password, done) {
      // When a user tries to sign in this code runs
      db.teacherModel.findOne({
        where: {
          teacheremail: email
        }
      }).then(function(dbTeacher) {
        // If there's no user with the given username
        if (!dbTeacher) {
          return done(null, false, {
            message: "Email not found."
          });
        }
        // If there is a user with the given username, but the password the user gives us is incorrect
        else if (!dbTeacher.validPassword(password)) {
          return done(null, false, {
            message: "Incorrect password."
          });
        }
        // If none of the above, return the user
        return done(null, dbTeacher);
      });
    }
  )
);

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function(teacher, cb) {
  cb(null, teacher);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;
