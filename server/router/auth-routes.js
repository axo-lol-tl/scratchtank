const express = require('express');
const router = express.Router();

const passport = require('passport');
const path = require('path');
const passportSetup = require('../passport');

// const signinController = require('../controllers/signinController');

router.get('/success', (req, res) =>
  res.sendFile(path.resolve(__dirname, '../../index.html'))
);

router.get('/logout', (req, res) => res.send('logging out'));

router.get(
  '/google',
  passport.authenticate('google', { scope: ['email', 'profile'] })
);

router.get(
  '/google/redirect',
  passport.authenticate('google', {
    successRedirect: '/api/auth/google/success',
    failureRedirect: '/api/auth/google/failure',
  }),
  (req, res) => {
    res.redirect('/api');
  }
);

module.exports = router;
