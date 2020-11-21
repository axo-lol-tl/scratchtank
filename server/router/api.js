const express = require('express');
const router = express.Router();
const authRouter = require('./auth-routes');

const userController = require('../controllers/userController');

router.use('/auth', authRouter);

router.get('/', userController.verifyUser, (req, res) => {
  console.log('GET to api')
  res.json({user: req.user[0]})
});

router.use('/fishes', userController.verifyUser, (req, res) => {
  console.log('Get to fishes');
  res.json({user: req.user[0]})
})

router.get('/success', (req, res) => res.redirect('/fishtank'));

module.exports = router;
