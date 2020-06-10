// 1 require pkg
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird'); // setting bluebird to be promises library for mongoose
mongoose.plugin(require('./lib/globalToJSON')); // remove the weird _id and ___V
const bodyParser = require('body-parser');

const { port, env, dbURI } = require('./config/environment');

const routes = require('./config/routes'); // 11

const errorHandler = require('./lib/errorHandler');
const customResponses = require('./lib/customResponses');

// 2 connect to our database
mongoose.connect(dbURI);



// 3 create an express app
const app = express();
app.use(cors());

// serve our static files from the public folder
app.use(express.static(`${__dirname}/public`));

if (env !== 'test') app.use(morgan('dev'));

// 4 setup bodyParser to use json. WE ARE NOT GONNA BE USING FORM WITH THIS APP!
app.use(bodyParser.json());

app.use(customResponses);

// 13 global errorHandler AFTER routes
app.use(errorHandler);

app.use(routes); // 11 run nodemon and check any problems so far..

// 5 assign port
app.listen(port, () => console.log(`Express is listening to port ${port}`));

// 6 run nodemon and check any problems so far..
// 7 mkdir models
// 8 toucH models/donut.js
