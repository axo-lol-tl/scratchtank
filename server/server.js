const express = require('express');
const app = express();

const path = require('path');

const cookies = require('cookie-session');
const bodyParser = require('body-parser');

//routers
const login = require('./router/login');
const signin = require('./router/signin');
const aquarium = require('./router/aquarium');

const port = 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded());


app.use('/api', (req, res) => res.sendStatus(200));

app.use('/login', login);

app.use('/aquarium', aquarium);

if (process.env.NODE_ENV === 'production') {
  app.use('/build', express.static(path.resolve(__dirname, '../build')));
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
  });
}

app.use('/', (req, res, err) => {
  //global path error handler
  console.log(err);
  res.status(404).send('requested file not found');
})

app.listen(port, () => {
  console.log(`Express server on ${port}`);
});