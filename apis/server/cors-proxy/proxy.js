/* */
const express = require('express');

const job = require(__dirname + '/proxyTask.js');

const app = express();

app.get('/*', (req, res) => {
  job.corsProxy(req, res);
});

module.exports = app;