const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const { Strategy } = require('passport-local');
const { User } = require('./schema');

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URL);

const app = express();

app.use(morgan('combined'));

app.use(cookieParser());

app.use(bodyParser.json());

app.use(session({
  secret: 'auth',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: false,
    maxAge: null,
  },
}));

app.use(passport.initialize());

app.use(passport.session());

passport.use(new Strategy(User.authenticate()));

passport.serializeUser(User.serializeUser());

passport.deserializeUser(User.deserializeUser());

app.post('/signup', (req, res, next) => {
  User.register(new User({
    username: req.body.username
  }), req.body.password, (err, account) => {
    if (err) {
      res.json({
        status: 'fail',
        message: err.message
      });

      res.status(200);

      return;
    }

    passport.authenticate('local')(req, res, () => {
      req.session.save((err) => {
        if (err) {
          return next(err);
        }

        res.json({
          status: 'success',
        });

        res.status(200);
      });
    });
  });
});

app.post('/login', passport.authenticate('local'), (req, res, next) => {
  req.session.save((err) => {
    if (err) {
      return next(err);
    }

    res.json({
      status: 'success',
    });

    res.status(200);
  });
});

app.get('/logout', (req, res, next) => {
  req.logout();

  req.session.save((err) => {
    if (err) {
      return next(err);
    }

    res.json({
      status: 'success',
    });

    res.status(200);
  });
});

app.listen(3002);
