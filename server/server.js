const express = require('express');
const app = express();

const passport = require('passport');

const path = require('path');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const port = 3000;

const db = require('./models/model');
const { cookieKey } = require('./keys').session;

//routers
const authRouter = require('./router/auth-routes');
// const aquarium = require('./router/aquarium');

const userController = require('./controllers/userController')

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/auth', authRouter);

app.use('/api', userController.verifyUser, (req, res) => {
  console.log('GET to api')
  res.send('user verified')
});

if (process.env.NODE_ENV === 'production') {
  app.use('/build', express.static(path.join(__dirname, '../build')));
  app.get('/api', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
  });
}

// app.use('/aquarium', aquarium);

app.use((req, res, err) => {
  //global path error handler
  console.log(err);
  res.status(404).send('requested file not found');
});

app.listen(port, () => {
  console.log(`Express server on ${port}`);
});
