const express = require('express');
const router = express.Router();

const passport = require('passport');
const path = require('path');
const passportSetup = require('../passport');

// const signinController = require('../controllers/signinController');

router.get('/success', (req, res) => res.redirect('/fishtank'));

router.get('/failure', (req, res) => res.redirect('/'));

router.get('/logout', (req, res) => {
  req.logOut();
  res.send('logging out')
});

router.get(
  '/google',
  passport.authenticate('google', { scope: ['email', 'profile'] })
);

router.get(
  '/google/redirect',
  passport.authenticate('google', {
    successRedirect: '/api/auth/success',
    failureRedirect: '/api/auth/failure',
  })
);

module.exports = router;
