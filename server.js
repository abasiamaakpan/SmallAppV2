'use strict';

const express = require('express');
require('dotenv').config()
// Constants


// App
const app = express();
app.get('/', (req, res) => {
  res.send('Small application testing');
});
//fvfd
app.listen(process.env.PORT, process.env.HOST);
console.log("Ignore git ignore")
console.log(`Running on http://${process.env.HOST}:${process.env.PORT}`);

module.exports = app;
