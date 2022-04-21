let express = require('express')
let mongoose = require('mongoose')
let cors = require('cors')
let bodyParser = require('body-parser')
let dbConfig = require('./database/db')

// Express Route
const studentRoute = require('../backend/routes/student')

// Configure mongoDB Database
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

// Connecting MongoDB Database
mongoose.Promise = global.Promise
mongoose.connect( dbConfig)

