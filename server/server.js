const express = require('express');
const app = express();

const passport = require('passport');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const authRouter = require('./routes/auth-routes');

const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.set('view engine', 'html');

app.use(passport.initialize());
app.use(passport.session());

app.use('/api/auth', authRouter);

if (process.env.NODE_ENV === 'production') {
  app.use('/build', express.static(path.join(__dirname, '../build')));
  app.get('/api', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
  });
}

app.listen(port, () => {
  console.log(`Express server on ${port}`);
});
