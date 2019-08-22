const express = require('express');
bodyParser = require('body-parser');
const app = express();
const port = 8000;
//app.listen(port, () => {console.log('We are live on ' + port);});

require('./app/routes')(app, {});app.listen(port, () => {  console.log('We are live on ' + port);});