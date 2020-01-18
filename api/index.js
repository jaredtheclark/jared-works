const express = require('express');
const session = require('express-session')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const passport = require('passport')
const mongoose =  require('mongoose')
const app = express();
const consola = require('consola')

import api from './api'
import { db } from './config'

app.use(bodyParser.json())
app.use(cookieParser())
app.use(session({
  secret: 'sessionsecr3tkeysarenecessary',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 60000 }
}))
app.use(passport.initialize())
app.use(passport.session())


// Set up DB
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
// mongoose.Promise = global.Promise

var mongo = mongoose.connection;
mongo.on('error', consola.error.bind('connection error:'));
mongo.once('open', function() {
  // we're connected!
  consola.success('Database Connected!')
});

// Set up passport auth
require('./auth_config')(passport)

app.use('/', api)

module.exports = {
  path: '/api',
  handler: app
}
