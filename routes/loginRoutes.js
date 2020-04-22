/* ROUTES */

const connectEnsureLogin = require('connect-ensure-login');

app.post('/login', (req, res, next) => {
  passport.authenticate('local',
  (err, user, info) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.redirect('/login?info=' + info);
    }

    req.logIn(user, function(err) {
      if (err) {
        return next(err);
      }

      return res.redirect('/');
    });

  })(req, res, next);
});

// this will need to change after the build, right???
app.get('/',
  (req, res) => res.sendFile('../client/build/index.html',
  { root: __dirname })
);

app.get('/dashboard',
  connectEnsureLogin.ensureLoggedIn(),
  (req, res) => res.sendFile('../client/build/dashboard.html', {root: __dirname})
);

