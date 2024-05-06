
const express = require('express');
const db = require('./db.json');

const app = express();

app.get('/api/data', (req, res) => {
  res.json(db);
});

module.exports = app;
