const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');

const App = express();
const routes = require('./app/routes');
const port = 8000;

App.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(
  db.url,
  { useNewUrlParser: true },
  (err, database) => {
    if (err) return console.log(err);
    routes(App, database.db('reset'));
    App.listen(port, () => {
      console.log(`we are live on ${port}`);
    });
  },
);
