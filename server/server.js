const express = require('express');
const app = express();

const passport = require('passport');

const path = require('path');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const port = 3000;

//routers
<<<<<<< HEAD
const loginRouter = require('./router/login');
const aquariumRouter = require('./router/aquarium');

const port = 3000;
=======
>>>>>>> f7841b7e418bf984532b0ffd38176b5e6597532f

const authRouter = require('./router/auth-routes');
// const aquarium = require('./router/aquarium');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(passport.initialize());
app.use(passport.session());

<<<<<<< HEAD
app.use('/api', (req, res) => res.sendStatus(200));

app.use('/login', loginRouter);

app.use('/aquarium', aquariumRouter);
=======
app.use('/api/auth', authRouter);

app.use('/api', (req, res) => res.sendStatus(200));
>>>>>>> f7841b7e418bf984532b0ffd38176b5e6597532f

if (process.env.NODE_ENV === 'production') {
  app.use('/build', express.static(path.join(__dirname, '../build')));
  app.get('/api', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
  });
}

// app.use('/aquarium', aquarium);

app.use('/', (req, res, err) => {
  //global path error handler
  console.log(err);
  res.status(404).send('requested file not found');
});

app.listen(port, () => {
  console.log(`Express server on ${port}`);
});
